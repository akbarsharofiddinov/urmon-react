import React, { useRef } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import banner1 from "@/images/banner/image-1.jpg";
import banner2 from "@/images/banner/image-2.jpg";
import banner3 from "@/images/banner/image-3.jpg";
import banner4 from "@/images/banner/image-4.jpg";
import banner5 from "@/images/banner/image-5.jpg";
import banner6 from "@/images/banner/image-6.jpg";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Banner: React.FC = () => {
  const swiperRef = useRef<any>(null);

  // Custom navigation functions
  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  return (
    <>
      <div className="banner">
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation, Pagination]}
          className="banner-swiper"
          ref={swiperRef}
          loop={true}
          pagination={{ clickable: true, dynamicBullets: true }}
        >
          <SwiperSlide>
            <img src={banner1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner6} alt="" />
          </SwiperSlide>
        </Swiper>

        <div className="swiper-buttons">
          <button onClick={handlePrev} style={{}}>
            <FaAngleLeft />
          </button>
          <button onClick={handleNext}>
            <FaAngleRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
