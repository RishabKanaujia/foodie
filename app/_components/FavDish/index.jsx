import React from "react";

const FavDish = () => {
  return (
    <>
      <div className="bg-[#E7F7ED] my-20">
        <div className="p-10 flex justify-around">
          <img
            className="w-70% h-[440px] rounded-2xl"
            cover
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="">
            <h1 className="text-[52px] font-bold">
              Our Most
              <br />
              Popular <span className="text-[#F54748]">Dish.</span>
            </h1>
            <p className="text-[20px] font-normal text-[#5c4429] w-[420px]">
              This dish is full of flavor and nutrition! Quinoa is a complete
              protein, providing all the essential amino acids your body needs,
              and is also a good source of fiber.
            </p>
            <button className="bg-[#f54748] rounded-[16px] font-semibold text-[20px] mt-8 text-white h-[72px] px-12">Order now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavDish;
