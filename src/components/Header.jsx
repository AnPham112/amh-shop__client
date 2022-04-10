import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Logo from '../assets/icons/logo.svg'
import { GlobalStateContext } from '../GlobalState'
import { logout } from '../redux/actions/authActions'
import '../sass/index.scss'
import Button from './Button'



function Header() {
  const state = useContext(GlobalStateContext)
  const [isLogged] = state.userAPI.isLogged
  const [isAdmin] = state.userAPI.isAdmin
  const [cart] = state.userAPI.cart
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__menu__bars" id="menu">
            <i className="fa-solid fa-bars header__menu__bars-icon"></i>
          </div>
          <div className="header__logo">
            <Link to='/'>
              {isAdmin
                ? (
                  <div className="header__logo--admin">
                    <img className="header__logo-img" src={Logo} alt="" />
                    <h2>Admin</h2>
                  </div>
                )
                : <img className="header__logo-img" src={Logo} alt="" />
              }
            </Link>
          </div>
          <ul className="header__menu">
            <li className="header__menu__item">
              <Link to="/shop" className="header__menu__item__link">{isAdmin ? "Products" : "Shop"}</Link>
            </li>
            {isAdmin ? (
              <>
                <li className="header__menu__item">
                  <Link to="/create_product" className="header__menu__item__link">Create product</Link>
                </li>
                <li className="header__menu__item">
                  <Link to="/category" className="header__menu__item__link">Categories</Link>
                </li>
              </>
            )
              : null
            }

            {isLogged ? (
              <>
                <li className="header__menu__item">
                  <Link to="/history" className="header__menu__item__link">History</Link>
                </li>
                <li className="header__menu__item">
                  <Button
                    bg="yellow"
                    padding={1}
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </li>
              </>
            ) : (
              <>
                <li className="header__menu__item">
                  <Link to="/login" className="header__menu__item__link__login">Login</Link>
                </li>
                <li className="header__menu__item">
                  <Link to="/register" className="header__menu__item__link__register">Register</Link>
                </li>
              </>
            )}


            <li className="header__menu__close">
              <i className="fa-solid fa-angle-left"></i>
            </li>
          </ul>

          {isAdmin ? '' : (
            <div className="header__menu__cart">
              <span>{cart.length}</span>
              <Link to="/cart">
                <i className="fa-solid fa-cart-shopping header__menu__cart__icon"></i>
              </Link>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default Header