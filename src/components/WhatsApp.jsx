import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppIcon = () => {
  const whatsappURL = "https://wa.me/+919004583244";

  return (
    <div className="fixed bottom-10 right-5 z-50">
      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat with us on WhatsApp"
        className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600"
      >
        {/* <i className="fab fa-whatsapp fa-2x"></i> */}
        <FaWhatsapp size={30} className='hover:cursor-pointer hover:scale-105 duration-150' />
      </a>
    </div>
  );
};

export default WhatsAppIcon;
