import React from "react";

import "./WithUs.css";

import { FaQuestion } from "react-icons/fa6";

function WithUs() {
  return (
    <>
      <section className="cont-with_us">
        <div>
        <FaQuestion className="icon-question"/>
        <h2>چرا وبسایت و دوره های شمارو انتخاب کنیم ؟</h2>
        </div>
        <p>
          خب ، سایت ما یکی از چندین سایت های اموزش برنامه نویسی در بازار قرار
          دارد و حالا با توجه به اینکه ما اهمیت زیادی به قسمت پشتیبانی و سعی در
          پاسخ دادن به سوالات شما علاوه بر اون دوره بلکه در سایر جوزه ها هستیم و
          همینطور حساسیت ما در انتخاب مدرس ، پروژه محور بودن باعث شده است که از دوره های خوبی برخوردار باشیم و اینکه تا شما یادنگیری رها نمیشی :)
        </p>
      </section>
    </>
  );
}

export default WithUs;
