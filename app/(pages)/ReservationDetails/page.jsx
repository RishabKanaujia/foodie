'use client';

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { FiClock } from "react-icons/fi";
import { MdOutlineMan4 } from "react-icons/md";
import axios from "axios";

const ReservationDetails = () => {

  const [bookingData, setBookingData] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    occasion: '',
    specialRequest: ''
  });

  useEffect(() => {
    async function fetchBookingData() {
      try {
        const response = await axios.get('/api/booking');
        console.log(response.data.data)
        if (response.data.success) {
          setBookingData(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching booking data:', error);
      }
    }

    fetchBookingData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/bookingUserDetails', formData);
      if (response.data.success) {
        alert('Reservation submitted successfully!');
        // Optionally, clear the form or handle success state
      } else {
        alert('Error submitting reservation: ' + response.data.error);
      }
    } catch (error) {
      console.error('Error submitting reservation:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value)
    setFormData({ ...formData, [name]: value });
  };


  return (
    <>
    <div className="inset-0 bg-black bg-opacity-50 flex items-center justify-center h-fit z-50 p-10" >
    <div className="bg-[#FFFFFF] rounded-lg shadow-lg ">
        <div className="flex flex-col items-center gap-5 justify-center">
          <div className="relative flex items-center justify-center w-full">
            <h1 className="text-[36px] font-bold text-[#311f09] my-2">
              Reservation
            </h1>
            <Link href="/Reservation">
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
            <form className="space-y-4" onSubmit={handleSubmit}>
            <input
            name="firstName"
            className="w-full border border-[#a0978c] rounded-md p-2"
            type="text"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            required
            />
            <input
                name="lastName"
                className="w-full border border-[#a0978c] rounded-md p-2"
                type="text"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                required
            />
            <input
            name="phoneNumber"
            className="w-full border border-[#a0978c] rounded-md p-2"
            type="number"
            placeholder="Phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            />
            <input
               name="email"
               className="w-full border border-[#a0978c] rounded-md p-2"
               type="email"
               placeholder="Email address"
               value={formData.email}
               onChange={handleChange}
               required
            />
            <select
              name="occasion"
              className="w-full border border-[#a0978c] rounded-md p-2"
              value={formData.occasion}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select an occasion</option>
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Business Meeting</option>
              <option>Casual Dining</option>
            </select>
            <textarea
               name="specialRequest"
               className="w-full border border-[#a0978c] rounded-md p-2"
               placeholder="Add a special request"
               value={formData.specialRequest}
               onChange={handleChange}
            />
            <button
                type="submit"
                className="w-full bg-[#f54748] text-white p-2 rounded transition duration-200"
              >
                Confirm Reservation
              </button>
            </form>
          </div>
          {bookingData ? (
            <div>
              <div className="bg-[#d0ccc719] p-5 w-[500px] rounded-md">
                <h1 className=" text-[25px] font-semibold mb-5">
                  Reservation detail
                </h1>
                <div className="flex justify-between items-center my-5 text-[#5c4529] text-[20px] font-normal ">
                  <p>
                    <SlCalender size={25} />
                  </p>
                  <p>{bookingData.date}</p>
                </div>
                <div className="flex justify-between items-center my-5 text-[#5c4529] text-[20px] font-normal">
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
              <div className="p-5 w-[500px] my-5 rounded-md">
                <h1 className=" text-[25px] font-semibold mb-5">
                  Restaurant information
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
          ) : (
            <p>Loading reservation details...</p>
          )}
        </div>
      </div>
    </div>
      
    </>
  );
};

export default ReservationDetails;
