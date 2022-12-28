import React from 'react'

import {
  signInWithGoooglePopup,
  createUserDocFromAuth,
} from '../../Utilities/Firebase/Firebase.utils'
import SignUp from './SignUp'

const Signin = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGoooglePopup()
    const userDocRef = await createUserDocFromAuth(user)
  }

  return (
    <>
      <div>Signin</div>
      <button onClick={logGoogleUser}>GSign</button>
      <SignUp />
    </>
  )
}

export default Signin
