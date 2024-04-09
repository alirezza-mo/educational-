import React, { useState } from "react";

import "./Products.css";

import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import ProductBox from "../../../Components/ProductBox/ProductBox";

function Products() {
  const [numForState , setNumForState] = useState(8)
  return (
    <>

      <section className="section-products">

      <Navbar />
      <div className="product-container-category">
        <div className="container">
          <span className="category-course"> جاوااسکریپت </span>
          <span className="category-course"> پایتون </span>
          <span className="category-course"> ری اکت </span>
          <span className="category-course"> ریداکس </span>
          <span className="category-course"> ویو </span>
          <span className="category-course"> انگیولار </span>
          <span className="category-course"> تیلویند </span>
          <span className="category-course"> بوت استرپ </span>
        </div>
      </div>

      <div className="category-courses">
        <h2> دروه های برنامه نویسی ما </h2>
        <div className="container">
          <span className="category-course"> همه دوره ها </span>
          <span className="category-course"> فرانت اند </span>
          <span className="category-course"> بک اند </span>
          <span className="category-course"> امنیت </span>
          <span className="category-course"> اندروید </span>
        </div>
      </div>

      <div className="main-products">
        <div className="top-main_products">
        <ProductBox
          img={"./images/java.jpg"}
          title={"آموزش پروژه محور جاوا"}
          price={"1/500/000 تومان"}
          teacher={"احسان فرزانه"}
          desc={
            "زبان برنامه نویسی جاوا، یکی از برترین و پرکاربردترین زبان های برنامه نویسی دنیا است که با شعار تنها یک بار کد را بنویس، قلب برنامه نویسان را تسخیر کرده است."
          }
          />
          <ProductBox
          img={"./images/java.jpg"}
          title={"آموزش پروژه محور جاوا"}
          price={"1/500/000 تومان"}
          teacher={"احسان فرزانه"}
          desc={
            "زبان برنامه نویسی جاوا، یکی از برترین و پرکاربردترین زبان های برنامه نویسی دنیا است که با شعار تنها یک بار کد را بنویس، قلب برنامه نویسان را تسخیر کرده است."
          }
          />
          <ProductBox
          img={"./images/java.jpg"}
          title={"آموزش پروژه محور جاوا"}
          price={"1/500/000 تومان"}
          teacher={"احسان فرزانه"}
          desc={
            "زبان برنامه نویسی جاوا، یکی از برترین و پرکاربردترین زبان های برنامه نویسی دنیا است که با شعار تنها یک بار کد را بنویس، قلب برنامه نویسان را تسخیر کرده است."
          }
          />
          <ProductBox
          img={"./images/java.jpg"}
          title={"آموزش پروژه محور جاوا"}
          price={"1/500/000 تومان"}
          teacher={"احسان فرزانه"}
          desc={
            "زبان برنامه نویسی جاوا، یکی از برترین و پرکاربردترین زبان های برنامه نویسی دنیا است که با شعار تنها یک بار کد را بنویس، قلب برنامه نویسان را تسخیر کرده است."
          }
          />
          <ProductBox
          img={"./images/java.jpg"}
          title={"آموزش پروژه محور جاوا"}
          price={"1/500/000 تومان"}
          teacher={"احسان فرزانه"}
          desc={
            "زبان برنامه نویسی جاوا، یکی از برترین و پرکاربردترین زبان های برنامه نویسی دنیا است که با شعار تنها یک بار کد را بنویس، قلب برنامه نویسان را تسخیر کرده است."
          }
          />
          </div>


        <button className="btn-products-all"> مشاهده بیشتر </button>
      </div>

      <Footer />
      </section>
    </>
  );
}

export default Products;
