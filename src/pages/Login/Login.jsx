import React from 'react'
import background from "../assests/image6.jpg"
import './login.css'
import { Link } from 'react-router-dom'
export const Login = () => {
  return (
    <div className='main' >
      <div className='hero'>
        <img src={background} />
        <div className='contain'>
        <h4 className='title'>Log In</h4>

          <input className='input' type='text' placeholder='Username' />
          <input className='input' type='password' placeholder='Password' />
          <Link to="/" className='input'>Login</Link>
          <div>OR</div>
          <Link to="/SignUp" className='input'>SignUp</Link>
        </div>
      </div>

    </div>
  )
}

