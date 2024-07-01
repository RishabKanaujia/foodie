"use Client";

import React, { useState } from "react";

const Dinner = ({ foodDataDinnerList }) => { 
  // console.log(foodDataDinnerList)
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = foodDataDinnerList.slice(startIndex, endIndex);

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (endIndex < foodDataDinnerList.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  // let menuArr = [
  //     {
  //       dishName: "dessert",
  //       discription: "ata hehehhahahlslls sfasfasf",
  //       price: "$1.05",
  //     },
  //     {
  //       dishName: "dall",
  //       discription: "daal ghddd sfasfasf",
  //       price: "$2.05",
  //     },
  //     {
  //       dishName: "thht",
  //       discription: "ahlslls sfasfasf",
  //       price: "$10.05",
  //     },
  //   ];
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-wrap justify-center items-center gap-6">
          {currentItems.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white py-8 flex flex-col justify-start items-center gap-5 rounded-[40px] h-[580px] w-[304px] relative"
              >
                <img
                  className="w-[250px] h-[250px] rounded-full object-cover shadow-xl"
                  src={item.Food_image}
                  alt=""
                />
                <h2 className="text-[30px] font-semibold text-[#311f09] ">
                  {item.dishName}
                </h2>
                <p className="text-center text-[14px] font-normal text-[#59442b] px-4">
                  {item.discription}
                </p>
                {/* <p className="">rating star</p> */}
                <div className="flex justify-around items-center w-full absolute bottom-6">
                  <p className="text-[25px] font-semibold">{item.price}</p>
                  <button className="bg-[#f54748] rounded-[8px] font-medium text-[16px] text-white h-[45px] px-6">
                    Order now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center gap-4 my-10">
          <button
            onClick={handlePrevious}
            className="bg-[#f54748] rounded-[8px] font-medium text-[16px] text-white h-[45px] px-6"
            disabled={currentPage === 0}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="bg-[#f54748] rounded-[8px] font-medium text-[16px] text-white h-[45px] px-6"
            disabled={endIndex >= foodDataDinnerList.length}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Dinner;
