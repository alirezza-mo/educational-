import React from 'react'

import './ProductBox.css'

function ProductBox({title , img , desc , price , teacher}) {
  return (
    <div className='container-product_box'>
      <img src={img} alt="#" className='img-product_box'/>
      <div className='about-product_box'>
        <h3> {title} </h3>
        <p> {desc} </p>
        <div className='price-teach'>
          <span className='teacher-span'> {teacher} </span>
          <span className='price-span'> {price} </span>
        </div>
      </div>
    </div>
  )
}

export default ProductBox