import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import styles from "./styles/styles.bestseller.module.css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { FaRegHeart, FaStar } from "react-icons/fa";
import data from "../home.json";

export const BestSeller = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <div className={styles.bhbestsellersmaindiv}>
      <div>
        <p>shop our </p>
      </div>

      <h1>
        <i>BESTSELLERS</i>
      </h1>

      <div>
        {" "}
        <p>
          <span>SKIN</span>| BODYCARE | NUTRITION | HAIRCARE
        </p>
      </div>
      <div>
        <Swiper
          className={styles.bhbestsellersliderdiv}
          onSwiper={setSwiperRef}
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          {data.bestseller.map((d) => (
            <SwiperSlide key={d.id}>
              <div className={styles.bhbestsellerdatadiv}>
                <img
                  className={styles.bhbestsellerimages}
                  src={d.imageurl}
                  alt="imagelost"
                />
                <div className={styles.bhbestsellerratingicondiv}>
                  <div className={styles.bhbestsellerratingdiv}>
                    <div>
                      <FaStar className={styles.bhbestsellerstarcolordiv} />
                    </div>
                    <div>{d.rating}</div>
                  </div>
                  <div>
                    <FaRegHeart />
                  </div>
                </div>

                <div className={styles.bhbestsellernamediv}>{d.text}</div>
                <div className={styles.bhbestsellerpricediv}>Rs. {d.price}</div>
                <div className={styles.bhbestsellerbuttondiv}>
                  <button>ADD TO CART</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
