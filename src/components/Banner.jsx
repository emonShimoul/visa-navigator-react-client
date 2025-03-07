import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";

const Banner = () => {
  return (
    <div className="w-full h-[400px] md:h-[480px] relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="w-full h-full flex items-center justify-center bg-cover bg-center"
            style={{
              backgroundImage: `url(${banner2})`,
            }}
          >
            <div className="bg-black/50 p-8 rounded-md text-center text-white max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold">
                Your Gateway to Global Travel
              </h2>
              <p className="mt-4 text-lg md:text-xl">
                Find visa information, apply online, and track your application
                seamlessly.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="w-full h-full flex items-center justify-center bg-cover bg-center"
            style={{
              backgroundImage: `url(${banner3})`,
            }}
          >
            <div className="bg-black/50 p-8 rounded-md text-center text-white max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold">
                Hassle-Free Visa Application
              </h2>
              <p className="mt-4 text-lg md:text-xl">
                Submit your visa application in just a few clicks.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="w-full h-full flex items-center justify-center bg-cover bg-center"
            style={{
              backgroundImage: `url(${banner1})`,
            }}
          >
            <div className="bg-black/50 p-8 rounded-md text-center text-white max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold">
                Stay Informed & Travel with Confidence
              </h2>
              <p className="mt-4 text-lg md:text-xl">
                Get real-time updates on visa processing and travel
                requirements.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
