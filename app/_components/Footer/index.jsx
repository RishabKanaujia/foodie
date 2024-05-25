import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="bg-[#1b1919] w-full h-[450px]">
        <div className="flex justify-around p-10">
          <div className="flex flex-col gap-5">
            <img src="" alt="" />
            <h3 className="text-white">
              Viverra gravida morbi egestas <br /> facilisis tortor netus non
              duis tempor.
            </h3>
            <div className="flex gap-4">
              <div className="bg-white w-10 h-10 rounded-full flex justify-center items-center">
                <FaXTwitter />
              </div>
              <div className="bg-white w-10 h-10 rounded-full flex justify-center items-center">
                <FaInstagram />
              </div>
              <div className="bg-white w-10 h-10 rounded-full flex justify-center items-center">
                <FaFacebookF />
              </div>
            </div>
          </div>
          <div className="text-white">
            <h2>home</h2>
          </div>
          <div className="text-white">
            <h2>home</h2>
          </div>

          <div className="text-white">
            <h1>2972 Westheimer Rd. Santa Ana, Illinois 85486</h1>
            <p>abc@example.com</p>
            <p>+123 4567 8901</p>
          </div>
        </div>
        <p className="text-white flex justify-center items-center">Copyright © 2022</p>
      </div>
    </>
  );
};

export default Footer;
