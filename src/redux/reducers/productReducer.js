import { CREATE_PRODUCT, GET_ALL_PRODUCTS } from "../constants"

const initState = {
  products: [],
  product: {
    _id: "",
    product_id: "",
    title: "",
    price: 0,
    description: "",
    category: ""
  },
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
    case CREATE_PRODUCT:
      return {
        ...state,
        product: action.payload
      }
    default:
      return state
  }
}

export default productReducer