// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from "./styles/styles.carousel1.module.css"
import data from "../home.json"


import { Navigation, Pagination ,Autoplay} from 'swiper';







export const HomeCarousel1=() => {
  return (
    <div className={styles.bhcarousel1maindiv} >
    <Swiper className={styles.bhcarousel1}
spaceBetween={30}
centeredSlides={true}
autoplay={{
  delay: 2500,
  disableOnInteraction: false,
}}
pagination={{
  clickable: true,
}}
navigation={true}
modules={[Autoplay, Pagination, Navigation]}
>
    {data.homecarousel1.map((d)=>(
        <SwiperSlide className={styles.bhcarousel1image}><img src={d} alt="" /></SwiperSlide>

    ))}

...
</Swiper>
    </div>
  );
};