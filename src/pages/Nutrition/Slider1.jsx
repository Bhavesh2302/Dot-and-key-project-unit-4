// import { Carousel } from "react-bootstrap";
import React from "react";
import Slider from "react-slick";

const Slider1 = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    // <div>
    //   <Carousel>
    //     <Carousel.Item interval={500}>
    //       <img
    //         className="d-block w-100"
    //         src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1600x500-website-banner5_1.jpg?v=1647001914"
    //         alt="First slide"
    //       />
    //     </Carousel.Item>
    //     <Carousel.Item interval={500}>
    //       <img
    //         className="d-block w-100"
    //         src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1600x500-website-banner4_2.png?v=1647001964"
    //         alt="Second slide"
    //       />
    //     </Carousel.Item>
    //     <Carousel.Item>
    //       <img
    //         className="d-block w-100"
    //         src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1600x500-website-banner1_1.png?v=1647002025"
    //         alt="Third slide"
    //       />
    //     </Carousel.Item>
    //   </Carousel>
    // </div>
    <div style={{ width: "100%", height: "484px" }}>
      <Slider {...settings}>
        <div style={{ width: "100%", height: "484px" }}>
          <img
            style={{ width: "100%", height: "484px" }}
            src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1600x500-website-banner5_1.jpg?v=1647001914"
            alt="First slide"
          />
        </div>
        <div>
          <img
            style={{ width: "100%", height: "484px" }}
            src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1600x500-website-banner4_2.png?v=1647001964"
            alt="Second slide"
          />
        </div>
        <div>
          <img
            style={{ width: "100%", height: "484px" }}
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1600x500-website-banner1_1.png?v=1647002025"
            alt="Third slide"
          />
        </div>
        <div>
          <img
            style={{ width: "100%", height: "484px" }}
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1600x500-website-banner3.png?v=1647002060"
            alt="Third slide"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Slider1;
