import React from 'react'

const Item = ({itm}) => {

  return ( 
    <div className='itemView'>
      <div>
        <img className='imgRadius' src="../images/bgfood.jpg" alt="imgs"/>
      </div>
      <div>
        <h3>{itm.name}</h3>
        <p>{itm.text}</p>
        <button className='priceBtn'>${itm.price}.00</button>
      </div>
    </div>
  )
}

export default Item
