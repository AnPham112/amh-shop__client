import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import Button from '../../components/Button'

import { register } from '../../redux/actions/authActions';

function Register() {
  const dispatch = useDispatch()

  const [user, setUser] = useState({
    name: '', email: '', password: '', cfPassword: ''
  })

  const onChangeInput = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value })
  }

  const handleRegisterSubmit = (e) => {
    e.preventDefault()
    dispatch(register(user))
  }
  return (
    <div className="auth-form">
      <div className="auth-form__wrapper">
        <form
          autoComplete="off"
          onSubmit={handleRegisterSubmit}
        >
          <h2>Register</h2>
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter name..."
              value={user.name}
              onChange={onChangeInput}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email..."
              value={user.email}
              onChange={onChangeInput}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password..."
              value={user.password}
              onChange={onChangeInput}
              required
              autoComplete='off'
            />
          </div>
          <div>
            <label htmlFor="email">Confirm password </label>
            <input
              type="password"
              name="cfPassword"
              placeholder="Enter password..."
              value={user.cfPassword}
              onChange={onChangeInput}
              required
              autoComplete='off'
            />
          </div>
          <Button
            type="submit"
            color="white"
            bg="blue"
            padding={1}
            full="width"
          >
            Register
          </Button>
          <p>You already have an account? <Link to="/login">Login</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Register