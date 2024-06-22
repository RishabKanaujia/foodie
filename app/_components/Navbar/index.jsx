'use client'

import Link from "next/link";
import Logo from '/public/Logo/logo.svg'
import Image from "next/image";
import { useRouter } from 'next/navigation'

const Navbar = () => {

  const router = useRouter()

  return (
    <>
      <div className="py-10 ">
        <nav className="flex justify-center gap-20 cursor-pointer">
          <Image width={100} height={100}
            className="w-fit h-fit"
            src={Logo}
            onClick={() => router.push('/')}
          />

          <ul className="flex gap-5 justify-center text-[#311f09cc] items-center text-[16px] font-normal">
            <li className="hover:text-[#f54748]  hover:underline underline-offset-8">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-[#f54748] hover:underline underline-offset-8">
              <Link href="/Menu">Menu</Link>
            </li>
            <li className="hover:text-[#f54748] hover:underline underline-offset-8">
              <Link href="/About">About us</Link>
            </li>
            <li className="hover:text-[#f54748] hover:underline underline-offset-8">
              <Link href="/Order online">Order online</Link>
            </li>
            <li className="hover:text-[#f54748] hover:underline underline-offset-8">
              <Link href="/Reservation">Reservation</Link>
            </li>
            <li className="hover:text-[#f54748] hover:underline underline-offset-8">
              <Link href="/Contact">Contact us</Link>
            </li>
          </ul>
          <div className="flex gap-4">
            <button className="rounded-full bg-white shadow-xl p-7"></button>
            <button className="bg-[#f54748] px-8 rounded-[16px] text-[14px] text-white font-semibold">
              Log in
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
