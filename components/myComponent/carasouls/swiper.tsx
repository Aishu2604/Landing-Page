import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function Slider({ children, ...props }: any) {
  const [gallary, setGallary] = useState([]);

  return (
    <>
      <Swiper
        {...props}
       
        // breakpoints={{
        //   640: {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        //   },
        //   768: {
        //     slidesPerView: 4,
        //     spaceBetween: 40,
        //   },
        //   1024: {
        //     slidesPerView: 6,
        //     spaceBetween: 20,
        //   },
        // }}
        //  modules={[Pagination]}
        className="mySwiper banner-swiper"
      >
        {children}
      </Swiper>
    </>
  );
}
