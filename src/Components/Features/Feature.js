import React from "react";

import "./Feature.css";

import { MdContentPaste } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { GoProject } from "react-icons/go";
import { AiOutlinePicture } from "react-icons/ai";
import { PiChalkboardTeacherLight } from "react-icons/pi";
import { BiSelectMultiple } from "react-icons/bi";

function Feature() {
  return (
    <div className="container-feature">
      <div className="features">
        <div className="feature">
          <MdContentPaste className="icon-feature"/>
          <h3>کامل ترین محتوا</h3>
        </div>
        <div className="feature">
          <BiSupport className="icon-feature"/>
          <h3>پشتیبانی همیشگی</h3>
        </div>
        <div className="feature">
          <GoProject className="icon-feature"/>
          <h3>پروژه محور</h3>
        </div>
        <div className="feature">
          <AiOutlinePicture className="icon-feature"/>
          <h3>کیفیت صدا و تصویر</h3>
        </div>
        <div className="feature">
          <PiChalkboardTeacherLight className="icon-feature"/>
          <h3> اساتید حرفه ای </h3>
        </div>
        <div className="feature">
          <BiSelectMultiple className="icon-feature"/>
          <h3> دوره ات را انتخاب کن </h3>
        </div>
      </div>
    </div>
  );
}

export default Feature;
