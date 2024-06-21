"use client";

import React, { useState } from "react";
import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";
import axios from "axios";

import { useRouter } from "next/navigation";
import ReservationDetails from "../ReservationDetails/page";

const Reservation = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [partySize, setPartySize] = useState("");
  const [showReservation, setShowReservation] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (setDate === "" || setTime === "" || setPartySize === "") {
      return alert("Please enter Booking details");
    } else {
      try {
        const response = await axios.post("/api/booking", {
          date: date,
          time: time,
          partySize: partySize,
        });

        if (response.status === 200) {
          alert("Booking saved successfully");
          // router.push("/ReservationDetails");
          setShowReservation(true);
        } else {
          alert("Failed to save booking");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while saving the booking");
      }
    }
    // console.log({ date, time, partySize });
  };

  const router = useRouter();
  const closePopup = () => {
    setShowReservation(false);
  };
  return (
    <>
      <div
        className={`bg-[#F9F9F9] ${
          showReservation ? "blur-sm relative bg-black bg-opacity-50" : ""
        }`}
      >
        <Navbar />
        <div className="flex justify-evenly gap-5 p-5 mb-20">
          <img
            className="w-50% h-[570px] flex items-center justify-center shadow-xl rounded-xl"
            src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="flex flex-col gap-8">
            <h1 className="text-[70px] font-bold text-[#311f09] ">
              Book a table
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700">Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Time</label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Party Size</label>
                <input
                  type="number"
                  value={partySize}
                  onChange={(e) => setPartySize(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  min="1"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#f54748] text-white p-2 rounded !mt-5 transition duration-200"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <Footer />
      </div>
      {showReservation && (
        <div className="absolute inset-0 flex items-center justify-center h-fit z-50">
          <ReservationDetails closePopup={closePopup} />
        </div>
      )}
    </>
  );
};

export default Reservation;
