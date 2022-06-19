import React from "react";
import Slider from "react-slick";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIosNew,
} from "react-icons/md";

const Slider2 = () => {
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
  var settings = {
    infinite: true,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div
      style={{
        background: "#fcee91",
        width: "100%",
        height: "600px",
      }}
    >
      <Slider {...settings}>
        <div style={{ height: "600px", width: "1520px" }}>
          <div
            style={{
              display: "flex",
              height: "600px",
              display: "flex",
              height: "600px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <img
                style={{ width: "600px", height: "600px" }}
                src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/700-x-700-nutritional-info_1bb69581-fc55-47cb-8671-567beb4fdcb7.png?v=1626112869"
                alt="K"
              />
            </div>

            <div
              style={{
                width: "760px",
                height: "600px",
                marginTop: "15%",
              }}
            >
              <h1 style={{ marginTop: "20px", fontStyle: "italic" }}>
                Melatonon
              </h1>
              <h2>for peaceful sleep</h2>
              <div>
                <p style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                  Your supplement for peaceful sleep
                </p>
              </div>
              <div
                style={{
                  width: "121px",
                  height: "53px",
                  border: "1px solid black",
                  margin: "auto",
                }}
              >
                <a href="https://www.dotandkey.com/blogs/news/6-tips-to-get-stronger-and-thicker-hair-at-home">
                  <button
                    style={{
                      border: "none",
                      marginTop: "10px",
                      backgroundColor: "#fcee91",
                    }}
                  >
                    MORE
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            height: "600px",
            width: "1520px",
          }}
        >
          <div
            style={{
              display: "flex",
              height: "600px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ marginLeft: "50px" }}>
              <img
                style={{
                  width: "600px",
                  height: "600px",
                }}
                src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/700-x-700-nutritional-info_1bb69581-fc55-47cb-8671-567beb4fdcb7.png?v=1626112869"
                alt="K"
              />
            </div>

            <div
              style={{
                width: "760px",
                height: "600px",
                marginTop: "15%",
              }}
            >
              <h1 style={{ marginTop: "20px", fontStyle: "italic" }}>
                GET healthy hair
              </h1>
              <h2>At Home</h2>
              <div>
                <p style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                  DIY solution for healthy hair
                </p>
              </div>
              <div
                style={{
                  width: "121px",
                  height: "53px",
                  border: "1px solid black",
                  margin: "auto",
                }}
              >
                <a href="https://www.dotandkey.com/blogs/news/6-tips-to-get-stronger-and-thicker-hair-at-home">
                  <button
                    style={{
                      border: "none",
                      marginTop: "10px",
                      backgroundColor: "#fcee91",
                    }}
                  >
                    MORE
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Slider2;
