import React, { useState } from "react";
import styles from "../../styles/Nutrition.module.css";
import Slider from "react-slick";
// import NutriData from "./NutriData.json";
import NutriData from "../../data/NutriData.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillStar } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIosNew,
} from "react-icons/md";
import "./Nutrition.css";

import { useCart } from "react-use-cart";

const Nutrtion = () => {
  const { addItem } = useCart();
  const handleRefresh = ()=>{
    window.location.reload(false)
}

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <MdOutlineArrowForwardIos size={40} />
      </div>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <MdOutlineArrowBackIosNew size={40} />
      </div>
    );
  };

  const [divindex, SetDivindex] = useState(0);
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    centerMode: true,
    centerPadding: 0,
    slidesToShow: 3,
    // slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => SetDivindex(next),
  };
  return (
    <div>
      <div className={styles.div2}>
        <div>
          <img
            className={styles.pic1}
            src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/482-x-574-daily-balance-image_ec7ee15e-7131-4ea7-999b-3581c401bfdf.png?v=1628254032"
            alt="pic1"
          />
        </div>
        <div>
          <div>
            <p className={styles.div2p}>
              Your daily
              <br />
              health balance
            </p>
          </div>
          <div className={styles.pic2}>
            <img
              src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/310X642_slider-claim-image.png?v=1626112083"
              alt="pic2"
            />
          </div>
        </div>
      </div>
      <div className={styles.div3main}>
        <div className={styles.div3main1}>
          <div>
            <div>
              <div className={styles.ikwi}>
                <img
                  src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/IKWI_Gummis_Banner_06a_1_310x642_1.png?v=1638173612"
                  alt="ikwi"
                />
              </div>
              <div className={styles.ikwih1}>
                <h1>
                  The right balance of ingredients,
                  <br />
                  benefits and experience
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.productslider}>
          <div style={{ paddingTop: "30px" }}>
            <Slider {...settings}>
              {NutriData.map((el, index) => (
                <div
                  key={el.id}
                  // className={index === divindex ? "slide activeSlide" : "slide"}
                  className={index === divindex ? "slide activeSlide" : "slide"}
                >
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <img
                      src={el.imageurl}
                      alt="abc"
                      style={{ width: "145px", height: "238px" }}
                    />
                  </div>
                  <div style={{ fontSize: "18px", fontWeight: "600" }}>
                    {el.name}
                  </div>
                  <p style={{ fontSize: "14px" }}>{el.Strips}</p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      paddingLeft: "60px",
                      paddingRight: "60px",
                    }}
                  >
                    <div>Rs: {el.price}.00</div>
                    <div>
                      <span>
                        <AiFillStar color="yellow" />
                      </span>
                      <span>{el.Rating}</span>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      paddingLeft: "60px",
                      paddingRight: "60px",
                      marginTop: "10px",
                    }}
                  >
                    <span
                      onClick={() => {addItem(el);handleRefresh()}}
                      style={{ cursor: "pointer" }}
                    >
                      <BsHandbag size={27} />
                    </span>
                    <span style={{ cursor: "pointer" }}>
                      <IoMdHeartEmpty size={27} />
                    </span>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className={styles.balance}>
          <div
            style={{
              width: "614px",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <img
              style={{ width: "310px", height: "600px" }}
              src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/310-x-680-The-balance-girl-image_859ddf91-d286-4242-b6f0-db2ecf7715c4.png?v=1626112811"
              alt="ladies1"
            />
          </div>
          <div style={{ width: "614px" }}>
            <div>
              <div>
                <p>The</p>
                <h1>Balance You</h1>
                <h1>Seek</h1>
              </div>
              <div>
                <small>
                  Scientifically driven nutrition with precise
                  <br />
                  ratios of the essentials for overall
                  <br />
                  wellbeing. No more, no less.
                  <br />
                  <br />
                  At IKWI, we're here to lend you a hand to
                  <br />
                  become the best version of yourself.
                </small>
              </div>
            </div>
            <div>
              <img
                src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/457-x-150-The-balace-claim-image_88c343cb-792c-4c2e-bdf0-dc0e0bbf7ac5.png?v=1628254215"
                alt="x"
              />
            </div>
          </div>
          <div
            style={{
              width: "614px",
              display: "flex",
              marginLeft: "25px",
            }}
          >
            <img
              style={{ width: "350px", height: "600px" }}
              src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/430-x-738-seasaw-img_75cbd547-3255-4d8a-bc0b-e779768f7c2e.png?v=1626110718"
              alt="x"
            />
          </div>
        </div>
        <div>
          <div style={{ backgroundColor: "white" }}>
            <h1>OUR WELLNESS NOTEBOOK</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nutrtion;
