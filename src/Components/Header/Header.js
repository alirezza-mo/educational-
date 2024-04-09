import React from 'react'
import Navbar from '../Navbar/Navbar'

import './Header.css'

function Header() {
  return (
  <>
  <header className='header'>
    <Navbar />
    <div className='cont-btm__header'>
      <img src="./images/coder-anime.png" alt="anime" className='img__header'/>
      <div className='cont-about__header'>
        <h2>
          پیدا کن <span>دوره</span> مورد نظرت را & مطمئن باش موفق خواهی شد :)
        </h2>
        <h3>
          دوره های رویایی برای شما در انتظار است 🖖
        </h3>
        <button >
          استارت کار
        </button>
      </div>
    </div>

  </header>
  </>
  )
}

export default Header