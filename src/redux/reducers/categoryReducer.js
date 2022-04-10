import { GET_CATEGORIES } from "../constants"


const initState = {
  categories: null
}

const categoryReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      }
    default:
      return state
  }
}

export default categoryReducer;