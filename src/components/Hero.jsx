import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-scroll";

import pic1 from "../../public/MF catalogue-08.webp";
import pic3 from "../../public/MF catalogue-09.webp";
import pic4 from "../../public/MF catalogue-10.webp";
import pic5 from "../../public/MF catalogue-11.webp";
import pic6 from "../../public/MF catalogue-12.webp";
import pic7 from "../../public/MF catalogue-13.webp";
import pic8 from "../../public/MF catalogue-14.webp";
import pic9 from "../../public/MF catalogue-15.webp";
import pic10 from "../../public/MF catalogue-16.webp";
import pic11 from "../../public/MF catalogue-17.webp";

const Hero = () => {
  return (
    <div
      name="Hero"
      className="mt-17 md:mt-17 md:flex md:flex-row flex flex-col-reverse h-[90vh] items-center md:ml-10 md:mr-10 bg-black"
    >
      <div className="left md:w-1/2 md:mr-15 md:ml-15 mt-5 mb-2 px-10 xl:px-15 w-full h-full flex flex-col items-center md:items-start justify-center text-center md:text-left p-5 md:p-10">
        <h1 className="text-2xl md:text-2xl xl:text-6xl font-bold text-white">
          Powerful & Reliable
        </h1>
        <h2 className="text-xl md:text-2xl xl:text-6xl font-semibold text-white mt-2">
          Air Compressors
        </h2>
        <p className="text-sm md:text-sm xl:text-xl text-white mt-2">
          For Every Industry
        </p>
        <p className="text-sm md:text-[16px] xl:text-[20px] text-white mt-4">
          <strong>Powerful performance, low maintenance, and energy-saving solutions </strong> 
          to keep your operations running smoothly.
        </p>
        {/* <a
          href="#contact"
          className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 hover:scale-110 text-white text-xl rounded-lg transition duration-300 shadow-orange-500"
        >
          Contact Us
        </a> */}

        <Link to="Contact Us"
              smooth="{true}"
              duration={500}
              offset={-0}
              activeClass="active"
              as="a"
              href="/#Contact Us"
              className="mt-6 px-6 py-3 bg-[#F38522] hover:bg-orange-600 hover:scale-110 text-white text-xl rounded-lg transition duration-300 shadow-orange-500"
        >Contact Us</Link>

        {/* <div className="flex w-full justify-center md:justify-end">
            <img className="md:w-30 md:h-25 w-15 h-10" src={pic4} alt="" />
            <img className="md:w-30 md:h-25 w-15 h-10" src={pic5} alt="" />
        </div>  */}
      </div>
      <div className="right md:w-1/2 md:mr-20 md:ml-5 md:mt-0 mt-15 mb-0 px-5 w-full h-[100vh] justify-center items-center flex">
        <Swiper
          modules={[Pagination, Autoplay]}
        //   navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          loading="lazy"
          rel="preload"
          className="md:w-[35vw] w-full"
        >
          <SwiperSlide>
            <img className="rounded-xl md:w-[35vw] w-full bg-white p-2" rel="preload" loading="lazy" src={pic3} alt="Hero 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-xl md:w-[35vw] w-full bg-white p-2" rel="preload" loading="lazy" src={pic4} alt="Hero 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-xl md:w-[35vw] w-full bg-white p-2" rel="preload" loading="lazy" src={pic5} alt="Hero 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-xl md:w-[35vw] w-full bg-white p-2" rel="preload" loading="lazy" src={pic6} alt="Hero 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-xl md:w-[35vw] w-full bg-white p-2" rel="preload" loading="lazy" src={pic7} alt="Hero 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-xl md:w-[35vw] w-full bg-white p-2" rel="preload" loading="lazy" src={pic8} alt="Hero 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-xl md:w-[35vw] w-full bg-white p-2" rel="preload" loading="lazy" src={pic9} alt="Hero 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-xl md:w-[35vw] w-full bg-white p-2" rel="preload" loading="lazy" src={pic10} alt="Hero 3" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
