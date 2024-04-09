import React from "react";

import "./StartRoad.css";

import { TbMapPin } from "react-icons/tb";

function StartRoad() {
  return (
    <>
      <section className="section-start_road">
        <div className="top-start_road">
          <TbMapPin className="icon-start_road"/>
          <h2> از کجا شروع کنم ! </h2>
        </div>
        <div className="btm-start_road">
          <p>
            برنامه‌نویسی ابزاری نوین برای تسلط بر جهان تکنولوژی است. بهترین روش
            برای فراگیری این علم از پایه و به صورت تخصصی، گذراندن دوره‌های آموزش
            برنامه نویسی زیر نظر مدرسان کارآزموده است. کدیاد، تیمی متشکل از
            مدرسان متخصص می‌باشد و هدفشان آموزش صفر تا صد برنامه نویسی به
            علاقه‌مندان است. در ضمن بسیاری از دوره‌های موجود در کدیاد، رایگان
            بوده و شما می‌توانید نیمی از مسیر را بدون هیچ هزینه‌ای پیش بروید.
          </p>
          <button className="btn-start_road"> استارت زدن واسه شروع :) </button>
        </div>
      </section>
    </>
  );
}

export default StartRoad;
