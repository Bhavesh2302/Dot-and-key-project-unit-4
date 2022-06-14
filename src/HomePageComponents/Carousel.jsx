import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles/carousel.css"

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        // centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
   
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1-Product_banner_Desktop_4.jpg?v=1651751278" alt="pink" /></SwiperSlide>
        <SwiperSlide><img src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1-Product_banner_Desktop_3.jpg?v=1651751278" alt="gren" /></SwiperSlide>
        <SwiperSlide><img src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/2-Vit-C_5.jpg?v=1651751278" alt="orangecream" /></SwiperSlide>
        <SwiperSlide><img src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Probiotic_Home_Page_Banner-01_1_15b4bffa-e658-4693-9b64-cfc9efcb99cb.jpg?v=1653990558" alt="blue" /></SwiperSlide>
        <SwiperSlide><img src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1_desk_73e2615b-0026-447e-81af-fe6041105ce8.png?v=1653371967" alt="orangeserum" /></SwiperSlide>
       
      </Swiper>
    </>
  );
}
