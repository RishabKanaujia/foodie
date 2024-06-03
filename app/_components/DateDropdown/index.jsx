import React, { useState } from "react";

const DatePickerDropdown = ({label,options,onChange,value}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(label);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    console.log(selectedDate)
    setIsOpen(false);
  };

  // Generate an array of dates for one month
  // const generateDates = () => {
  //   const dates = [];
  //   const today = new Date();
  //   for (let i = 0; i < 30; i++) {
  //     const date = new Date(today);
  //     date.setDate(today.getDate() + i);
  //     dates.push(date.toISOString().split("T")[0]);
  //   }
  //   return dates;
  // };

  const data = options;

  return (
    // <div className="relative w-full">
    //   <button
    //     type="button"
    //     onClick={toggleDropdown}
    //     className="border border-gray-300 text-[#a0978c] text-[20px] rounded-[20px] flex justify-between items-center w-full p-6"
    //   >
    //     {selectedDate}
    //     <svg
    //       className="w-5 h-5 ml-2 -mr-1 text-gray-400 inline-block float-right"
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 20 20"
    //       fill="currentColor"
    //     >
    //       <path
    //         fillRule="evenodd"
    //         d="M10 12a1 1 0 01-.707-.293l-5-5a1 1 0 011.414-1.414L10 9.586l4.293-4.293a1 1 0 111.414 1.414l-5 5A1 1 0 0110 12z"
    //         clipRule="evenodd"
    //       />
    //     </svg>
    //   </button>
    //   {isOpen && (
    //     <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
    //       {dates.map((date, index) => (
    //         <li
    //           key={index}
    //           onClick={() => handleDateClick(date)}
    //           className="cursor-pointer px-4 py-2 hover:bg-gray-200"
    //         >
    //           {date}
    //         </li>
    //       ))}
    //     </ul>
    //   )}
    // </div>
    <div className="flex w-full relative">
    {/* <label className="text-[20px] font-semibold text-[#311f09]">time</label> */}
    <select
      className="bg-white appearance-none border border-[#c4c4c4] flex justify-between text-[#a0978c] text-[20px] rounded-[20px] w-full p-8"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="" disabled>{label}</option>
      {data.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5H7z"/></svg>
      </div>
  </div>
  );
};

export default DatePickerDropdown;
