import { Button, Loading } from "@nextui-org/react"
import axios from "axios"
import React, { useContext, useState } from 'react'
import { useDispatch } from "react-redux"
import { Link } from 'react-router-dom'
import { GlobalStateContext } from '../GlobalState'
import { deleteProduct } from "../redux/actions/productActions"
import Modal from "./Modal"

function ProductCard({ product, isAdmin }) {
  const state = useContext(GlobalStateContext)
  const addCart = state.userAPI.addCart
  const [visible, setVisible] = useState(false);
  const [token] = state.token;
  const dispatch = useDispatch();

  const handleDeleteProduct = () => {
    setVisible(true)
  }

  const onDeleteProduct = async (productId) => {
    try {
      dispatch(deleteProduct(productId, token))
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

            <img src={product.productImages[0].url} alt="" />

          }
          <div className="product-item__info">
            <Link to={`/detail/${product._id}`}>
              <h2 className="product-item__info__title">
                {product.title}
              </h2>
            </Link>
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
                  bordered
                  auto
                  rounded
                  onClick={() => addCart(product)}
                  className="product-item__actions__buy__btn"
                >
                  Buy
                </Button>

                <Link className="product-item__actions__view__btn" to={`/detail/${product._id}`}>
                  View
                </Link>

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
    </>
  )
}

export default ProductCard