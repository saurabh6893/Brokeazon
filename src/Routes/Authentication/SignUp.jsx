import React, { useState } from 'react'
import Button from '../../Components/Button/Button'
import Inputbox from '../../Components/FormComponent/inputbox'
import './SignUp.scss'
import {
  createAuthUserEmailandPassword,
  createUserDocFromAuth,
} from '../../Utilities/Firebase/Firebase.utils'

const defaultData = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUp = () => {
  const [formData, setFormData] = useState(defaultData)
  const { name, email, password, confirmPassword } = formData

  const resetForm = () => {
    setFormData(defaultData)
  }
  console.log(formData)
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      alert(' Passwords Dont match')
      return
    }

    try {
      const { user } = await createAuthUserEmailandPassword(email, password)
      await createUserDocFromAuth(user, { name })
      resetForm()
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('already in use')
      }

      console.log('user creation error', error)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div className='sign-up-container'>
      <h1>SignUp</h1>
      <form onSubmit={handleSubmit}>
        <Inputbox
          label='Name'
          type='text'
          required
          value={name}
          name='name'
          onChange={handleChange}
        />

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

        <Inputbox
          label='Confirm password'
          type='password'
          required
          value={confirmPassword}
          name='confirmPassword'
          onChange={handleChange}
        />

        <Button type='submit'>SignUp</Button>
      </form>
    </div>
  )
}

export default SignUp
