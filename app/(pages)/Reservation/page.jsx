"use client";

import React, { useState } from "react";
import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";
import axios from "axios";

import { useRouter } from "next/navigation";

const Reservation = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [partySize, setPartySize] = useState("");

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
          router.push("/ReservationDetails");
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

  // const data = generateTimeSlots();
  const router = useRouter();

  // const handleSubmit = async () => {
  //   if (
  //     selectedDate === "" ||
  //     selectedTime === "" ||
  //     selectedPartySize === ""
  //   ) {
  //     return alert("Please enter Booking details");
  //   } else {
  //     // event.preventDefault();
  //     try {
  //       const response = await axios.post("/api/booking", {
  //         date: selectedDate,
  //         time: selectedTime,
  //         partySize: selectedPartySize,
  //       });

  //       if (response.status === 200) {
  //         alert("Booking saved successfully");
  //         router.push("/pages/ReservationDetails");
  //       } else {
  //         alert("Failed to save booking");
  //       }
  //     } catch (error) {
  //       console.error("Error:", error);
  //       alert("An error occurred while saving the booking");
  //     }
  //   }
  //   //  console.log(name,price,description,imageUrl)
  // };

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
            {/* <DatePickerDropdown
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

            <Dropdown
              label="Party size"
              options={generateArray()}
              value={selectedPartySize}
              onChange={setSelectedPartySize}
            /> */}
            {/* <button
              onClick={handleSubmit}
              className="bg-[#f54748] rounded-[20px] h-[100px] font-semibold text-[25px] text-white  px-12"
            >
              Book now
            </button> */}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Reservation;
