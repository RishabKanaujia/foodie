"use client";

import React, { useState } from "react";
import axios from "axios";

const Admin = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSaveProduct = async (event) => {
    event.preventDefault();
    await axios.post("/api/foodEntry", {
      dishName: name,
      price: price,
      discription: description,
      Food_image: imageUrl,
      category: selectedCategory
    });
    //  console.log(name,price,description,imageUrl)
  };
  return (
    <>
      <div className="w-[100%] max-w-screen flex fixed justify-center z-30 items-center top-0 h-[100vh] bg-[#05050577]">
        <div className="flex gap-7 justify-center items-center flex-col bg-white max-w-[720px] py-6 w-full h-fit rounded-[30px]">
          <div className="flex justify-between px-8 w-full">
            <h1 className="text-black text-[1.5em]">Add Food</h1>
            <button className="text-black">X</button>
          </div>

          <hr className="border w-[90%]" />
          <div className="w-[90%] flex flex-col gap-3">
            <form>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
              >
                Food Name
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Name"
                required
              />
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
              >
                Price
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                placeholder="Price"
                required
              />
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
              >
                Food description
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                placeholder="description"
                required
              />
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
              >
                Food image
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={imageUrl}
                onChange={(e) => {
                  setImageUrl(e.target.value);
                }}
                placeholder="img"
                required
              />
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
              >
                Select category
              </label>
              <select
                id="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                }}
                required
              >
                <option value="" disabled>
                  Select a category
                </option>
                <option value="all-category">All Category</option>
                <option value="dinner">Dinner</option>
                <option value="lunch">Lunch</option>
                <option value="dessert">Dessert</option>
              </select>
              <button className="btn-shadow  text-black rounded-full w-[120px] h-fit m-5 p-4  border border-black text-[0.9em]">
                Close
              </button>
              <button
                className="btn-shadow text-black rounded-full w-[120px] h-fit p-4 m-5 border border-black text-[0.9em]"
                type="submit"
                value="submit"
                onClick={handleSaveProduct}
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
