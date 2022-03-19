import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Helmet from '../../components/Helmet'
import ProductCard from '../../components/ProductCard'

function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('/products').then(res => {
      console.log('products', res.data.products);
      setProducts(res.data.products)
    })
  }, [])



  return (
    <Helmet title="Products">
      <div className="grid wide">
        <div className="row">
          {products ? products.map((product) => (
            (
              <div key={product._id} className="col l-3 m-6 c-6">
                <ProductCard product={product} />
              </div>
            )
          )) : null}
        </div>
      </div>

    </Helmet>
  )
}

export default Products