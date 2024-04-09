import React from 'react'

import './TopSection.css'

import { TiPinOutline } from "react-icons/ti";


function TopSection({title , btn , children}) {
  return (
  <>
    <div className='container-header_section'>
      <div className='right-header_section'>
      <TiPinOutline className='icon-header_section'/>
        <h3> {title} </h3>
      </div>
      <div className='left-header_section'>
        {children}
      </div>
    </div>
  </>
  )
}

export default TopSection