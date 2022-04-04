import axios from "axios"
import { GET_ALL_PRODUCTS } from "./constants";

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
      console.log(err)
    }
  }
}