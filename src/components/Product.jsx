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
import pic10 from "../../public/MF catalogue-16.webp";
import pic11 from "../../public/MF catalogue-17.webp";
import pic12 from "../../public/MF catalogue-18.1.webp";

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
        <div className="mb-12 md:mt-15" >
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

        <h3 className="text-xl md:text-3xl font-semibold mb-4" name="Air Blower & Pressure Washer">
        Air Blower & Pressure Washer
        </h3>
        <div className="mb-15 md:mt-15" >
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

        <h3 className="text-xl md:text-3xl font-semibold mb-4" name="Spares for Compressors">
        Spares for Compressors
        </h3>
        <div className="mb-12 md:mt-15" >
          <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
            <div className=" p-4 shadow-md rounded-lg hover:text-black">
              <img src={pic12} alt="Spare Part 1" className="w-30 h-40" />
              {/* <h4 className="mt-2 text-xl text-white font-bold">Spare Part A</h4> */}
            </div>
            <div className=" p-4 shadow-md rounded-lg hover:text-black">
              <img src={pic12} alt="Spare Part 1" className="w-30 h-40" />
              {/* <h4 className="mt-2 text-xl text-white font-bold">Spare Part A</h4> */}
            </div>
            <div className=" p-4 shadow-md rounded-lg hover:text-black">
              <img src={pic12} alt="Spare Part 1" className="w-30 h-40" />
              {/* <h4 className="mt-2 text-xl text-white font-bold">Spare Part A</h4> */}
            </div>
            <div className=" p-4 shadow-md rounded-lg hover:text-black">
              <img src={pic12} alt="Spare Part 1" className="w-30 h-40" />
              {/* <h4 className="mt-2 text-xl text-white font-bold">Spare Part A</h4> */}
            </div>
            <div className=" p-4 shadow-md rounded-lg hover:text-black">
              <img src={pic12} alt="Spare Part 1" className="w-30 h-40" />
              {/* <h4 className="mt-2 text-xl text-white font-bold">Spare Part A</h4> */}
            </div>
            <div className=" p-4 shadow-md rounded-lg hover:text-black">
              <img src={pic12} alt="Spare Part 1" className="w-30 h-40" />
              {/* <h4 className="mt-2 text-xl text-white font-bold">Spare Part A</h4> */}
            </div>
            <div className=" p-4 shadow-md rounded-lg hover:text-black">
              <img src={pic12} alt="Spare Part 1" className="w-30 h-40" />
              {/* <h4 className="mt-2 text-xl text-white font-bold">Spare Part A</h4> */}
            </div>
            <div className=" p-4 shadow-md rounded-lg hover:text-black">
              <img src={pic12} alt="Spare Part 1" className="w-30 h-40" />
              {/* <h4 className="mt-2 text-xl text-white font-bold">Spare Part A</h4> */}
            </div>
            <div className=" p-4 shadow-md rounded-lg hover:text-black">
              <img src={pic12} alt="Spare Part 1" className="w-30 h-40" />
              {/* <h4 className="mt-2 text-xl text-white font-bold">Spare Part A</h4> */}
            </div>
            <div className=" p-4 shadow-md rounded-lg hover:text-black">
              <img src={pic12} alt="Spare Part 1" className="w-30 h-40" />
              {/* <h4 className="mt-2 text-xl text-white font-bold">Spare Part A</h4> */}
            </div>
            <div className=" p-4 shadow-md rounded-lg hover:text-black">
              <img src={pic12} alt="Spare Part 1" className="w-30 h-40" />
              {/* <h4 className="mt-2 text-xl text-white font-bold">Spare Part A</h4> */}
            </div>
            <div className=" p-4 shadow-md rounded-lg hover:text-black">
              <img src={pic12} alt="Spare Part 1" className="w-30 h-40" />
              {/* <h4 className="mt-2 text-xl text-white font-bold">Spare Part A</h4> */}
            </div>
            <div className=" p-4 shadow-md rounded-lg hover:text-black">
              <img src={pic12} alt="Spare Part 1" className="w-30 h-40" />
              {/* <h4 className="mt-2 text-xl text-white font-bold">Spare Part A</h4> */}
            </div>
            <div className=" p-4 shadow-md rounded-lg hover:text-black">
              <img src={pic12} alt="Spare Part 1" className="w-30 h-40" />
              {/* <h4 className="mt-2 text-xl text-white font-bold">Spare Part A</h4> */}
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
