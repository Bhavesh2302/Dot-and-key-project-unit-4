
import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from "./styles/styles.ingredients.module.css"

import "swiper/css/pagination";
import "swiper/css/navigation";
import {Zoom, Pagination, Navigation } from "swiper";
import data from "../home.json"

export const Ingredients =() => {

  const [swiperRef, setSwiperRef] = useState(null);
  return (
<div className={ styles.bhingredientsmain}>
    <div>
        <p>SHOP BY</p>
        <h2><i>INGREDIENTS</i></h2>
    </div>
    <div>
    <p><span>SKIN</span>| BODYCARE | NUTRITION | HAIRCARE</p>
    <Swiper className={ styles.bhingredientsitems}
    onSwiper={setSwiperRef}
    zoom={true}
    slidesPerView={3}
   spaceBetween={20}
    pagination={{
      type: "fraction",
    }}
    navigation={true}
    modules={[Zoom,Pagination, Navigation]}
    >
      {data.ingredients.map((d)=>(
        <SwiperSlide className={styles.bhingredientsimage}><img src={d} alt="" /></SwiperSlide>

    ))}

      ...
    </Swiper>
    </div>
    </div>
  );
};