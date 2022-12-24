import React from 'react'
import Item from './Item'
import { Data } from '../Data/Data'
import './Screen.style.scss'
const Screen = () => {
  return (
    <div className='card-page'>
      {Data.map((data) => (
        <Item key={data.id} data={data} />
      ))}
    </div>
  )
}

export default Screen
