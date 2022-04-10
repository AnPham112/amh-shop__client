import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Helmet from '../../components/Helmet'
import { GlobalStateContext } from '../../GlobalState'
import { Text, Row } from '@nextui-org/react';
import Modal from '../../components/Modal';
import axios from 'axios';
import PaypalButton from './Paypal';
import { toast } from 'react-toastify';

function Cart() {
  const state = useContext(GlobalStateContext);
  const [cart, setCart] = state.userAPI.cart
  const token = state.token;
  const [total, setTotal] = useState(0)

  const addToCart = async (cart) => {
    await axios.patch('/user/addcart', { cart }, {
      headers: { Authorization: token }
    })
  }

  useEffect(() => {
    const getTotal = () => {
      const total = cart.reduce((prev, item) => {
        return prev + (item.price * item.quantity)
      }, 0)
      setTotal(total)
    }
    getTotal()
  }, [cart])

  const increment = (id) => {
    cart.forEach(item => {
      if (item._id === id) {
        item.quantity += 1
      }
    })
    setCart([...cart])
    addToCart(cart)
  }

  const decrement = (id) => {
    cart.forEach(item => {
      if (item._id === id) {
        item.quantity === 1 ? item.quantity = 1 : item.quantity -= 1
      }
    })
    setCart([...cart])
    addToCart(cart)
  }

  const handleRemoveProduct = (id) => {
    cart.forEach((item, index) => {
      if (item._id === id) {
        cart.splice(index, 1)
      }
    })
    setCart([...cart])
    addToCart()
  }

  const tranSuccess = async (payment) => {
    const { paymentID, address } = payment

    await axios.post('/api/payment', { cart, paymentID, address }, {
      headers: { Authorization: token }
    })

    setCart([])
    addToCart([])
    toast.success("You have placed an order successfully!")
  }

  if (cart.length === 0)
    return (<h2>Cart empty</h2>)
  return (
    <Helmet title="Cart">
      <div className="container">
        {cart.map((item) => (
          <div key={item._id} className="cart" style={{ paddingTop: '40px', borderBottom: '1px solid #fff' }}>
            <div className="cart__item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex' }}>
                <div style={{ width: '100px' }}>
                  <img src={item.images.url} alt="" style={{ width: '100%' }} />
                </div>
                <div className="cart__item__info">
                  <h2>{item.title}</h2>
                  <span>${item.price * item.quantity}</span>
                  <p>{item.description}</p>
                  <p>{item.content}</p>
                  <p>Sold: {item.sold}</p>
                </div>
              </div>
              <div className="cart__amount">
                <button onClick={() => decrement(item._id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increment(item._id)}>+</button>
              </div>
              <div onClick={() => handleRemoveProduct(item._id)}>X</div>
            </div>
          </div>
        ))}
        <div className='cart__total'>
          <h3>Total: ${total}</h3>
          <PaypalButton
            total={total}
            tranSuccess={tranSuccess}
          />
        </div>
      </div>
    </Helmet >
  )
}

export default Cart