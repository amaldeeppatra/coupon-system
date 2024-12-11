import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <Link to={'/dashboard'}><button className='px-8 py-5 border-2 border-black rounded-xl'>Login</button></Link>
    </>
  )
}

export default Login