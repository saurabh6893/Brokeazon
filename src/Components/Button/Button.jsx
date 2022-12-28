import React from 'react'
import './Button.scss'

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
}

const Button = ({ children, buttonType, ...others }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...others}
    >
      {children}
    </button>
  )
}

export default Button
