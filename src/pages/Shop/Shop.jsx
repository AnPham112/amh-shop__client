import React, { useContext } from 'react'
import Helmet from '../../components/Helmet'
import ProductCard from '../../components/ProductCard'
import { ThreeDots } from 'react-loader-spinner'
import { GlobalStateContext } from '../../GlobalState'

function Shop() {
  const state = useContext(GlobalStateContext)
  const [products] = state.productAPI.products
  const [isAdmin] = state.userAPI.isAdmin


  return (
    <Helmet title="Shop">
      <div className="products">
        <div className="container">
          <div className="grid wide">
            <div className="row">
              {products.length === 0 && <div className="loading"><ThreeDots width="100" color="#FFF" /></div>}
              {products ? products.map((product) => (
                (
                  <ProductCard key={product._id} product={product} isAdmin={isAdmin} />
                )
              )) : null}
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  )
}

export default Shop