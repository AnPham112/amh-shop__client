import { GET_USER } from "../constants"

const initState = {
  userInfo: {
    cart: [],
    email: '',
    name: '',
    role: null,
    _id: ''
  }
}

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        userInfo: action.payload
      }
    default:
      return state
  }
}

export default productReducer