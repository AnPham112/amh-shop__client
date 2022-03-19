import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductInfo from '../../components/ProductInfo';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    let isMounted = true;
    axios.get(`/products/${id}`)
      .then(res => {
        if (!isMounted) return;
        setProduct(res.data)
      })

    return () => { isMounted = false }
  }, [id])

  return (
    <>
      {product && <ProductInfo product={product} />}
    </>

  )
}

export default ProductDetail