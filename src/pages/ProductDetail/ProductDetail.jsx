import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';
import ProductInfo from '../../components/ProductInfo';
import { getAllProduct } from '../../redux/actions/productActions';

function ProductDetail() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct())
  }, [dispatch])
  const params = useParams();
  const [productDetail, setProductDetail] = useState([]);

  const product = useSelector(state => state.product)
  const { products } = product

  useEffect(() => {
    if (params) {
      products.forEach((product) => {
        if (product._id === params.id) {
          setProductDetail(product)
        }
      })
    }
  }, [params.id, products])

  if (productDetail.length === 0) return null


  return (
    <>
      {productDetail && <ProductInfo productDetail={productDetail} />}
      <div className="container">
        <h2 className="related-products__title">Related products</h2>
        <div className="grid wide">
          {/* <div className="row">
            {products.map((product) => {
              return product.category === productDetail.category
                ? (
                  <ProductCard key={product._id} product={product} />
                ) : null
            })}
          </div> */}
        </div>
      </div>
    </>
  )
}

export default ProductDetail