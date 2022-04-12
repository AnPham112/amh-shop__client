import { GET_CATEGORIES, HIDE_LOADER, SHOW_LOADER } from "../constants"


const initState = {
  categories: null,
  loading: false
}

const categoryReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      }
    case SHOW_LOADER:
      return {
        ...state,
        loading: true
      }
    case HIDE_LOADER:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

export default categoryReducer;