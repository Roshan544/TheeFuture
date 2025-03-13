import React from "react";
// import pic1 from "../../public/FT-EB-40.webp";
// import pic2 from "../../public/FT-04-30.webp";
import pic1 from "../../public/MF catalogue-08.webp";
import pic3 from "../../public/MF catalogue-09.webp";
import pic4 from "../../public/MF catalogue-10.webp";
import pic5 from "../../public/MF catalogue-11.webp";
import pic6 from "../../public/MF catalogue-12.webp";
import pic7 from "../../public/MF catalogue-13.webp";
import pic8 from "../../public/MF catalogue-14.webp";
import pic9 from "../../public/MF catalogue-15.webp";
import pic10 from "../../public/MF catalogue-15-09.webp";
import pic11 from "../../public/MF catalogue-17.webp";
import pic12 from "../../public/MF catalogue-spares-09.webp";
import pic13 from "../../public/MF catalogue-spares-10.webp";
import pic14 from "../../public/MF catalogue-spares-11.webp";
import pic15 from "../../public/MF catalogue-spares-12.webp";
import pic16 from "../../public/MF catalogue-spares-13.webp";
import pic17 from "../../public/MF catalogue-spares-14.webp";
import pic18 from "../../public/MF catalogue-spares-15.webp";
import pic19 from "../../public/MF catalogue-spares-16.webp";
import pic20 from "../../public/MF catalogue-spares-17.webp";
import pic21 from "../../public/MF catalogue-spares-18.webp";
import pic22 from "../../public/MF catalogue-spares-19.webp";
import pic23 from "../../public/MF catalogue-spares-20.webp";
import pic24 from "../../public/MF catalogue-spares-21.webp";
import pic25 from "../../public/MF catalogue-spares-22.webp";
import pic26 from "../../public/MF catalogue-spares-23.webp";
import pic27 from "../../public/MF catalogue-spares-24.webp";
import pic28 from "../../public/MF catalogue-spares-25.webp";
import pic29 from "../../public/MF catalogue-spares-26.webp";
import pic30 from "../../public/MF catalogue-spares-27.webp";
import pic31 from "../../public/MF catalogue-spares-28.webp";
import pic32 from "../../public/MF catalogue-spares-29.webp";
import pic33 from "../../public/MF catalogue-spares-30.webp";
import pic34 from "../../public/MF catalogue-spares-31.webp";
import pic35 from "../../public/MF catalogue-spares-32.webp";
import pic36 from "../../public/MF catalogue-spares-33.webp";
import pic37 from "../../public/MF catalogue-spares-34.webp";
import pic38 from "../../public/MF catalogue-spares-35.webp";
import pic39 from "../../public/MF catalogue-spares-36.webp";
import pic40 from "../../public/MF catalogue-spares-37.webp";

