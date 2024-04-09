import React from "react";

import "./Footer.css";

import { PiTelegramLogo } from "react-icons/pi";
import { PiInstagramLogoThin } from "react-icons/pi";

function Footer() {
  return (
    <>
      <footer className="footer">
        <section className="section-footer">
          
        <div className="top-footer">
          <div className="about-us_footer">
            <h3> درباره ما </h3>
            <p>
              فست لرن یکی از سایت های آموزش برنامه نویسی است که ذکر آن آموزش
              بهترین مطالب و افزایش تخصص افراد در این زمینه است .
            </p>
          </div>
          <div className="access-Footer">
            <h3> دسترسی سریع </h3>
            <a href="#">مقررات</a>
            <a href="#"> ارسال پیشنهاد </a>
            <a href="#"> دوره های ما </a>
            <a href="#"> فست لرن </a>
          </div>
          <div className="link-footer">
            <h3> لینک ها </h3>
            <a href="#"> آموزش ری اکت </a>
            <a href="#"> آموزش جاوا اسکریپت </a>
            <a href="#"> اموزش پایتون </a>
            <a href="#"> اموزش داکر </a>
          </div>
          <div className="social-media-footer">
            <h3> صفحه های اجتماعی </h3>
           
              <a href="#">
              <PiTelegramLogo  className="telegram"/>
              @alirezza-mo
              </a>
              <a href="#">
              <PiInstagramLogoThin className="instagram"/>
              @alirezza.mo
              </a>
            
          </div>
        </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
