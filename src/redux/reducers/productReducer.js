import { GET_ALL_PRODUCTS } from "../actions/constants"

const initState = {
  products: [],
  result: null,
}

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload.products,
        result: action.payload.result
      }
    default:
      return state
  }
}

export default productReducer