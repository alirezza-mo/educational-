import React from 'react'

import './ArticlesSection.css'
import Navbar from '../../Components/Navbar/Navbar'
import ArticleBox from '../../Components/ArticleBox/ArticleBox'
import Footer from '../../Components/Footer/Footer'

function ArticlesSection() {
  return (
    <>
      <section className='articles-container_section'>
        <Navbar/>
        {/* <div className='div_articles'> */}
          <div className='head-article'>
            <h2> اخرین مقاله های در دسترس : </h2>
            <p> 184مقاله </p>
          </div>
          <div className='content-articles'>
            <ArticleBox/>
            <ArticleBox/>
            <ArticleBox/>
            <ArticleBox/>
            <ArticleBox/>
          </div>
          <button className='btn-articles-all'> مشاهده همه </button>
        {/* </div> */}
        <Footer/>
      </section>
    </>
  )
}

export default ArticlesSection