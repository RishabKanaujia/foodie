"use Client";

import React, { useState } from "react";

const AllCategory = ({ foodDataList }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = foodDataList.slice(startIndex, endIndex);

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (endIndex < foodDataList.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-wrap justify-center items-center gap-6">
          {currentItems.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white py-8 flex flex-col justify-start items-center gap-5 rounded-[40px] h-[580px] w-[304px]"
              >
                <img
                  // width={250} height={250}
                  className="w-[250px] h-[250px] rounded-full object-cover shadow-xl"
                  src={item.Food_image}
                  alt=""
                />
                <h2 className="text-[30px] font-semibold text-[#311f09] ">
                  {item.dishName}
                </h2>
                <p className="text-center text-[14px] font-normal text-[#59442b]">
                  {item.discription}
                </p>
                <p className="">rating star</p>
                <div className="flex justify-around items-center w-full">
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
            disabled={endIndex >= foodDataList.length}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default AllCategory;