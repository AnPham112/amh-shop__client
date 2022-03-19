import React from 'react'
import Button from './Button'

function ProductInfo({ product }) {
  return (
    <div style={{ backgroundColor: '#fff' }} className="product-info">
      <img className="product-info__img" src='' alt='123' />
      <div className="product-info__title">{product.title}</div>
      <div className="product-info__price">{product.price}</div>
      <div className="product-info__desc">{product.description}</div>
      <div className="product-info__category">{product.category}</div>
      <div className="product-info__actions">
        <Button>Add to cart</Button>
        <Button>Buy</Button>
      </div>
    </div>

  )
}

export default ProductInfo