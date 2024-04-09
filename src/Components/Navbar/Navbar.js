import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";


import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="nav-header">
        <FaBars  className="bars-icon"/>
        <ul className="ul_nav">
          <Link to={'/'} className="link-navbar"> خانه </Link>
          <Link to={'/products'} className="link-navbar"> دوره ها </Link>
          <Link to={'/products'} className="link-navbar"> فرانت اند</Link>
          <Link to={'/articles'} className="link-navbar"> مقالات </Link>
          <Link to={'/articles'} className="link-navbar"> درباره ما </Link>

        </ul>
        <div className="left-section__header">
          <div className="cont-search">
            <input type="search"  className="search-header" placeholder="آیتم مورد نظر را جستجو کنید :)"/>
            <CiSearch className="icon-search"/>
          </div>
          <a href="#" className="login_link">
            ورود/عضویت
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
