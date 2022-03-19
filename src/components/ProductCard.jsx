import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  return (
    <div className="product-item" style={{ background: '#fff' }}>
      {/* <div className="product-item__img" style={{ backgroundImage: `url(${product.images[0].url})` }}>

      </div> */}
      <h2 className="product-item__title">
        <Link to={`${product._id}`}>
          {product.title}
        </Link>
      </h2>
      <span className="product-item__price">
        {product.price}
      </span>
    </div>
  )
}

export default ProductCard