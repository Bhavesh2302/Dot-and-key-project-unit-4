
import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';


import styles from "./styles/styles.skincare.module.css"
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Zoom, Pagination, Navigation } from "swiper";
import data from "../home.json"

export const Skincare=() => {

  const [swiperRef, setSwiperRef] = useState(null);
  return (
<div className={ styles.bhskincaremain}>
    <div>
        <p>GUIDE TO</p>
        <h2><i>SKINCARE</i></h2>
    </div>
    <div>
   
    <Swiper className={ styles.bhskincareitems}
    onSwiper={setSwiperRef}
    zoom={true}
    slidesPerView={3}
   spaceBetween={30}
    pagination={{
      type: "fraction",
    }}
    navigation={true}
    modules={[Zoom,Pagination, Navigation]}
    >
      {data.skincare.map((d)=>(
        <SwiperSlide className={styles.bhskincareimage}><img src={d} alt="" /></SwiperSlide>

    ))}

      ...
    </Swiper>
    </div>
    <div className={styles.bhskincarenutrtionimg}><img src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Desktop_homepage_1_3d9730b7-4aa9-4328-97e5-d7b1762275b0.png?v=1647001294" alt="" /></div>
    </div>
  );
};