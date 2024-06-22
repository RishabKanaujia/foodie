"use client";

import React from "react";
import { IoMdClose } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { FiClock } from "react-icons/fi";
import { MdOutlineMan4 } from "react-icons/md";
import axios from "axios";

const CancelReservation = ({ bookingData, closePopup }) => {
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete("/api/booking");
      const res = await axios.delete("/api/bookingUserDetails");
      if (response.data.success) {
        alert("Reservation deleted successfully!");
        // setShowConfirm(true)
        closePopup();
        // Optionally, clear the form or handle success state
      } else {
        alert("Error deleting reservation: " + response.data.error);
      }
    } catch (error) {
      console.error("Error deleting reservation:", error);
    }
  };

  return (
    <>
      <div className="inset-0 bg-opacity-50 flex items-center justify-center h-fit z-50 p-10">
        <div className="bg-[#ffff] rounded-lg shadow-lg w-[1020px] h-[710px]">
          <div className="flex flex-col items-center gap-5 justify-center">
            <div className="relative flex items-center justify-center w-full">
              <h1 className="text-[36px] font-bold text-[#311f09] my-2">
                Reservation
              </h1>
              <button className="absolute right-5 top-5" onClick={closePopup}>
                <IoMdClose size={30} />
              </button>
            </div>

            <div className="bg-[#FF8A00] flex flex-col gap-5 text-white w-full text-[20px] font-normal px-[100px] py-[30px]">
              <p className="text-[28px] font-bold ">
                Are you sure you want to cancel the reservation?
              </p>
              {/* <p>The confirmation result has been sent to your email</p> */}
              <p>Booking ID : #123456</p>
            </div>
          </div>
          <div className="flex justify-around ">
            {bookingData ? (
              <div className="flex justify-evenly items-center my-10 w-full">
                <div className="bg-[#FCF9F5] rounded-full p-8">
                  <div className="bg-[#F7EEE4] rounded-full p-6">
                    <img
                      className="rounded-full w-[180px] h-[180px]"
                      src="https://images.unsplash.com/photo-1607062088573-f6b259c6ea0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </div>
                </div>
                <div className=" p-5 rounded-md">
                  <h1 className=" text-[22px] font-semibold mb-2">
                    Reservation detail
                  </h1>
                  <div className="flex justify-between items-center my-4 text-[#5c4529] text-[20px] font-normal ">
                    <p>
                      <SlCalender size={25} />
                    </p>
                    <p>{bookingData.date}</p>
                  </div>
                  <div className="flex justify-between items-center my-4 text-[#5c4529] text-[20px] font-normal">
                    <p>
                      <FiClock size={25} />
                    </p>
                    <p>{bookingData.time}</p>
                  </div>
                  <div className="flex justify-between items-center text-[#5c4529] text-[20px] font-normal">
                    <p>
                      <MdOutlineMan4 size={25} />
                    </p>
                    <p>{bookingData.partySize} people (Standard seating)</p>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <button
                    className="bg-[#F54748] flex justify-center items-center gap-3 rounded-[16px] font-semibold text-[20px] text-white h-[60px] px-8"
                    onClick={handleClick}
                  >
                    Cancel{" "}
                    <span>
                      <IoMdClose size={30} />
                    </span>
                  </button>
                  <button
                    className="bg-[#F9F9F9] rounded-[16px] font-semibold text-[20px] text-black h-[60px] px-8"
                    onClick={closePopup}
                  >
                    Go Back
                  </button>
                </div>
              </div>
            ) : (
              <p>Loading reservation details...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CancelReservation;
