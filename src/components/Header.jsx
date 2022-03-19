import React, { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../assets/icons/logo.svg'
import Bars from '../assets/icons/bars-solid.svg'
import ShoppingCart from '../assets/icons/cart-shopping-solid.svg'
import AngleLeft from '../assets/icons/angle-left-solid.svg'
import '../sass/index.scss'
const mainNav = [
  {
    display: "Home",
    path: "/"
  },
  {
    display: "Products",
    path: "/products"
  }
]

function Header() {
  const location = useLocation();
  const pathname = location.pathname

  // active nav
  const activeNav = mainNav.findIndex(elm => elm.path === pathname)

  // handle header shrink
  const headerRef = useRef(null)
  useEffect(() => {
    const handleHeaderShrink = () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('shrink')
      } else {
        headerRef.current.classList.remove('shrink')
      }
    }
    window.addEventListener("scroll", handleHeaderShrink)
    return () => {
      window.removeEventListener("scroll", handleHeaderShrink)
    }
  }, [])

  const menuLeft = useRef(null)
  const menuToggle = () => menuLeft.current.classList.toggle('active')

  return (
    <div className="header" ref={headerRef}>
      <div className="container">
        <div className="header__logo">
          <Link to='/'>
            <img className="header__logo-img" src={Logo} alt="" />
          </Link>
        </div>
        <div className="header__menu">
          {/* Open sidebar mobile */}
          <div className="header__menu__mobile-toggle" onClick={menuToggle}>
            {/* <img src={Bars} alt="" width={30} /> */}
            <i className="fa-solid fa-bars header__menu__mobile-icon"></i>
          </div>
          {/* End open sidebar mobile */}
          <div className="header__menu__left" ref={menuLeft}>
            {/* Close sidebar mobile  */}
            <div className="header__menu__left__close" onClick={menuToggle}>
              {/* <img src={AngleLeft} alt="" width={25} /> */}
              <i className="fa-solid fa-angle-left"></i>
            </div>
            {/* End close sidebar mobile  */}
            {
              mainNav.map((item, index) => (
                <div
                  key={index}
                  className={`header__menu__item 
                  header__menu__left__item 
                  ${index === activeNav ? 'active' : ''}`}
                  onClick={menuToggle}
                >
                  <Link to={item.path}>
                    <span>{item.display}</span>
                  </Link>
                </div>
              ))
            }
          </div>
          <div className="header__menu__right">
            <div className="header__menu__item header__menu__right__item">
              <Link to="/login">
                <span>Login</span>
              </Link>
            </div>
            <div className="header__menu__item header__menu__right__item">
              <Link to="/login">
                <span>Sign up</span>
              </Link>
            </div>
            <div className="header__menu__item header__menu__right__item">
              <Link to="/cart">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header