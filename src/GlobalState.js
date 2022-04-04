import React, { createContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductAPI from './api/ProductAPI'
import UserAPI from './api/UserAPI'
import { refreshToken } from './redux/actions/authActions'

const GlobalStateContext = createContext()

function GlobalStateProvider({ children }) {
  const dispatch = useDispatch()

  useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin')
    if (firstLogin) {
      dispatch(refreshToken())
    }
  }, [dispatch])

  const auth = useSelector(state => state.auth);

  const { accesstoken: token } = auth

  const state = {
    token: [token],
    productAPI: ProductAPI(),
    userAPI: UserAPI(token),
    // categoriesAPI: CategoriesAPI()
  }

  return (
    <GlobalStateContext.Provider value={state}>
      {children}
    </GlobalStateContext.Provider>
  )
}

export { GlobalStateContext, GlobalStateProvider }