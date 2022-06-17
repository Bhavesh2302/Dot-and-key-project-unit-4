import { Swiper, SwiperSlide } from 'swiper/react';
import data from "../home.json"




import React from "react";



// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import styles from "./styles/styles.offerslider.module.css";

export  const OffersSlider= () => {
  return (
<div className={styles.bhofferbigdiv}>

    <p>loved by</p>
    <h1>over 10 lakh customers</h1>

    <div className={styles.bhoffermaindiv}>
    <Swiper className={styles.bhofferitems}
       spaceBetween={30}
       pagination={{
         clickable: true,
       }}
       modules={[Pagination]}
      
     >
{data.Offersslider.map((d)=>(
    <SwiperSlide className={styles.bhofferimage} ><img src={d} alt="" /></SwiperSlide>

))}
      
      
      ...
    </Swiper>
    </div>
    </div>
  );
};