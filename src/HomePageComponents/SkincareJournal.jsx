import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import styles from "./styles/styles.journal.module.css"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";

const SkincareJournal = () => {
  return (
    <div>
<div><p></p></div>
<h1><i>SKINCARE JOURNAL</i></h1>

<div className={styles.bhjournaldisplaydiv}>

<div><img src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/image_64_1_7f2ff662-3a45-45a1-9f0c-952252786d05.png?v=1634885869" alt="" /></div>

<div className={styles.bhjournalsliderdiv}>

<Swiper 
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/ezgif.com-gif-maker_ff4dc633-9c9a-40b1-810f-2614147ac68d_540x.gif?v=1615273304" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Little-things-that-matter-2_540x.jpg?v=1596602464" alt="" /></SwiperSlide>
       
      </Swiper>


</div>





</div>
    </div>

    
  )
}

export default SkincareJournal