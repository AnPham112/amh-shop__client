import { Button } from '@nextui-org/react'
import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GlobalStateContext } from '../../GlobalState'
import { createCategory, deleteCategory, editCategory, getAllCategories } from '../../redux/actions/categoryActions'

function Categories() {
  const state = useContext(GlobalStateContext);
  const [token] = state.token
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCategories())
  }, [dispatch])

  const [category, setCategory] = useState('')
  const [onEdit, setOnEdit] = useState(false)
  const [id, setId] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onEdit) {
      dispatch(editCategory(id, { name: category }, token))
      dispatch(getAllCategories())
    } else {
      dispatch(createCategory({ name: category }, token))
      dispatch(getAllCategories())
    }
  }

  const handleEditCategory = (id, name) => {
    setId(id)
    setCategory(name)
    setOnEdit(true)
  }

  const handleDeleteCategory = (id) => {
    dispatch(deleteCategory(id, token))
    dispatch(getAllCategories())
  }

  const { categories } = useSelector(state => state.category)

  return (
    <div className='categories'>
      <form onSubmit={handleSubmit}>
        <label>Category</label>
        <input type="text" name="category" value={category}
          onChange={(e) => setCategory(e.target.value)}
          required />
        <Button type='submit'>{onEdit ? 'Update' : 'Create'}</Button>
      </form>

      <div>
        {
          categories?.map((category) => (
            <div key={category._id}>
              <p >{category.name}</p>
              <div>
                <Button onClick={() => handleEditCategory(category._id, category.name)}>Edit</Button>
                <Button onClick={() => handleDeleteCategory(category._id)}>Delete</Button>
              </div>
            </div>


          ))
        }
      </div>
    </div>

  )
}

export default Categories