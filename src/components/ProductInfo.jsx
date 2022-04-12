import React from 'react'
import Button from './Button'

function ProductInfo({ productDetail, addCart }) {
  console.log(productDetail.category)
  return (
    <div className="container">
      <div className="product-info">
        {productDetail.productImages?.length &&
          <div className="product-info__img"  >
            <img src={productDetail.productImages[0].url} alt='123' />
          </div>
        }
        <div className="product-info__detail">
          <h2 className="product-info__detail__title">{productDetail.title}</h2>
          <p className="product-info__detail__price">${productDetail.price}</p>
          <p className="product-info__detail__desc">{productDetail.description}</p>
          <p className="product-info__detail__category">Category: {productDetail.category}</p>
          <p className="product-info__detail__sold">Sold: {productDetail.sold}</p>
          <div className="product-info__detail__actions">
            <Button
              backgroundcolor="red"
              shadowcolor="red"
              color="white"
              onClick={() => addCart(productDetail)}
            >
              Buy now
            </Button>
          </div>
        </div>

      </div>
    </div>

  )
}

export default ProductInfo