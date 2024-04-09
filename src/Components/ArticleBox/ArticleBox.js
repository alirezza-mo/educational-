import React from 'react'

import './ArticleBox.css'

function ArticleBox({title , img , desc , date , author}) {
  return (
    <>
      <div className='container-article_box'>
      <img src={img} alt="#" className='img-article_box'/>
      <div className='about-article_box'>
        <h3> {title} </h3>
        <p> {desc} </p>
        <div className='date-author'>
          <span className='author-span'> {author} </span>
          <span className='date-span'> {date} </span>
        </div>
      </div>
    </div>
    </>
  )
}

export default ArticleBox