const Product = () => {
  return (
    <div name="Products">
      <section className="px-8 md:px-28 py-10 bg-gray-950">
        <h2 className="text-3xl font-bold text-center mt-5 mb-7">
          Our Products
        </h2>

        <h3
          className="text-xl md:text-3xl font-semibold mb-4"
          name="Belt Driven"
        >
          Belt Driven
        </h3>
        <div className="mb-12 md:mt-15">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-2 md:p-4 shadow-md rounded-lg hover:bg-[#F38522] hover:text-black">
              <img
                src={pic3}
                alt="Air Compressors"
                className="w-full object-cover"
              />
              <h4 className="mt-2 text-xl text-black font-bold">FTBT-90L</h4>
              {/* <p className="text-gray-950">
                High efficiency, no oil contamination, suitable for medical and
                food industries.
              </p> */}
            </div>
            <div className="bg-white p-2 md:p-4 shadow-md rounded-lg hover:bg-[#F38522] hover:text-black">
              <img
                src={pic4}
                alt="Air Compressors"
                className="w-full object-cover "
              />
              <h4 className="mt-2 text-xl text-black font-bold">FTBT-120L</h4>
              {/* <p className="text-gray-950">
                Low maintenance, energy-efficient, and eco-friendly.
              </p> */}
            </div>
          </div>
        </div>

        <h3 className="text-xl md:text-3xl font-semibold mb-4" name="Oil Free">
          Oil Free
        </h3>
        <div className="mb-12 md:mt-15">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-2 md:p-4 shadow-md rounded-lg hover:bg-[#F38522] hover:text-black">
              <img
                src={pic5}
                alt="Air Compressors"
                className="w-full object-cover "
              />
              <h4 className="mt-2 text-xl text-black font-bold">FT-04-10</h4>
              {/* <p className="text-gray-950">
                Durable, high performance, ideal for industrial use.
              </p> */}
            </div>
            <div className="bg-white p-2 md:p-4 shadow-md rounded-lg hover:bg-[#F38522] hover:text-black">
              <img
                src={pic6}
                alt="Air Compressors"
                className="w-full object-cover "
              />
              <h4 className="mt-2 text-xl text-black font-bold">FT-04-30</h4>
              {/* <p className="text-gray-950">
                Energy-efficient, reliable, and powerful.
              </p> */}
            </div>
            <div className="bg-white p-2 md:p-4 shadow-md rounded-lg hover:bg-[#F38522] hover:text-black">
              <img
                src={pic7}
                alt="Air Compressors"
                className="w-full object-cover "
              />
              <h4 className="mt-2 text-xl text-black font-bold">FT-AC04-40</h4>
              {/* <p className="text-gray-950">
                Energy-efficient, reliable, and powerful.
              </p> */}
            </div>
            <div className="bg-white p-2 md:p-4 shadow-md rounded-lg hover:bg-[#F38522] hover:text-black">
              <img
                src={pic8}
                alt="Air Compressors"
                className="w-full object-cover "
              />
              <h4 className="mt-2 text-xl text-black font-bold">FT04-100-2</h4>
              {/* <p className="text-gray-950">
                Energy-efficient, reliable, and powerful.
              </p> */}
            </div>
            <div className="bg-white p-2 md:p-4 shadow-md rounded-lg hover:bg-[#F38522] hover:text-black">
              <img
                src={pic9}
                alt="Air Compressors"
                className="w-full object-cover "
              />
              <h4 className="mt-2 text-xl text-black font-bold">FT-AC-30</h4>
              {/* <p className="text-gray-950">
                Energy-efficient, reliable, and powerful.
              </p> */}
            </div>
            <div className="bg-white p-2 md:p-4 shadow-md rounded-lg hover:bg-[#F38522] hover:text-black">
              <img
                src={pic10}
                alt="Air Compressors"
                className="w-full object-cover "
              />
              <h4 className="mt-2 text-xl text-black font-bold">FT-AC-50</h4>
              {/* <p className="text-gray-950">
                Energy-efficient, reliable, and powerful.
              </p> */}
            </div>
          </div>
        </div>

        <h3
          className="text-xl md:text-3xl font-semibold mb-4"
          name="Air Blower & Pressure Washer"
        >
          Air Blower & Pressure Washer
        </h3>
        <div className="mb-15 md:mt-15">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-2 md:p-4 shadow-md rounded-lg hover:bg-[#F38522] hover:text-black">
              <img
                src={pic1}
                alt="Air Compressors"
                className="w-full object-cover "
              />
              <h4 className="mt-2 text-xl text-black font-bold">BLOWER</h4>
              {/* <p className="text-gray-950">
                High-quality replacement part ensuring efficiency.
              </p> */}
            </div>
            <div className="bg-white p-2 md:p-4 shadow-md rounded-lg hover:bg-[#F38522] hover:text-black">
              <img
                src={pic11}
                alt="Air Compressors"
                className="w-full object-cover "
              />
              <h4 className="mt-2 text-xl text-black font-bold">
                PRESSURE WASHER
              </h4>
              {/* <p className="text-gray-950">
                Durable and compatible with multiple models.
              </p> */}
            </div>
          </div>
        </div>

        <h3
          className="text-xl md:text-3xl font-semibold mb-2"
          name="Oil Free Spares"
        >
          Oil Free Spares
        </h3>
        <div className="mb-10 md:mt-10">
          <div className="grid grid-cols-2 xl:grid-cols-8 md:grid-cols-5 gap-4">
            <div className="p-2 md:p-2 shadow-md rounded-lg hover:text-black w-30 md:w-30 ">
              <img src={pic12} alt="Air Compressors" className="w-full" />
            </div>
            <div className="p-2 md:p-2 shadow-md rounded-lg hover:text-black w-30 md:w-30 ">
              <img src={pic13} alt="Air Compressors" className="w-full" />
            </div>
            <div className="p-2 md:p-2 shadow-md rounded-lg hover:text-black w-30 md:w-30 ">
              <img src={pic14} alt="Air Compressors" className="w-full" />
            </div>
            <div className="p-2 md:p-2 shadow-md rounded-lg hover:text-black w-30 md:w-30 ">
              <img src={pic15} alt="Air Compressors" className="w-full" />
            </div>
            <div className="p-2 md:p-2 shadow-md rounded-lg hover:text-black w-30 md:w-30 ">
              <img src={pic16} alt="Air Compressors" className="w-full" />
            </div>
            <div className="p-2 md:p-2 shadow-md rounded-lg hover:text-black w-30 md:w-30 ">
              <img src={pic17} alt="Air Compressors" className="w-full" />
            </div>
            <div className="p-2 md:p-2 shadow-md rounded-lg hover:text-black w-30 md:w-30 ">
              <img src={pic18} alt="Air Compressors" className="w-full" />
            </div>
            <div className="p-2 md:p-2 shadow-md rounded-lg hover:text-black w-30 md:w-30 ">
              <img src={pic19} alt="Air Compressors" className="w-full" />
            </div>
            <div className="p-2 md:p-2 shadow-md rounded-lg hover:text-black w-30 md:w-30 ">
              <img src={pic20} alt="Air Compressors" className="w-full" />
            </div>
            <div className="p-2 md:p-2 shadow-md rounded-lg hover:text-black w-30 md:w-30 ">
              <img src={pic21} alt="Air Compressors" className="w-full" />
            </div>
            <div className="p-2 md:p-2 shadow-md rounded-lg hover:text-black w-30 md:w-30 ">
              <img src={pic22} alt="Air Compressors" className="w-full" />
            </div>
            <div className="p-2 md:p-2 shadow-md rounded-lg hover:text-black w-30 md:w-30 ">
              <img src={pic23} alt="Air Compressors" className="w-full" />
            </div>
            <div className="p-2 md:p-2 shadow-md rounded-lg hover:text-black w-30 md:w-30 ">
              <img src={pic27} alt="Air Compressors" className="w-full" />
            </div>
            <div className="p-2 md:p-2 shadow-md rounded-lg hover:text-black w-30 md:w-30 ">
              <img src={pic28} alt="Air Compressors" className="w-full" />
            </div>
            <div className="p-2 md:p-2 shadow-md rounded-lg hover:text-black w-30 md:w-30 ">
              <img src={pic29} alt="Air Compressors" className="w-full" />
            </div>
            <div className="p-2 md:p-2 shadow-md rounded-lg hover:text-black w-30 md:w-30 ">
              <img src={pic30} alt="Air Compressors" className="w-full" />
            </div>
            <div className="p-2 md:p-2 md:pr-9 shadow-md rounded-lg hover:text-black w-35 md:w-40">
              <img src={pic24} alt="Air Compressors" className="w-full" />
            </div>
            <div className="p-2 md:p-2 md:pr-9 shadow-md rounded-lg hover:text-black w-35 md:w-40">
              <img src={pic25} alt="Air Compressors" className="w-full" />
            </div>
            <div className="p-2 md:p-2 md:pr-9 shadow-md rounded-lg hover:text-black w-35 md:w-40">
              <img src={pic26} alt="Air Compressors" className="w-full" />
            </div>
          </div>
        </div>

        <h3
          className="text-xl md:text-3xl font-semibold mb-2"
          name="Belt Type Spares"
        >
          Belt Type Spares
        </h3>
        <div className="mb-10 md:mt-10">
          <div className="grid grid-cols-2 xl:grid-cols-8 md:grid-cols-6  gap-4">
            <div className="p-2 md:p-2 shadow-md rounded-lg hover:text-black w-30 md:w-30 ">
              <img src={pic27} alt="Air Compressors" className="w-full" />
            </div>
            <div className="p-2 md:p-2 shadow-md rounded-lg hover:text-black w-30 md:w-30 ">
              <img src={pic28} alt="Air Compressors" className="w-full" />
            </div>
            <div className="p-2 md:p-2 shadow-md rounded-lg hover:text-black w-30 md:w-30 ">
              <img src={pic29} alt="Air Compressors" className="w-full" />
            </div>
            <div className="p-2 md:p-2 shadow-md rounded-lg hover:text-black w-30 md:w-30 ">
              <img src={pic30} alt="Air Compressors" className="w-full" />
            </div>
            <div className="p-2 md:p-2 shadow-md rounded-lg hover:text-black w-30 md:w-30 ">
              <img src={pic31} alt="Air Compressors" className="w-full" />
            </div>
            <div className="p-2 md:p-2 shadow-md rounded-lg hover:text-black w-30 md:w-30 ">
              <img src={pic32} alt="Air Compressors" className="w-full" />
            </div>
            <div className="p-2 md:p-2 shadow-md rounded-lg hover:text-black w-30 md:w-30 ">
              <img src={pic33} alt="Air Compressors" className="w-full" />
            </div>
            <div className="p-2 md:p-2 shadow-md rounded-lg hover:text-black w-30 md:w-30 ">
              <img src={pic34} alt="Air Compressors" className="w-full" />
            </div>
            <div className="p-2 md:p-2 shadow-md rounded-lg hover:text-black w-30 md:w-30 ">
              <img src={pic35} alt="Air Compressors" className="w-full" />
            </div>
            <div className="p-2 md:p-2 shadow-md rounded-lg hover:text-black w-30 md:w-30 ">
              <img src={pic36} alt="Air Compressors" className="w-full" />
            </div>
            <div className="p-2 md:p-2 shadow-md rounded-lg hover:text-black w-30 md:w-30 ">
              <img src={pic37} alt="Air Compressors" className="w-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;


