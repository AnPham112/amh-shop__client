import axios from "axios"
import { toast } from "react-toastify";
import { CREATE_PRODUCT, GET_ALL_PRODUCTS } from "../constants";

export const getAllProduct = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/api/products`);
      if (res.status === 200) {
        const { products, result } = res.data
        dispatch({
          type: GET_ALL_PRODUCTS,
          payload: { products, result }
        })
      }
    } catch (err) {
      toast.error(err.response.data.msg)
    }
  }
}

export const uploadProductImage = (formData, token) => {
  return async (dispatch) => {
    try {
      const res = await axios.post('/api/upload', formData, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: token
        }
      })
      console.log(res)
    } catch (err) {
      toast.error(err.response.data.msg)
    }
  }
}

// export const addProduct = () => {
//   return async (dispatch) => {
//     dispatch({
//       type: CREATE_PRODUCT,
//       payload: res.data
//     })
//   }
// }

export const createProduct = (product, productImages, token) => {
  return async (dispatch) => {
    try {
      const res = await axios.post('/api/products', { ...product, productImages }, {
        headers: { Authorization: token }
      })
      dispatch({
        type: CREATE_PRODUCT,
        payload: res.data
      })
      console.log(res)
    }
    catch (error) {
      return toast.error(error.response.data.error)
    }
  }
}

