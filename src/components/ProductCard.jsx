import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalStateContext } from '../GlobalState'
import Button from './Button'

function ProductCard({ product, isAdmin }) {
  const state = useContext(GlobalStateContext)
  const addCart = state.userAPI.addCart

  return (
    <div className="col l-3 m-6 c-12">
      <div className="product-item">
        {
          isAdmin && <input
            type="checkbox"
            checked={product.checked}
          />
        }
        <div className="product-item__img">
          <img src={product.images.url} alt="" />
        </div>

        <div className="product-item__info">
          <h2 className="product-item__info__title">
            <Link to={`${product._id}`}>
              {product.title}
            </Link>
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
                bg="red"
                shadow="red"
                color="white"
              >
                <Link to="">
                  Delete
                </Link>
              </Button>

              <Button
                bg="main"
                shadow="main"
                color="white"
              >
                <Link to={`/edit_product/${product._id}`}>
                  Edit
                </Link>
              </Button>
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
    </div >
  )
}

export default ProductCard