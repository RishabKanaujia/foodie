"use client"

import { useState, useEffect } from "react";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";


// const testimonials = [
//   {
//     text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//     name: "John Doe",
//     job: "Software Engineer",
//     gender: "male"
//   },
//   {
//     text: "Another testimonial text goes here. It can be about the positive experiences of another customer.",
//     name: "Jane Smith",
//     job: "Product Manager",
//     gender: "female"
//   },
//   {
//     text: "This is yet another testimonial. Make sure to include a variety of testimonials to showcase different aspects of your service.",
//     name: "Alice Johnson",
//     job: "UX Designer",
//     gender: "male"
//   }
// ];
const Review = ({reviewDataList}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

const testimonials = reviewDataList
// console.log(testimonials)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  return (
    <>
      <div className="flex flex-col justify-center items-center my-20">
        <h1 className="text-[#311f09] text-[52px] font-bold ">
          What Our Customers Say
        </h1>
        <div className="bg-white relative flex flex-col gap-20 items-center rounded-[16px] w-[700px] h-[350px] my-10 p-10">
          
          <p className="text-[20px] font-normal text-[#5c4529] text-center">
          {testimonials[currentIndex].review}
          </p>
          <div className=" flex gap-5 items-center text-center">
           {testimonials[currentIndex].Gender === "Male"? <img className="w-20 h-20 object-cover rounded-full shadow-lg" src="https://png.pngtree.com/background/20230610/original/pngtree-free-png-male-portrait-vector-illustration-with-beard-picture-image_3018432.jpg" alt="" />: <img className="w-20 h-20 object-cover rounded-full shadow-lg" src="https://static.vecteezy.com/system/resources/thumbnails/003/597/501/small/portrait-of-a-beautiful-young-woman-with-short-hair-free-vector.jpg" alt="" />} 
           
            <div>
            <p className="text-[#311f09] font-semibold">{testimonials[currentIndex].Name}</p>
            <p className="text-[#A0978C]">{testimonials[currentIndex].Job_title}</p>
            </div>
          
        </div>
          <div className="flex absolute right-[95%] top-[45%]">
            <div className="bg-white w-16 h-16 rounded-full shadow-xl flex justify-center items-center"><FaArrowLeftLong size={25} onClick={prevTestimonial} className="text-[#A0978C] cursor-pointer hover:text-[#f54748]" /></div>
          </div>
          <div className="flex absolute left-[95%] top-[45%]">
            <div className="bg-white w-16 h-16 rounded-full shadow-xl flex justify-center items-center"><FaArrowRight size={25} onClick={nextTestimonial} className="text-[#A0978C] cursor-pointer hover:text-[#f54748]" /></div>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
