import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategories } from '../../redux/actions/categoryActions';

const initState = {
  product_id: '',
  title: '',
  price: 0,
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  category: ''
}


function CreateProduct() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState(initState)

  useEffect(() => {
    dispatch(getAllCategories())
  }, [])

  const { categories } = useSelector(state => state.category)
  return (
    <div className='create-product'>

    </div>
  )
}

export default CreateProduct