import axios from "axios"
import { toast } from "react-toastify"
import { GET_CATEGORIES } from "../constants"

export const getAllCategories = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get('/api/category')
      dispatch({
        type: GET_CATEGORIES,
        payload: res.data
      })
    } catch (error) {
      toast.error(error.response.data.msg)
    }
  }
}

export const createCategory = (name, token) => {
  return async (dispatch) => {
    try {
      const res = await axios.post('/api/category', name, {
        headers: { Authorization: token }
      })
      if (res.status === 201) {
        dispatch(getAllCategories())
      }
    } catch (error) {
      toast.error(error.response.data.msg)
    }
  }
}

export const editCategory = (id, name, token) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(`/api/category/${id}`, name, {
        headers: { Authorization: token }
      })
      if (res.status === 200) {
        dispatch(getAllCategories())
      }
    } catch (error) {
      toast.error(error.response.data.msg)
    }
  }
}

export const deleteCategory = (id, token) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(`/api/category/${id}`, {
        headers: { Authorization: token }
      })
      if (res.status === 200) {
        dispatch(getAllCategories())
      }
    } catch (error) {
      toast.error(error.response.data.msg)
    }
  }
}