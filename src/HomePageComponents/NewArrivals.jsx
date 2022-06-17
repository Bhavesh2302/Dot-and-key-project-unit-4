import React, { useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import styles from "./styles/styles.newarrivals.module.css"

import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import {FaRegHeart,FaStar} from "react-icons/fa";
import data from "../home.json"

export const NewArrival=() => {
    const [swiperRef, setSwiperRef] = useState(null);
  return (

    <div className={styles.bhnewarrivalsmaindiv}>

      <div><p>shop our </p></div>

     
        <h1><i>NEW ARRIVALS</i></h1>

       
      <div >  
    <Swiper className={styles.bhnewarrivalsliderdiv}
    onSwiper={setSwiperRef}
    slidesPerView={3}
   spaceBetween={30}
    pagination={{
      type: "fraction",
    }}
    navigation={true}
    modules={[Pagination, Navigation]}
    >

      {data.newarrivals.map((d)=>(
         <SwiperSlide key={d.id}>
         <div className={styles.bhnewarrivaldatadiv}>
 <img  className={styles.bhnewarrivalimages} src={d.imageurl} alt="" />
 <div className={styles.bhnewarrivalratingicondiv}>
  <div className={styles.bhnewarrivalratingdiv}>
    <div><FaStar className={styles.bhnewarrivalstarcolordiv}/></div>
    <div>{d.rating}</div>
  </div>
  <div><FaRegHeart/></div>
 </div>

 <div className={styles.bhnewarrivalnamediv}>{d.name}</div>
 <div className={styles.bhnewarrivalpricediv}>Rs. {d.price}</div>
 <div className={styles.bhnewarrivalbuttondiv}><button>ADD TO CART</button></div> 
         </div>
       </SwiperSlide>

      ))}
     
  
      
    </Swiper>
    </div>
    </div>
  );
};