import React from 'react'
import { signInWithGoooglePopup } from '../../Utilities/Firebase/Firebase.utils'
const Signin = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGoooglePopup()
    console.log(response)
  }
  return (
    <>
      <div>Signin</div>
      <button onClick={logGoogleUser}>GSign</button>
    </>
  )
}

export default Signin
