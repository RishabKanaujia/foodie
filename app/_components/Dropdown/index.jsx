import React, { useState } from "react";

const Dropdown = ({label,options,onChange,value}) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState(label);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const data = options;

  return (
    // <div className="relative w-full">
    //   <button
    //     type="button"
    //     onClick={toggleDropdown}
    //     className="bg-white border flex justify-between border-[#c4c4c4] text-[#a0978c] text-[20px] rounded-[20px] w-full p-8"
    //   >
    //     {selectedOption}
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
    //     <ul className="absolute z-10 mt-1 w-full h-[200px] overflow-hidden overflow-y-auto bg-white border border-gray-300 rounded-lg shadow-lg">
    //       {data.map((option, index) => (
    //         <li
    //           key={index}
    //           onClick={() => handleOptionClick(option)}
    //           className="cursor-pointer px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
    //         >
    //           {option}
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

export default Dropdown;
