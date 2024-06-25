'use client';

import React, { useState} from 'react';
import Navbar from '@/app/_components/Navbar'
import Footer from '@/app/_components/Footer';
import axios from "axios";

const Contact = () => {


  const [formData, setFormData] = useState({
    Name: '',
    email: '',
    Job_title: '',
    review: '',
    Gender: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/contactUs', formData);
      if (response.data.success) {
        alert('Review submitted successfully!');
        setShowConfirm(true)
        // Optionally, clear the form or handle success state
      } else {
        alert('Error submitting Review: ' + response.data.error);
      }
    } catch (error) {
      console.error('Error submitting Review:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value)
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
    <Navbar />
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-[80px] font-bold text-[#311f09]'>Contact us</h1>
      <p className='text-[25px] font-normal text-center text-[#5c4529]'>We love hearing from our customers. Feel free to share your experience or ask <br /> any questions you may have.</p>
    </div>
    <div className='w-full flex my-10 mb-20 p-10'>
      <img className='w-[400px] h-[510px] mx-20 shadow-lg rounded-lg' src="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />


      <div className="w-[500px] flex flex-col gap-5">
            <form className="space-y-6" onSubmit={handleSubmit}>
            <input
            name="Name"
            className="w-full border border-[#a0978c] rounded-md p-3"
            type="text"
            placeholder="Name"
            value={formData.Name}
            onChange={handleChange}
            required
            />
            <input
               name="email"
               className="w-full border border-[#a0978c] rounded-md p-3"
               type="email"
               placeholder="Email address"
               value={formData.email}
               onChange={handleChange}
               required
            />
            <select
              name="Job_title"
              className="w-full border border-[#a0978c] rounded-md p-3"
              value={formData.Job_title}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select your Job title</option>
              <option>Software Engineer</option>
              <option>Business Analyst</option>
              <option>Operations Manager</option>
              <option>Other</option>
            </select>
            <select
              name="Gender"
              className="w-full border border-[#a0978c] rounded-md p-3"
              value={formData.Gender}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select your Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <textarea
               name="review"
               className="w-full h-[110px] border border-[#a0978c] rounded-md p-3"
               placeholder="Add your Review"
               value={formData.review}
               onChange={handleChange}
            />
            <button
                type="submit"
                className="w-full bg-[#f54748] text-[25px] text-white p-6 font-semibold rounded-xl transition duration-200"
              >
                Submit
              </button>
            </form>
          </div>
    </div>
    <Footer />
    </>
  )
}

export default Contact