import React, { useState } from 'react'
import Button from './Button/Button'
import Inputbox from './FormComponent/inputbox'
import './SignIn.scss'
import {
  signinAuthUserEmailandPassword,
  createUserDocFromAuth,
} from '../Utilities/Firebase/Firebase.utils'
import { signInWithGoooglePopup } from '../Utilities/Firebase/Firebase.utils'

const defaultData = {
  email: '',
  password: '',
}

const SignIn = () => {
  const [formData, setFormData] = useState(defaultData)
  const { email, password } = formData

  const logGoogleUser = async () => {
    const { user } = await signInWithGoooglePopup()
    await createUserDocFromAuth(user)
  }

  const resetForm = () => {
    setFormData(defaultData)
  }
  console.log(formData)

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const res = await signinAuthUserEmailandPassword(email, password)
      console.log(res)
      resetForm()
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        alert('incorrect Password')
      } else if (error.code === 'auth/user-not-found') {
        alert('User Not Found')
      }
      console.log(error)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div className='sign-in-container'>
      <h1>SignIn</h1>
      <form onSubmit={handleSubmit}>
        <Inputbox
          label='Email'
          type='email'
          required
          value={email}
          name='email'
          onChange={handleChange}
        />

        <Inputbox
          label='password'
          type='password'
          required
          value={password}
          name='password'
          onChange={handleChange}
        />
        <div className='buttons-container'>
          <Button type='submit'>SignIn</Button>
          <Button type='button' buttonType='google' onClick={logGoogleUser}>
            Google
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignIn
