import { Button, Loading } from "@nextui-org/react"
import axios from "axios"
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { GlobalStateContext } from '../GlobalState'
import Modal from "./Modal"
// import Button from './Button'

function ProductCard({ product, isAdmin }) {
  const state = useContext(GlobalStateContext)
  const addCart = state.userAPI.addCart
  const [visible, setVisible] = useState(false);
  const [token] = state.token;
  const [loading, setLoading] = useState(false)

  const handleDeleteProduct = () => {
    setVisible(true)
  }

  const onDeleteProduct = async (productId) => {
    try {
      setLoading(true)
      await axios.delete(`api/products/${productId}`, {
        headers: { Authorization: token }
      })
      setLoading(false)
      setVisible(false)
    } catch (error) {
      alert(error.response.data.msg)
    }
  }

  return (
    <>
      <div className="col l-3 m-6 c-12">
        <div className="product-item">
          {product.productImages?.length &&
            <div className="product-item__img">
              <img src={product.productImages[0].url} alt="" />
            </div>
          }

          <div className="product-item__info">
            <h2 className="product-item__info__title">
              {product.title}
            </h2>
            <span className="product-item__info__price">
              ${product.price}
            </span>
            <p className="product-item__info__description">
              {product.description}
            </p>
          </div>
          <div className="product-item__actions">
            {isAdmin ? (
              <>
                <Button
                  auto
                  onClick={handleDeleteProduct}
                >
                  Delete
                </Button>


                <Link to={`/edit_product/${product._id}`}>
                  <Button auto>
                    Edit
                  </Button>
                </Link>

              </>
            ) : (
              <>
                <Button
                  bg="red"
                  shadow="red"
                  color="white"
                  onClick={() => addCart(product)}
                >
                  <Link to="">
                    Buy
                  </Link>
                </Button>

                <Button
                  bg="main"
                  shadow="main"
                  color="white"
                >
                  <Link to={`/detail/${product._id}`}>
                    View
                  </Link>
                </Button>

              </>

            )}
          </div>
        </div>
      </div>
      <Modal
        title={"Do you really want to delete product?"}
        open={visible}
        onClose={() => setVisible(false)}
        onDeleteProduct={onDeleteProduct}
        productId={product._id}
      />
      {
        loading && <div className="loading">
          <Loading />
        </div>
      }
    </>
  )
}

export default ProductCard