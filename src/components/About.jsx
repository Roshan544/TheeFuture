import React from 'react'
import { useState, useEffect } from "react";


const About = () => {
  return (
    <div name='About'>
      <section className="py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
        <p className="text-sm md:text-lg leading-relaxed">
          Founded in 2016, <span className="font-semibold">MF Enterprises</span> is a trusted supplier of
          high-quality power tools, spares, and accessories. We are proud to be authorized distributors
          for leading brands such as <span className="font-semibold">Doncheng, Yuri, and Xtra Power Tools</span>,
          ensuring top-tier products for our customers.
        </p>
        <p className="text-sm md:text-lg leading-relaxed mt-4">
          In addition, we offer <span className="font-semibold">The E Future Air Compressors</span>, known for their
          excellence, precision, and unmatched performance in their segment. With a commitment to
          quality and customer satisfaction, MF Enterprises continues to be a reliable name in the industry.
        </p>
        {/* Company Overview */}
        {/* <h3 className="text-2xl font-bold text-gray-800 mt-10">Company Overview</h3>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          MF Enterprises has built a strong reputation in the power tools industry, delivering top-notch products
          and services to a diverse clientele. Our dedication to quality and innovation has made us a preferred choice
          for professionals and businesses alike.
        </p> */}

        {/* Vision & Mission */}
        {/* <h3 className="text-2xl font-bold text-gray-800 mt-10">Vision & Mission</h3>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Our vision is to be the leading supplier of power tools and accessories, recognized for excellence and reliability.
          Our mission is to provide high-performance products that enhance efficiency, safety, and productivity for our customers.
        </p> */}

        {/* Why Choose TheeFuture? */}
        {/* <h3 className="text-2xl font-bold text-gray-800 mt-10">Why Choose TheeFuture?</h3>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          - Authorized distributors of top power tool brands<br />
          - Commitment to quality and customer satisfaction<br />
          - A wide range of premium products and accessories<br />
          - Competitive pricing and reliable customer support
        </p> */}

        {/* Our Experience & Achievements */}
        <h3 className="text-2xl font-bold mt-10">Our Experience & Achievements</h3>
        <p className="text-sm md:text-lg leading-relaxed mt-4">
          With years of industry experience, MF Enterprises has successfully served thousands of clients, supplying
          innovative and reliable tools. Our track record includes partnerships with renowned brands and continuous
          growth in the industry.
        </p>

        <div className="mt-12 grid grid-cols-3 md:grid-cols-3 gap-6 text-center">
          <div className="bg-[#F38522] p-6 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-white">500+</h3>
            <p className="text-white">Total Clients</p>
          </div>
          <div className="bg-[#F38522] p-6 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-white">450+</h3>
            <p className="text-white">Happy Clients</p>
          </div>
          {/* <div className="bg-[#F38522] p-6 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-white">1000+</h3>
            <p className="text-white">Projects Completed</p>
          </div> */}
          <div className="bg-[#F38522] p-6 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-white">20+</h3>
            <p className="text-white justify-center items-center flex">Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default About
