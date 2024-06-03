import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from '/public/Logo/footerLogo.png'
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="bg-[#1b1919] w-full h-[450px]">
        <div className="flex justify-around p-10">
          <div className="flex flex-col justify-start text-[20px] font-normal gap-10">
          <Image width={100} height={100}
            className=""
            src={Logo}
          />
            <h3 className="text-[#e3e1df]">
              Viverra gravida morbi egestas <br /> facilisis tortor netus non
              duis tempor.
            </h3>
            <div className="flex gap-4">
              <div className="bg-white w-14 h-14 text-[24px] rounded-full flex justify-center items-center">
                <FaXTwitter />
              </div>
              <div className="bg-white w-14 h-14 text-[24px] rounded-full flex justify-center items-center">
                <FaInstagram />
              </div>
              <div className="bg-white w-14 h-14 text-[24px] rounded-full flex justify-center items-center">
                <FaFacebookF />
              </div>
            </div>
          </div>
          <div className="text-[#e3e1df] flex flex-col justify-start text-[20px]  font-normal gap-5">
            <h2>Home</h2>
            <h2>Menu</h2>
            <h2>Order Online</h2>
            <h2>Catering</h2>
            <h2>Reservation</h2>
          </div>
          <div className="text-[#e3e1df] flex flex-col justify-start text-[20px] font-normal gap-5">
            <h2>About Us</h2>
            <h2>Testimonial</h2>
            <h2>Event</h2>
          </div>

          <div className="text-[#e3e1df] flex flex-col justify-start text-[20px] font-normal gap-5">
            <h1>2972 Westheimer Rd. Santa Ana, Illinois 85486</h1>
            <p>abc@example.com</p>
            <p>+123 4567 8901</p>
          </div>
        </div>
        <p className="text-[#e3e1df] flex justify-center items-center text-[20px] font-normal">Copyright © 2022</p>
      </div>
    </>
  );
};

export default Footer;
