import React from "react";
import "./header.css";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div id="navbar" className="absolute top-0 z-50 w-full">
      <div className="flex md:items-center md:space-x-52 text-white">
        <div className="md:p-8 pl-2">
          <img
            className="group w-[99px] h-[57px] lg:w-[249px] lg:h-[143px]"
            alt="Group"
            src="/images/logo.png"
          />
        </div>
        <div>
          <ul className="hidden xl:inline-block space-x-[48px] items-center justify-center">
            <Link href={"/"}>All Games</Link>
            <Link href={"/"}>Startup Guide</Link>
            <Link href={"/"}>Legal Guide</Link>
            <Link href={"/"}>FAQ</Link>
            <Link href={"/"}>About Us</Link>
            <Link href={"/"}>Contact</Link>
          </ul>
        </div>
        <div className="flex justify-between space-x-2 lg:space-x-9 top-1 md:top-5 absolute right-0 md:right-2 xl:right-10">
          <p className="flex items-center text-center justify-center w-auto xl:text-4xl md:h-10 text-xs md:text-xl">
            +(833) 767 -HOST
          </p>
          <img
            src="/images/send.png"
            alt=""
            className="w-[15px] h-[15px] md:w-[30px] md:h-[30px] xl:w-[72.28px] xl:h-[72.28px]"
          />
          <img
            src="/images/whatsapp.png"
            alt=""
            className="w-[15px] h-[15px] md:w-[30px] md:h-[30px] xl:w-[72.28px] xl:h-[72.28px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
