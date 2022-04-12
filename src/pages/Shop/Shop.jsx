import React, { useContext } from 'react'
import Helmet from '../../components/Helmet'
import ProductCard from '../../components/ProductCard'
import { GlobalStateContext } from '../../GlobalState'
import { Card, Loading, Text } from '@nextui-org/react'

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

              {products ? products.map((product) => (
                (
                  <ProductCard key={product._id} product={product} isAdmin={isAdmin} />
                )
              )) : null}
            </div>
          </div>
        </div>
      </div>
      {products.length === 0 &&
        <div className="container full-screen">
          <Card css={{ mw: "450px" }}>
            <Text h3 css={{ ta: "center" }}>No products exist</Text>
          </Card>
        </div>

      }
    </Helmet >
  )
}

export default Shop