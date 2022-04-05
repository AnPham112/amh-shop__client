import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import Button from '../../components/Button'
import { login } from '../../redux/actions/authActions';
import { Link } from 'react-router-dom'
import { ThreeDots } from "react-loader-spinner";
import { Card, Text, Input, Spacer, Button } from '@nextui-org/react'

function Login() {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth);
  const { loading } = auth;

  const [user, setUser] = useState({
    email: '', password: ''
  })

  const handleChangeInput = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value })
  }

  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(login(user))
  }

  return (
    <>
      {/* <div className="auth-form">
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
      </div> */}
      <div className="container full-screen">
        <Card css={{ mw: '400px' }}>
          <Card.Header css={{ jc: "center" }}>
            <Text h3>Login</Text>
          </Card.Header>
          <Card.Body
          // css={{ py: "$8" }}
          >
            <Input
              clearable
              label="Email"
              placeholder="Enter email..."
              type="email"
              name="email"
              value={user?.email}
              onChange={handleChangeInput}
            />
            <Spacer y={0.5} />
            <Input.Password
              clearable
              label="Password"
              placeholder="Enter password..."
              name="password"
              value={user?.password}
              onChange={handleChangeInput}
            />
            <Spacer y={0.5} />
            <Button onClick={handleLogin}>Login</Button>
          </Card.Body>
          <Card.Footer css={{ dflex: "center" }}>
            <Text css={{ mr: "6px" }}>Are you have an account?</Text>
            <Link to="/register">Register</Link>
          </Card.Footer>
        </Card>
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