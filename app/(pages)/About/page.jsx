"use client"

import Footer from "@/app/_components/Footer";
import Navbar from "@/app/_components/Navbar";
import React from "react";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <div className="my-10 flex flex-col gap-20">
        <div className="flex justify-center gap-[180px]">
          <div className="bg-[#F5F5F5] rounded-full p-12">
            <div className="bg-[#EEEDEC] rounded-full p-12">
              <img
                className="rounded-full w-[220px] h-[220px]"
                src="https://images.unsplash.com/photo-1607062088573-f6b259c6ea0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
          <div className="w-[420px]">
            <h1 className="text-[52px] font-bold text-[#311f09]">
              About Our <br />
              <span className="text-[#f54748]">Restaurant</span>
            </h1>
            <p className="text-[20px] font-normal mt-4 mb-6">
              This dish is full of flavor and nutrition! Quinoa is a complete
              protein, providing all the essential amino acids your body needs,
              and is also a good source of fiber.
            </p>
            <button onClick={() => router.push('/')} className="bg-[#f54748] rounded-[16px] font-semibold text-[20px] text-white h-[72px] px-12">
              Order now
            </button>
          </div>
        </div>
        <hr />
        <div className="flex justify-center gap-[180px]">
          <div className="w-[420px] flex justify-center items-center">
            {/* <h1 className="text-[52px] font-bold text-[#311f09]">
              About Our <br />
              <span className="text-[#f54748]">Restaurant</span>
            </h1> */}
            <p className="text-[20px] text-[#5c4529] font-normal mt-4 mb-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </p>
            {/* <button className="bg-[#f54748] rounded-[16px] font-semibold text-[20px] text-white h-[72px] px-12">
              Order now
            </button> */}
          </div>
          <div className="bg-[#F5F5F5] rounded-full p-12">
            <div className="bg-[#EEEDEC] rounded-full p-12">
              <img
                className="rounded-full w-[220px] h-[220px]"
                src="https://images.unsplash.com/photo-1607062088573-f6b259c6ea0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="flex justify-center gap-[180px] mb-10">
          <img
            className="w-[400px] h-[550px] shadow-lg"
            src="https://images.unsplash.com/photo-1607631568010-a87245c0daf8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />

          <div className="w-[480px]">
            <h1 className="text-[52px] font-bold text-[#311f09] ">
            <span className="text-[#f54748]">Owner</span> & Executive<br />
               Chef
            </h1>
            <h3 className="text-[#5c4529] text-[40px] font-normal">Rishab Kanaujia</h3>
            <p className="text-[30px] text-[#5c4529] font-normal my-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            {/* <button className="bg-[#f54748] rounded-[16px] font-semibold text-[20px] text-white h-[72px] px-12">
              Order now
            </button> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
