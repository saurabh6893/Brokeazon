import React from 'react'
import './inputbox.scss'

const Inputbox = ({ label, ...others }) => {
  return (
    <div className='group'>
      <input className='form-input' {...others} />
      {label && (
        <label
          className={`${others.value.length ? 'shrink' : ''} form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  )
}

export default Inputbox
