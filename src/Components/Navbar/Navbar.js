import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";


import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="nav-header">
        <FaBars  className="bars-icon"/>
        <ul className="ul_nav">
          <li> خانه </li>
          <li> دوره ها </li>
          <li> فرانت اند</li>
          <li> مقالات </li>
          <li> درباره ما </li>

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
