import { HIDE_LOADER, REFRESH_TOKEN, SHOW_LOADER } from "../constants"

const initState = {
  loading: false
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    // case REFRESH_TOKEN:
    //   return {
    //     ...state,
    //     accesstoken: action.payload.accesstoken
    //   }
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

export default authReducer