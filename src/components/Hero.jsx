import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div
      name="Hero"
      className="mt-17 md:mt-17 md:flex md:flex-row flex flex-col-reverse h-[90vh] items-center md:ml-18 md:mr-18 bg-black"
    >
      <div className="left md:w-1/2 md:mr-20 md:ml-20 mt-5 mb-2 px-10 w-full h-full flex flex-col items-center md:items-start justify-center text-center md:text-left p-5 md:p-10">
        <h1 className="text-2xl md:text-5xl font-bold text-white">
          Powerful & Reliable
        </h1>
        <h2 className="text-xl md:text-4xl font-semibold text-white mt-2">
          Air Compressors
        </h2>
        <p className="text-sm md:text-2xl text-white mt-2">For Every Industry</p>
        <p className="text-sm md:text-xl text-white mt-4">
          <strong>Powerful performance, low maintenance, and energy-saving solutions</strong>
          to keep your operations running smoothly.
        </p>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-0}
          activeClass="active"
          className="mt-6 px-6 py-3 bg-[#F38522] hover:bg-orange-600 hover:scale-110 text-white text-xl rounded-lg transition duration-300 shadow-orange-500 cursor-pointer"
        >
          Contact Us
        </Link>
      </div>

      <div className="right md:w-1/2 md:mr-20 md:ml-5 md:mt-0 mt-15 mb-0 px-10 w-full h-full justify-center items-center flex">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="md:w-[35vw] w-[70vw]"
        >
          <SwiperSlide>
            <img className="rounded-xl md:w-[35vw] w-[70vw] bg-white p-2" src="/MF catalogue-09.webp" alt="Hero 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-xl md:w-[35vw] w-[70vw] bg-white p-2" src="/MF catalogue-10.webp" alt="Hero 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-xl md:w-[35vw] w-[70vw] bg-white p-2" src="/MF catalogue-11.webp" alt="Hero 3" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
