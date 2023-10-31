import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div id="works" className={` bg-gradient-to-r from-green-200 to-blue-200 h-20 flex flex-col gap-8 items-center justify-between p-10 sm:p-7`}>
  <div className="container mx-auto pt-10 sm:pt-7">
    <div className="flex flex-col-reverse sm:flex-col-reverse">
      <div className="left mt-4 md:mt-0 flex-1 flex flex-col items-center gap-8 w-full sm:w-1/2 md:w-full md:py-2 sm:py-0">
        <div className="info w-fit flex flex-col items-start justify-between gap-8 sm:gap-7">
        
        {/* <h2 
        data-aos="zoom-out"
         className=" font-bold text-5xl sm:text-3xl">Let's Talk</h2>
        <div className=" flex items-center justify-center gap-8 sm:gap-5">
          <a 
          data-aos="fade-up" data-aos-duration="1000"

            href=""
            className="box font-medium text-white   flex items-center justify-center flex-col"
          >
            <FaTelegramPlane className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Telegram</p>
          </a>
          <a 
          data-aos="fade-up" data-aos-duration="1200"

            href=""
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <IoLogoWhatsapp className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>WhatsApp</p>
          </a>
          <a 
          data-aos="fade-up" data-aos-duration="1400"

            href=""
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <RiInstagramFill className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Instagram</p>
          </a>
        </div>
        <div className="sm:text-[12px]">
          | Copyright &copy; <span>2023 Dev AlphaSpace </span> All rights reserved
          <a href="#"></a> |
        </div> */}
      </div>
    </div>
    </div>
    </div>
    </div>

  );
};

export default Footer;
