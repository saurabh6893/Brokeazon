import React from 'react'
import './Authentication.scss'
import SignUp from './SignUp'
import SignIn from '../../Components/SignIn'
const Authentication = () => {
  return (
    <div className='authenbox'>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default Authentication
