import React from "react";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";

const Review = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center my-20">
        <h1 className="text-[#311f09] text-[52px] font-bold ">
          What Our Customers Say
        </h1>
        <div className="bg-white relative flex flex-col gap-20 items-center rounded-[16px] w-[700px] h-[350px] my-10 p-10">
          <p className="text-[20px] font-normal text-[#5c4529] text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's er since the 1500s,
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen book.
          </p>
          <div>
            <img src="" alt="" />
            <p>name</p>
            <p>job</p>
          </div>
          <div className="flex absolute right-[95%] top-[45%]">
            <div className="bg-white w-16 h-16 rounded-full shadow-xl flex justify-center items-center"><FaArrowLeftLong size={25} className="text-[#A0978C] cursor-pointer hover:text-[#f54748]" /></div>
          </div>
          <div className="flex absolute left-[95%] top-[45%]">
            <div className="bg-white w-16 h-16 rounded-full shadow-xl flex justify-center items-center"><FaArrowRight size={25} className="text-[#A0978C] cursor-pointer hover:text-[#f54748]" /></div>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
