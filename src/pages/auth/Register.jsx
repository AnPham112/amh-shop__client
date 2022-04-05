import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
// import Button from '../../components/Button'
import { Card, Text, Input, Spacer, Button } from '@nextui-org/react'

import { register } from '../../redux/actions/authActions';


function Register() {
  const dispatch = useDispatch()

  const [user, setUser] = useState({
    name: '', email: '', password: '', cfPassword: ''
  })

  const handleChangeInput = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value })
  }

  const handleRegister = (e) => {
    e.preventDefault()
    dispatch(register(user))
  }
  return (
    // <div className="auth-form">
    //   <div className="auth-form__wrapper">
    //     <form
    //       autoComplete="off"
    //       onSubmit={handleRegisterSubmit}
    //     >
    //       <h2>Register</h2>
    //       <div>
    //         <label htmlFor="name">Name</label>
    //         <input
    //           id="name"
    //           type="text"
    //           name="name"
    //           placeholder="Enter name..."
    //           value={user.name}
    //           onChange={onChangeInput}
    //           required
    //         />
    //       </div>
    //       <div>
    //         <label htmlFor="email">Email</label>
    //         <input
    //           type="email"
    //           name="email"
    //           placeholder="Enter email..."
    //           value={user.email}
    //           onChange={onChangeInput}
    //           required
    //         />
    //       </div>
    //       <div>
    //         <label htmlFor="email">Password</label>
    //         <input
    //           type="password"
    //           name="password"
    //           placeholder="Enter password..."
    //           value={user.password}
    //           onChange={onChangeInput}
    //           required
    //           autoComplete='off'
    //         />
    //       </div>
    //       <div>
    //         <label htmlFor="email">Confirm password </label>
    //         <input
    //           type="password"
    //           name="cfPassword"
    //           placeholder="Enter password..."
    //           value={user.cfPassword}
    //           onChange={onChangeInput}
    //           required
    //           autoComplete='off'
    //         />
    //       </div>
    //       <Button
    //         type="submit"
    //         color="white"
    //         bg="blue"
    //         padding={1}
    //         full="width"
    //       >
    //         Register
    //       </Button>
    //       <p>You already have an account? <Link to="/login">Login</Link></p>
    //     </form>
    //   </div>
    // </div>
    <div className="container full-screen">
      <Card css={{ mw: '400px' }}>
        <Card.Header css={{ jc: "center" }}>
          <Text h3>Register</Text>
        </Card.Header>
        <Card.Body
        // css={{ py: "$8" }}
        >
          <Input
            clearable
            label="Email"
            placeholder="Enter email..."
            name="name"
            value={user?.name}
            onChange={handleChangeInput}
          />
          <Spacer y={0.5} />
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
          <Input.Password
            clearable
            label="Password"
            placeholder="Enter password..."
            name="password"
            value={user?.cfPassword}
            onChange={handleChangeInput}
          />
          <Spacer y={0.5} />
          <Button onClick={handleRegister}>Register</Button>
        </Card.Body>
        <Card.Footer css={{ dflex: "center" }}>
          <Text css={{ mr: "6px" }}>You already have an account?</Text>
          <Link to="/register">Login</Link>
        </Card.Footer>
      </Card>
    </div>
  )
}

export default Register