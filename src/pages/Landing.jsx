import React from 'react'
import Signup from './Signup'
import Login from './Login'

const Landing = () => {
  return (
    <>
    <div className='flex justify-center items-center h-screen'>
        <div className='flex justify-center items-center gap-12 px-36 py-40 rounded-2xl border-2 shadow-lg'>
            <Signup/>
            <Login/>
        </div>
    </div>
    </>
  )
}

export default Landing