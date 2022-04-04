import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button'
import { login } from '../../redux/actions/authActions';
import { Link } from 'react-router-dom'
import { ThreeDots } from "react-loader-spinner";

function Login() {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth);
  const { loading } = auth;

  const [user, setUser] = useState({
    email: '', password: ''
  })

  const onChangeInput = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value })
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    dispatch(login(user))
  }

  return (
    <>
      <div className="auth-form">
        <div className="auth-form__wrapper">
          <form
            autoComplete="off"
            onSubmit={handleLoginSubmit}
          >
            <h2>Login</h2>
            <div className="auth-form__field">
              <label htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter email..."
                value={user.email}
                onChange={onChangeInput}
                autoComplete='off'
              />
            </div>
            <div className="auth-form__field">
              <label htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter password..."
                value={user.password}
                onChange={onChangeInput}
                autoComplete='off'
              />
            </div>
            <Button
              type="submit"
              bg="blue"
              color="white"
              padding={1}
              full="width"
            >
              Login
            </Button>
            <p>Are you have an account? <Link to="/register">Register</Link></p>
          </form>
        </div>
      </div>
      {
        loading
          ? <div className="loading">
            <ThreeDots width="100" color="#FFF" />
          </div>
          : null
      }

    </>
  )
}

export default Login