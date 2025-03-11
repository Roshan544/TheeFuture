import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <>
      <div name="Footer">
        <footer className="bg-gray-950 text-white py-10 md:px-25 px-10">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 md:gap-10 gap-5">
            <div className="w-70 xl:w-60 space-y-3">
              <h2 className="text-sm md:text-[20px] font-semibold text-[#F38522] mb-3">
                Contact Us
              </h2>
              <p className="text-sm md:text-[16px]">
                📍 M F ENTERPRISES 162/3 INDIAN CORPORATION, MANKOLI, BHIWANDI 421302
              </p>
              <p className="text-sm  md:text-[16px]">
                📍 61/63 , KERAWALA BUILDING, 1ST FLOOR, OFFICE NO.2, MANGLADAS ROAD, LOHAR CHAWL, MUMBAI-400002.
              </p>
              <p className="text-sm md:text-[16px]">✉️ mfent53@gmail.com</p>
              <p className="text-sm md:text-[16px]">📞 +91 9004583244</p>
              <p className="text-sm md:text-[16px]">📑 27ABKFM9528L1ZI</p>
            </div>

            <div className="w-70 xl:w-60 space-y-3">
              <h2 className="text-sm  md:text-[20px] font-semibold mb-3 bg-gradient-to-r from-orange-400 to-yellow-600 bg-clip-text text-transparent">
                Our Network
              </h2>
              <ul className="text-sm md:text-[16px] space-y-1">
                <li>📍 MAHARASHTRA </li>
                <li>📍 GOA</li>
                <li>📍 MADHYAPRADESH</li>
                <li>📍 CHATTISGARH</li>
                <li>📍 ODISSA</li>
                <li>📍 GUJRAT</li>
                <li>📍 ANDHRA PRADESH</li>
                <li>📍 KARNATAKA</li>
                <li>📍 KERALA</li>
                <li>📍 TAMILNADU</li>
                <li>📍 WEST BENGAL</li>
              </ul>
            </div>

            <div className="w-30">
              <h2 className="text-sm  md:text-[20px] font-semibold text-[#F38522] mb-3">
                Quick Links
              </h2>
              <ul className="text-sm md:text-[16px] space-y-3">
                <li className="hover:cursor-pointer">
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
                <li className="hover:cursor-pointer">
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
                <li className="hover:cursor-pointer">
                  <Link
                    to="Products"
                    smooth="{true}"
                    duration={500}
                    offset={-70}
                    activeClass="active"
                    as="a"
                    href="/#Product"
                  >
                    Products
                  </Link>
                </li>
                <li className="hover:cursor-pointer">
                  <Link
                    to="Contact Us"
                    smooth="{true}"
                    duration={500}
                    offset={-10}
                    activeClass="active"
                    as="a"
                    href="/#Contact"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="hover:cursor-pointer">
                  <Link
                    to="Footer"
                    smooth="{true}"
                    duration={500}
                    offset={-70}
                    activeClass="active"
                    as="a"
                    href="/#Footer"
                  >
                    Footer
                  </Link>
                </li>
              </ul>
            </div>

            

            <div className="w-60">
              <h2 className="text-sm  md:text-[20px] font-semibold text-[#F38522] mb-3">
                Find Us
              </h2>
              <iframe
                className="w-full h-40 rounded-lg"
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1188.1818912262026!2d72.8320232!3d18.9468226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf843720788d%3A0x8f0dbdeded953ab5!2sM.%20F.%20ENTERPRISE!5e0!3m2!1sen!2sin!4v1709812345678"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="w-50">
              <h2 className="text-sm  md:text-[20px] font-semibold text-[#F38522] mb-3">
                Follow Us
              </h2>
              <div className="flex space-x-5">
                {/* <a
                  href="https://www.instagram.com/mf_enterprises6?igsh=MXA0d3VmNDlzajIxaw==" alt=""
                  target="_blank"
                  className="text-3xl"
                >
                  <FaInstagramSquare />
                </a>
                <a href="https://www.facebook.com/people/Mfenterprises6/61573739322121/"  className="text-3xl">
                  <FaFacebook />
                </a>
                <a href="#"  className="text-3xl">
                  <FaGithub />
                </a>
                <a href="#"  className="text-3xl">
                  <FaLinkedin />
                </a> */}

                <a
                  href="https://www.instagram.com/mf_enterprises6?igsh=MXA0d3VmNDlzajIxaw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl"
                  title="Follow us on Instagram"
                  aria-label="Instagram"
                >
                  <FaInstagramSquare />
                </a>
                <a
                  href="https://www.facebook.com/people/Mfenterprises6/61573739322121/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl"
                  title="Follow us on Facebook"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl"
                  title="Visit our GitHub"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl"
                  title="Connect with us on LinkedIn"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          <div className="justify-center items-center flex flex-col opacity-100">
            <h2 className="text-[50px] md:text-[150px] xl:text-[187px] italic text-[#F38522]">
              The eFuture
            </h2>
          </div>
          <div className="text-center text-gray-500">
            &copy; {new Date().getFullYear()} The eFuture. All Rights Reserved.
          </div>
        </footer>
      </div>
    </>
  );
}
