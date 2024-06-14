import React from "react";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { FiClock } from "react-icons/fi";
import { MdOutlineMan4 } from "react-icons/md";
import { getBookingData } from "@/app/api/booking/route";

const ReservationDetails = async () => {
  const bookingDataList = await getBookingData();
  // console.log(bookingDataList.date)

  return (
    <>
    <div className="inset-0 bg-black bg-opacity-50 flex items-center justify-center h-fit z-50 p-10" >
    <div className="bg-[#FFFFFF] rounded-lg shadow-lg ">
        <div className="flex flex-col items-center gap-5 justify-center">
          <div className="relative flex items-center justify-center w-full">
            <h1 className="text-[36px] font-bold text-[#311f09] my-2">
              Reservation
            </h1>
            <Link href="/pages/Reservation">
             <button className="absolute right-5 top-5">
              <IoMdClose size={30} />
            </button></Link>
          </div>

          <p className="bg-[#8ae9ff66] text-[20px] font-normal px-[250px] py-[20px] rounded-[20px]">
            Due to limited availability, we can hold this table for you for
            <span className="font-semibold px-2">5:00 minutes</span>
          </p>
        </div>
        <div className="flex justify-around  my-10">
          <div className="p-5 w-[500px] flex flex-col gap-5">
            <h1 className="text-[25px] font-semibold">Data order</h1>
            <input
              className="w-full border border-[#a0978c] rounded-md p-2"
              type="text"
              placeholder="First name"
            />
            <input
              className="w-full border border-[#a0978c] rounded-md p-2"
              type="text"
              placeholder="Last name"
            />
            <input
              className="w-full border border-[#a0978c] rounded-md p-2"
              type="text"
              placeholder="Phone number"
            />
            <input
              className="w-full border border-[#a0978c] rounded-md p-2"
              type="text"
              placeholder="Email address"
            />
            <select
              placeholder="Select an occasion"
              className="w-full border border-[#a0978c] rounded-md p-2"
            >
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Business Meeting</option>
              <option>Casual Dining</option>
            </select>
            {/* <input
              className="w-full border border-[#a0978c] rounded-md p-2"
              type="text"
              placeholder="Select an occasion"
            /> */}
            <textarea
              className="w-full border border-[#a0978c] rounded-md p-2"
              type="text"
              placeholder="Add a special request"
            />
          </div>
          <div>
            <div className="bg-[#d0ccc719] p-5 w-[500px] rounded-md">
              <h1 className=" text-[25px] font-semibold mb-5">
                Reservation detail
              </h1>
              <div className="flex justify-between items-center my-5 text-[#5c4529] text-[20px] font-normal ">
                <p>
                  <SlCalender size={25} />
                </p>
                <p>{bookingDataList.date}</p>
              </div>
              <div className="flex justify-between items-center my-5 text-[#5c4529] text-[20px] font-normal">
                <p>
                  <FiClock size={25} />
                </p>
                <p>{bookingDataList.time}</p>
              </div>
              <div className="flex justify-between items-center text-[#5c4529] text-[20px] font-normal">
                <p>
                  <MdOutlineMan4 size={25} />
                </p>
                <p>{bookingDataList.partySize} people (Standar seating)</p>
              </div>
            </div>
            <div className="p-5 w-[500px] my-5 rounded-md">
              <h1 className=" text-[25px] font-semibold mb-5">
                Restaurant informations
              </h1>
              <div className="flex justify-between items-center text-[#5c4529] text-[20px] font-normal">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </>
  );
};

export default ReservationDetails;
