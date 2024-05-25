import React from "react";

const AllCategory = ({ foodDataList }) => {
  let menuArr = [
    {
      dishName: "All Category",
      discription: "ata hehehhahahlslls sfasfasf",
      price: "$1.05",
    },
    {
      dishName: "dall",
      discription: "daal ghddd sfasfasf",
      price: "$2.05",
    },
    {
      dishName: "thht",
      discription: "ahlslls sfasfasf",
      price: "$10.05",
    },
  ];
  return (
    <>
      {foodDataList.map((item, index) => {
        return (
          <div
            key={index}
            className="bg-white py-8 flex flex-col justify-start items-center gap-5 rounded-[40px] h-[580px] w-[304px]"
          >
            <img
              // width={250} height={250}
              className="w-[250px] h-[250px] rounded-full object-cover"
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
    </>
  );
};

export default AllCategory;
