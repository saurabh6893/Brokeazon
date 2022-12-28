import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as Headset } from '../Assets/Logo/headphone.svg'
import './Navigation.style.scss'
const Navigation = () => {
  return (
    <>
      <div className='navx'>
        <Link className='logo-Container' to='/'>
          <Headset className='logo' />
        </Link>
        <div className='links-box'>
          <Link to='/more' className='navLink'>
            More
          </Link>
          <Link to='/auth' className='navLink'>
            Signin
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation
