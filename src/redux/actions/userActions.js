import axios from "axios"
import { GET_USER } from "./constants"

// export const getUser = (token) => {
//   return async (dispatch) => {
//     try {
//       const res = await axios.get('/user/infor', {
//         headers: { Authorization: token }
//       })
//       if (res.status === 200) {
//         dispatch({
//           type: GET_USER,
//           payload: res.data
//         })
//       }
//     } catch (err) {
//       console.log(err)
//     }
//   }
// }

// export const addToCart = (token, cart) => {
//   return async (dispatch) => {
//     try {
//       await axios.patch('/user/addcart', { cart: cart }, {
//         headers: {
//           Authorization: token
//         }
//       })
//     } catch (error) {
//       console.log('err', error.response.data.msg)
//     }
//   }
// }