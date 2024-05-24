import React from "react";

const HomeContent = () => {
  return (
    <>
      <div className="mx-40 flex">
        <div>
        <h1 className="text-[70px] font-bold">
          Best <br /> Restaurant <br />
          In <span className="text-[#F54748]">Town.</span>
        </h1>
        <p className="text-[20px] font-normal text-[#5c4429]">
          We provide best food in town, we provide home delivery and dine in
          services.
        </p>
        <div className="py-5 flex gap-5">
          <button className="bg-[#f54748] rounded-[16px] font-semibold text-[20px] text-white h-[72px] px-12">Order now</button>
          <button className="bg-[#f5474819] rounded-[16px] font-semibold text-[20px] text-[#f54748] h-[72px] px-12">Reservation</button>
        </div>
        </div>
     
        

        <img
          className="w-45% h-[450px]"
          src="https://pngimg.com/uploads/pasta/pasta_PNG67.png"
          alt=""
        />
      </div>
    </>
  );
};

export default HomeContent;
