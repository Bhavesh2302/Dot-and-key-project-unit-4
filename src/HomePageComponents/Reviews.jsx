
import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';


import styles from "./styles/styles.reviews.module.css"
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Zoom, Pagination, Navigation } from "swiper";
import data from "../home.json"

export const Reviews=() => {
    console.log(data ,"from revies")

  const [swiperRef, setSwiperRef] = useState(null);
  return (
<div className={ styles.bhreviewsmain}>
    <div>
        <p>CUSTOMER </p>
        <h2><i>REVIEWS</i></h2>
    </div>
 
    <div>
     <Swiper className={ styles.bhreviewsitems}
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
        
      {data.reviews.map((d)=>(
        <div className={styles.bhreviewsmappingdiv} >
        <SwiperSlide className={styles.bhreviewsimageurl}>
            <div> <img src={d.imageurl} alt="" /></div>
           
            <div className={styles.bhreviewsdata}><p>{d.review} </p></div>
            
            </SwiperSlide>
            </div>

    ))}
  


      ...
    </Swiper> 
    </div>
   
    </div>
  );
};