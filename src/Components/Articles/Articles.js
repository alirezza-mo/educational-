import React from 'react'

import TopSection from '../TopSection/TopSection'

import './Articles.css'

function Articles() {
  return (
    <>
      <TopSection title={"اخرین مقاله ها"} >
        <button className='btn-left-header_section'> مشاهده همه مقاله ها</button>
        </TopSection>
    </>
  )
}

export default Articles