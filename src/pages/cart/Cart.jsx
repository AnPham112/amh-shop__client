import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Helmet from '../../components/Helmet'
import { GlobalStateContext } from '../../GlobalState'

function Cart() {
  const state = useContext(GlobalStateContext);
  const [cart, setCart] = state.userAPI.cart
  const [total, setTotal] = useState(0)


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
  }

  const decrement = (id) => {
    cart.forEach(item => {
      if (item._id === id) {
        item.quantity === 1 ? item.quantity = 1 : item.quantity -= 1
      }
    })
    setCart([...cart])
  }

  const removeProduct = (id) => {
    if (window.confirm("Do you want to delete this product?")) {
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1)
        }
      })
      setCart([...cart])
    }
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
                  {/* <h6>#id: {item.product_id}</h6> */}
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
              <div onClick={() => removeProduct(item._id)}>X</div>
            </div>
          </div>
        ))}
        <div className='cart__total'>
          <h3>Total: ${total}</h3>
          <Link to="#!">Payment</Link>
        </div>

      </div>

    </Helmet >
  )
}

export default Cart