import React from 'react'
import './item.style.scss'
const Item = ({ data }) => {
  const { name, cost, imgSrc } = data

  return (
    <div className='card-main'>
      <div
        className='img-box'
        style={{ backgroundImage: `url(${imgSrc[0]})` }}
      />
      <div className='card-box'>
        <h2>{name}</h2>
        <h3> @{cost}₹</h3>
      </div>
    </div>
  )
}

export default Item
