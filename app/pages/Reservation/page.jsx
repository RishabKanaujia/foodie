"use client";

import React, { useState } from "react";
import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";
import Dropdown from "@/app/_components/Dropdown/index";
import DatePickerDropdown from "@/app/_components/DateDropdown";
import axios from "axios";

const Reservation = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedPartySize, setSelectedPartySize] = useState("");

  const data = generateTimeSlots();

  const handleSubmit = async () => {
    // event.preventDefault();
    try {
      const response = await axios.post("/api/booking", {
        date: selectedDate,
        time: selectedTime,
        partySize: selectedPartySize,
      });

      if (response.status === 200) {
        alert("Booking saved successfully");
      } else {
        alert("Failed to save booking");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while saving the booking");
    }

    //  console.log(name,price,description,imageUrl)
  };

  // const handleSubmit = async () => {
  //   const bookingDetails = {
  //     date: selectedDate,
  //     time: selectedOption,
  //     partySize: selectedPartySize,
  //   };

  //   try {
  //     const response = await fetch("/api/booking", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(bookingDetails),
  //     });

  //     if (response.ok) {
  //       alert("Booking saved successfully");
  //     } else {
  //       alert("Failed to save booking");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     alert("An error occurred while saving the booking");
  //   }
  // };

  function generateTimeSlots() {
    const startHour = 8;
    const endHour = 21;
    const interval = 30;
    const times = [];

    for (let hour = startHour; hour <= endHour; hour++) {
      for (let minutes = 0; minutes < 60; minutes += interval) {
        let formattedHour = hour % 12 === 0 ? 12 : hour % 12;
        let period = hour < 12 ? "AM" : "PM";
        let formattedMinutes = minutes === 0 ? "00" : minutes;
        times.push(`${formattedHour}:${formattedMinutes} ${period}`);
      }
    }

    return times;
  }

  function generateArray() {
    const array = [];
    for (let i = 1; i <= 10; i++) {
      array.push(i);
    }
    return array;
  }
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date.toISOString().split("T")[0]);
    }
    return dates;
  };

  return (
    <>
      <div className="bg-[#F9F9F9]">
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
            <DatePickerDropdown
              label="Date"
              value={selectedDate}
              onChange={setSelectedDate}
              options={generateDates()}
            />
            <Dropdown
              label="Time"
              options={generateTimeSlots()}
              value={selectedTime}
              onChange={setSelectedTime}
            />
            {/* <div className="flex flex-col">
      <label className="text-[20px] font-semibold text-[#311f09]">time</label>
      <select
        className="border border-gray-300 text-[#a0978c] text-[20px] rounded-[20px] p-2.5"
        value={selectedTime}
        onChange={(e) => setSelectedTime(e.target.value)}
      >
        <option value="" disabled>Select</option>
        {data.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div> */}
            <Dropdown
              label="Party size"
              options={generateArray()}
              value={selectedPartySize}
              onChange={setSelectedPartySize}
            />
            <button
              onClick={handleSubmit}
              className="bg-[#f54748] rounded-[20px] h-[100px] font-semibold text-[25px] text-white  px-12"
            >
              Book now
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Reservation;
