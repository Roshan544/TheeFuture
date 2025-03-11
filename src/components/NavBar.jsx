import React, { useState } from "react";
import { Link } from "react-scroll";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import logo from "../../public/Logo.png";

const NavBar = () => {
  const [menu, setmenu] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <div className="NavBar flex w-full justify-between items-center px-5 md:px-22 fixed top-0 bg-black z-10">
        <Link
          to="Hero"
          smooth={true}
          duration={500}
          activeClass="active"
          title="Logo"
          offset={-70}
          as="a"
          href="/#Home"
        >
          <div className="flex flex-col justify-center items-center cursor-pointer">
            {/* <h2 className="font-serif md:text-2xl text-xl text-[#F38522]">The Future</h2> */}
            <img
              className="h-15 md:h-20"
              src={logo}
              alt="Logo"
              loading="lazy"
            />
            <p className="text-sm font-extralight text-gray-200">
              “The Future of Air Compressors”
            </p>
          </div>
        </Link>
        <div className="ul hidden md:flex gap-3 items-center pr-11">
          <div className="">
            <ul className="flex gap-4">
              <li className="hover:cursor-pointer hover:scale-105 hover:text-[#F38522] text-lg">
                <Link
                  to="Hero"
                  smooth="{true}"
                  duration={500}
                  offset={-70}
                  activeClass="active"
                  as="a"
                  href="/#Home"
                >
                  Home
                </Link>
              </li>
              <li className="hover:cursor-pointer hover:scale-105 hover:text-[#F38522] text-lg">
                <Link
                  to="About"
                  smooth="{true}"
                  duration={500}
                  offset={-70}
                  activeClass="active"
                  as="a"
                  href="/#About"
                >
                  About
                </Link>
              </li>
              {/* <li className="hover:cursor-pointer hover:scale-105 hover:text-[#F38522] text-lg">
                <Link to="Products"
                    smooth="{true}"
                    duration={500}
                    offset={-70}
                    activeClass="active"
                    as="a"
                    href="/#Product"
                >Products</Link>
              </li> */}

              <li
                className="relative group hover:cursor-pointer hover:scale-105 hover:text-[#F38522] text-lg"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <Link
                  to="Products"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                  as="a"
                  href="/#Powerful Airflow & Pressure Washer"
                >
                  Products
                </Link>
                {showDropdown && (
                  <ul className="absolute top-full left-0 bg-[#F38522] text-white py-0 rounded shadow-lg w-50">
                    <li className="px-4 py-1 hover:bg-gray-800">
                      <Link
                        to="Belt Driven"
                        smooth={true}
                        duration={500}
                        offset={-120}
                        as="a"
                        href="/#Belt Driven"
                        onClick={() => setShowDropdown(false)}
                      >
                        Belt Driven
                      </Link>
                    </li>
                    <li className="px-4 py-1 hover:bg-gray-800">
                      <Link
                        to="Oil Free"
                        smooth={true}
                        duration={500}
                        offset={-120}
                        as="a"
                        href="/#Oil Free"
                        onClick={() => setShowDropdown(false)}
                      >
                        Oil Free
                      </Link>
                    </li>
                    <li className="px-4 py-1 hover:bg-gray-800">
                      <Link
                        to="Air Blower & Pressure Washer"
                        smooth={true}
                        duration={500}
                        offset={-120}
                        as="a"
                        href="/#Air Blower & Pressure Washer"
                        onClick={() => setShowDropdown(false)}
                      >
                        Air Blower & Pressure Washer
                      </Link>
                    </li>
                    <li className="px-4 py-1 hover:bg-gray-800">
                      <Link
                        to="Spares for Compressors"
                        smooth={true}
                        duration={500}
                        offset={-120}
                        as="a"
                        href="/#Spares for Compressors"
                        onClick={() => setShowDropdown(false)}
                      >
                        Spares for Compressors
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className="hover:cursor-pointer hover:scale-105 hover:text-[#F38522] text-lg">
                <Link
                  to="Contact Us"
                  smooth="{true}"
                  duration={500}
                  offset={-70}
                  activeClass="active"
                  as="a"
                  href="/#Contact Us"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="menu flex flex-col md:hidden text-[#F38522]"
          onClick={() => setmenu(!menu)}
        >
          {menu ? <TiThMenu size={30} /> : <IoClose size={30} />}
        </div>
      </div>

      {!menu && (
        <div className="ul md:hidden flex bg-black text-white py-[10%] h-full mt-8 fixed top-7 left-0 z-10 w-90">
          <ul className="flex flex-col gap-4 left-0 px-8 w-full">
            <li className="hover:cursor-pointer hover:scale-105 hover:text-[#F38522] text-lg">
              <Link
                to="Hero"
                onClick={() => setmenu(!menu)}
                smooth="{true}"
                duration={500}
                offset={-70}
                activeClass="active"
                as="a"
                href="/#Home"
                >
                Home
              </Link>
            </li>
            <li className="hover:cursor-pointer hover:scale-105 hover:text-[#F38522] text-lg">
              <Link
                to="About"
                onClick={() => setmenu(!menu)}
                smooth="{true}"
                duration={500}
                offset={-70}
                activeClass="active"
                as="a"
                href="/#About"
                >
                About
              </Link>
            </li>
            <li
              className="hover:cursor-pointer hover:scale-105 hover:text-[#F38522] text-lg items-end right-0"
              onClick={() => setShowDropdown(!showDropdown)}
              // onClick={() => { setShowDropdown(!showDropdown); setmenu(!menu); }}

            >
              Products
              {showDropdown && (
                <ul className="flex flex-col bg-black text-white mt-2 rounded justify-end">
                  <li className="px-4 py-1 hover:bg-gray-800">
                      <Link
                        to="Belt Driven"
                        smooth={true}
                        duration={500}
                        offset={-120}
                        as="a"
                        href="/#Belt Driven"
                        onClick={() => {setmenu(!menu); setShowDropdown(!showDropdown)}}
                      >
                        Belt Driven
                      </Link>
                    </li>
                    <li className="px-4 py-1 hover:bg-gray-800">
                      <Link
                        to="Oil Free"
                        smooth={true}
                        duration={500}
                        offset={-120}
                        as="a"
                        href="/#Oil Free"
                        onClick={() => {setmenu(!menu); setShowDropdown(!showDropdown)}}
                      >
                        Oil Free
                      </Link>
                    </li>
                    <li className="px-4 py-1 hover:bg-gray-800">
                      <Link
                        to="Air Blower & Pressure Washer"
                        smooth={true}
                        duration={500}
                        offset={-120}
                        as="a"
                        href="/#Air Blower & Pressure Washer"
                        onClick={() => {setmenu(!menu); setShowDropdown(!showDropdown)}}
                      >
                        Air Blower & Pressure Washer
                      </Link>
                    </li>
                    <li className="px-4 py-1 hover:bg-gray-800">
                      <Link
                        to="Spares for Compressors"
                        smooth={true}
                        duration={500}
                        offset={-120}
                        as="a"
                        href="/#Spares for Compressors"
                        onClick={() => {setmenu(!menu); setShowDropdown(!showDropdown)}}
                      >
                        Spares for Compressors
                      </Link>
                    </li>
                </ul>
              )}
            </li>
            <li className="hover:cursor-pointer hover:scale-105 hover:text-[#F38522] text-lg">
              <Link
                to="Contact Us"
                onClick={() => setmenu(!menu)}
                smooth="{true}"
                duration={500}
                offset={-70}
                activeClass="active"
                as="a"
                href="/#Contact Us"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;
