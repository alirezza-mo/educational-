import React from "react";

import "./LastProduct.css";
import TopSection from "../TopSection/TopSection";
import ProductBox from "../ProductBox/ProductBox";

function LastProduct() {
  return (
    <>
      <section className="last-product">
        <TopSection title={"اخرین دوره ها"} >
        <button className='btn-left-header_section'> مشاهده همه </button>
        </TopSection>
        <div className="container">
          <ProductBox
            title={"آموزش حرفه ای NodeJS بدون پیش نیاز"}
            desc={
              "الان و امروز کمتر کسی هست که از بازار کار داغ نود جی اس با خبر نباشه و یکی از…"
            }
            teacher={'علیرضا مرادی'}
            price={'1,100,000 تومان'}
            img={'./images/js.jpg'}
          />
          <ProductBox
            title={"آموزش حرفه ای NodeJS بدون پیش نیاز"}
            desc={
              "الان و امروز کمتر کسی هست که از بازار کار داغ نود جی اس با خبر نباشه و یکی از…"
            }
            img={'./images/python.jpg'}
            teacher={'علیرضا مرادی'}
            price={'1,100,000 تومان'}
          />
          <ProductBox
            title={"آموزش حرفه ای NodeJS بدون پیش نیاز"}
            desc={
              "الان و امروز کمتر کسی هست که از بازار کار داغ نود جی اس با خبر نباشه و یکی از…"
            }
            img={'./images/tailwind.jpg'}
            teacher={'علیرضا مرادی'}
            price={'1,100,000 تومان'}
          />
          <ProductBox
            title={"آموزش حرفه ای NodeJS بدون پیش نیاز"}
            desc={
              "الان و امروز کمتر کسی هست که از بازار کار داغ نود جی اس با خبر نباشه و یکی از…"
            }
            img={'./images/node.jpg'}
            teacher={'علیرضا مرادی'}
            price={'1,100,000 تومان'}
          />
          <ProductBox
            title={"آموزش حرفه ای NodeJS بدون پیش نیاز"}
            desc={
              "الان و امروز کمتر کسی هست که از بازار کار داغ نود جی اس با خبر نباشه و یکی از…"
            }
            img={'./images/node.jpg'}
            teacher={'علیرضا مرادی'}
            price={'1,100,000 تومان'}
          />
        </div>
      </section>
    </>
  );
}

export default LastProduct;
