import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const CallIcon = () => {
  const phoneNumber = "+919004583244"; // Replace with your number

  return (
    <div className="fixed bottom-25 right-5 z-50">
      <a
        href={`tel:${phoneNumber}`}
        title="Call us"
        className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600"
      >
        <FaPhoneAlt size={20} className="hover:cursor-pointer hover:scale-105 duration-150" />
      </a>
    </div>
  );
};

export default CallIcon;
