"use client"

import React, { useState }  from "react";
import Dinner from "./Dinner";
import Lunch from "./Lunch";
import Dessert from "./Dessert";
import AllCategory from "./AllCategory";

const Menu = () => {

  const [selectCategory, setSelectCategory] = useState("all");


  const handleClick = (category)=>{
    setSelectCategory(category)
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-[#311f09] text-[52px] font-bold ">
          Our Popular Menu
        </h1>
        <div className="flex gap-24 my-10">
          <button className="hover:bg-[#f54748] bg-[#F5F5F5] text-[#311f09] rounded-[16px] font-normal text-[20px] hover:text-white h-[72px] px-12" onClick={()=>{handleClick("all")}}>
            All catagory
          </button>
          <button className="hover:bg-[#f54748] bg-[#F5F5F5] text-[#311f09] rounded-[16px] font-normal text-[20px] hover:text-white h-[72px] px-12" onClick={()=>{handleClick("dinner")}}>
            Dinner
          </button>
          <button className="hover:bg-[#f54748] bg-[#F5F5F5] text-[#311f09] rounded-[16px] font-normal text-[20px] hover:text-white h-[72px] px-12" onClick={()=>{handleClick("lunch")}}>
            Lunch
          </button>
          <button className="hover:bg-[#f54748] bg-[#F5F5F5] text-[#311f09] rounded-[16px] font-normal text-[20px] hover:text-white h-[72px] px-12" onClick={()=>{handleClick("dessert")}}>
            Dessert
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-6 flex-wrap px-20">
       {selectCategory === "all" && <AllCategory/>}
       {selectCategory === "dinner" && <Dinner/>}
       {selectCategory === "lunch" && <Lunch/>}
       {selectCategory === "dessert" && <Dessert/>}
      </div>
    </>
  );
};

export default Menu;
