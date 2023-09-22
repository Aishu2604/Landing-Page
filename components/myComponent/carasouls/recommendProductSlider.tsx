"use client";
import React, { useRef, useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Card, CardContent, CardDescription } from "../../ui/card";
import Image from "next/image";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiTwotoneStar,
} from "react-icons/ai";
import { Button } from "../../ui/button";
import useWindowDimensions from "@/hooks/useWindowDimension";

const ProductSlider = ({
  setSwiperRef = undefined,
  slidesPerView = 3,
  showNavigation = false,
  data = [],
}:any) => {
  const [slides, setSlides] = useState(
    Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
  );
  //const {width, height} = useWindowDimensions
  const [recommendData, setRecommendData] = useState(data)
  const handleHeart = (id : Number)=>{
    setRecommendData([...recommendData,...recommendData.filter((v : any) => {v.id === id ? v.isHeart = !v.isHeart : null})])
  }
  return (
    <>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        slidesPerView={slidesPerView}
        spaceBetween={30}
        navigation={showNavigation}
        className="w-[850px] main-prod-slider"
      >
        {recommendData && recommendData.map((v, index) => (
          <SwiperSlide key={v} virtualIndex={index}>
            <div>
              <Card className="shadow-xl recommend-prod">
                <CardContent className="relative">
                  {!v.isHeart && <AiOutlineHeart className="absolute top-4 right-4 z-50 cursor-pointer text-[#D8D8D8] text-3xl xxs:text-2xl" onClick={()=>handleHeart(v.id)}/>}
                  {v.isHeart && <AiFillHeart className="absolute top-4 right-4 z-50 cursor-pointer text-orange-500 text-3xl xxs:text-2xl" onClick={()=>handleHeart(v.id)}/>}
                  <Image
                    className="mb-0 p-0 recommend-image"
                    src={`${v.imageUrl}`}
                    alt="logo"
                    width={334}
                    height={334}
                    sizes="100"
                    style={{ position: "relative", width:"334px" , height:"334px" }}
                  />
                  <div
                    className="h-[24px] w-[67px] bg-[#00C227] text-sm text-white text-center mt-1 lg:block hidden"
                    style={{ position: "relative", bottom: "332px" ,right:'9px' }}
                  >
                    {v.offerPrice}
                  </div>
                  <div
                    className="h-[24px] w-[67px] bg-[#00C227] text-sm text-white text-center md:hidden"
                    style={{ position: "relative",bottom:'333px', right:'9px' }}
                  >
                    {v.offerPrice}
                  </div>
                  <CardDescription className="xxs:text-xs sm:text-xs text-xs -mt-2 text-[#393939] text-left">
                    {v.description}
                  </CardDescription>
                  <div className="flex my-2">
                    <CardDescription className="line-through text-[#4C4C4C] lg:text-xl xxs:text-xs sm:text-sm">
                      <b>{v.mrpPrice}</b>
                    </CardDescription>
                    <CardDescription className="ml-2 lg:text-xl xxs:text-xs text-[#4C4C4C] sm:text-sm">
                      <b>{v.actualPrice}</b>
                    </CardDescription>
                    <CardDescription className="ml-2 text-[10px] text-[#9C9C9C] mt-2 xxs:hidden sm:block">
                      {v.offerPercent}
                    </CardDescription>
                    {/* <Button className="ml-14" size='sm'>Add to Cart <AiOutlineShoppingCart /></Button> */}
                  </div>
                  <div className="flex">
                    <AiTwotoneStar className="text-orange-400 -mt-0.5 mr-1 w-[18px] h-[16px]" />
                    <CardDescription className="text-[10px]">
                      {" "}
                      4.1(10)
                    </CardDescription>
                  </div>
                  <div className="grid lg:grid-cols-2 xxs:space-y-2">
                    <div className="flex">
                    <div className="ml-1 mr-1 mt-2 space-between h-5 w-5 bg-black rounded-[50%]"></div>
                    <div className="ml-1 mr-1 mt-2 space-between h-5 w-5 bg-red-400 rounded-[50%]"></div>
                    <div className="ml-1 mr-1 mt-2 space-between h-5 w-5 bg-green-400 rounded-[50%]"></div>
                    <div className="ml-1 mr-1 mt-2 space-between h-5 w-5 bg-yellow-400 rounded-[50%]"></div>
                    </div>
                    <Button className="xxs:w-[95%] sm:w-36 border-2 border-red-400  sm:ml-12 lg:ml-auto  xxs:text-xs xxs:font-normal sm:text-sm sm:font-semibold w-[139px] h-[40px] m-0 rounded-none" size="sm">
                      Add to Cart <AiOutlineShoppingCart className="xxs:ml-2"/>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductSlider;
