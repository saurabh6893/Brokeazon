import React from 'react'
import './item.style.scss'
const Item = ({ data }) => {
  const { name, imgSrc } = data

  return (
    <div className='card-main'>
      <div className='img-box' style={{ backgroundImage: `url(${imgSrc})` }} />
      <div className='card-box'>
        <h2>{name}</h2>
        <h3>Buy</h3>
      </div>
    </div>
  )
}

export default Item
