import axios from "axios"
import { toast } from "react-toastify"
import { GET_CATEGORIES, HIDE_LOADER, SHOW_LOADER } from "../constants"

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
      await axios.post('/api/category', name, {
        headers: { Authorization: token }
      })
      // console.log('res ne cu', res.data.msg)
    } catch (error) {
      console.log(error.message.data.msg)
    }
  }
}

export const editCategory = (id, name, token) => {
  return async (dispatch) => {
    try {
      await axios.put(`/api/category/${id}`, name, {
        headers: { Authorization: token }
      })


    } catch (error) {
      toast.error(error.response.data.msg)
    }
  }
}

export const deleteCategory = (id, token) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/api/category/${id}`, {
        headers: { Authorization: token }
      })
    } catch (error) {
      toast.error(error.response.data.msg)
    }
  }
}