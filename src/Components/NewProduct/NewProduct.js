import React from "react";

import "./NewProduct.css";

import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

import TopSection from "../TopSection/TopSection";
import ProductBox from "../ProductBox/ProductBox";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function NewProduct() {
  const swiper = useSwiper();
  return (
    <>
      <section className="new_product">
        <TopSection title={"دوره های جدید"}>
          <button className="swiper-btn-next btn-left-header_section"> <FaAngleRight /> </button>
          <button className="swiper-btn-prev btn-left-header_section"> <FaAngleLeft /> </button>
        </TopSection>
        <div className="swiper-container">
          <Swiper
          breakpoints={{
            0 : {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 1024px
            1224: {
              slidesPerView: 4,
              spaceBetween: 30,
            }
          }}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation={{
              nextEl: ".swiper-btn-next",
              prevEl: ".swiper-btn-prev",
            }}
            loop={true}
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            // className="container"
          >
            
              
            <SwiperSlide className="swiper-slide">
              <ProductBox
                title={"آموزش حرفه ای NodeJS بدون پیش نیاز"}
                desc={
                  "الان و امروز کمتر کسی هست که از بازار کار داغ نود جی اس با خبر نباشه و یکی از…"
                }
                teacher={"علیرضا مرادی"}
                price={"1,100,000 تومان"}
                img={"./images/js.jpg"}
                />
            </SwiperSlide>
            <SwiperSlide>
              <ProductBox
                title={"آموزش حرفه ای NodeJS بدون پیش نیاز"}
                desc={
                  "الان و امروز کمتر کسی هست که از بازار کار داغ نود جی اس با خبر نباشه و یکی از…"
                }
                teacher={"علیرضا مرادی"}
                price={"1,100,000 تومان"}
                img={"./images/js.jpg"}
                />
            </SwiperSlide>
            <SwiperSlide>
              <ProductBox
                title={"آموزش حرفه ای NodeJS بدون پیش نیاز"}
                desc={
                  "الان و امروز کمتر کسی هست که از بازار کار داغ نود جی اس با خبر نباشه و یکی از…"
                }
                teacher={"علیرضا مرادی"}
                price={"1,100,000 تومان"}
                img={"./images/js.jpg"}
                />
            </SwiperSlide>
            <SwiperSlide>
              <ProductBox
                title={"آموزش حرفه ای NodeJS بدون پیش نیاز"}
                desc={
                  "الان و امروز کمتر کسی هست که از بازار کار داغ نود جی اس با خبر نباشه و یکی از…"
                }
                teacher={"علیرضا مرادی"}
                price={"1,100,000 تومان"}
                img={"./images/js.jpg"}
                />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <ProductBox
                title={"آموزش حرفه ای NodeJS بدون پیش نیاز"}
                desc={
                  "الان و امروز کمتر کسی هست که از بازار کار داغ نود جی اس با خبر نباشه و یکی از…"
                }
                teacher={"علیرضا مرادی"}
                price={"1,100,000 تومان"}
                img={"./images/js.jpg"}
                />
            </SwiperSlide>
                
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default NewProduct;
