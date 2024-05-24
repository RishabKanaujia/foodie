import React from "react";
import Image from "next/image";
import chef1 from '/public/chefsPic/1.png'
import chef2 from '/public/chefsPic/2.png'
import chef3 from '/public/chefsPic/3.png'

const ChefPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-[#311f09] text-[52px] font-bold ">
          Our Popular Chef
        </h1>
      </div>
      <div className="flex justify-center px-20 gap-6 my-10">
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="bg-[#CCCBCD]  flex flex-col justify-start items-center gap-5 rounded-[40px] h-[500px] w-[304px]">
          <Image
            className="object-contain h-[480px] mt-[20px]"
            src={chef2}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center gap-5 items-center ">
        <h2 className="text-[40px] font-bold text-[#311f09] ">Rishab</h2>
        <p className="text-[25px] font-normal text-[#a08d76]">Head chef</p>
      </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="bg-[#CCCBCD]  flex flex-col justify-start items-center gap-5 rounded-[40px] h-[500px] w-[304px]">
          <Image
            className="object-contain h-[480px] mt-[20px]"
            src={chef1}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center gap-5 items-center ">
        <h2 className="text-[40px] font-bold text-[#311f09] ">Rishi</h2>
        <p className="text-[25px] font-normal text-[#a08d76]">Chef</p>
      </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="bg-[#CCCBCD]  flex flex-col justify-start items-center gap-5 rounded-[40px] h-[500px] w-[304px]">
          <Image
            className="object-contain h-[480px] mt-[20px]"
            src={chef3}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center gap-5 items-center">
        <h2 className="text-[40px] font-bold text-[#311f09]">Crimson</h2>
        <p className="text-[25px] font-normal text-[#a08d76]">Chef</p>
      </div>
      </div>
      </div>
  
   
      <div className="flex  justify-center my-5">
      <button className="bg-[#f54748] rounded-[8px] font-bold text-[20px] text-white h-[70px] px-20">
        View all
      </button>
      </div>
    
    </>
  );
};

export default ChefPage;
