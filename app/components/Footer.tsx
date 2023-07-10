import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className=" mt-44">
      <hr className=" bg-slate-500 hidden md:block" />
      <div className="mt-10">
        <div className="flex justify-between px-28">
          <div className="hidden md:inline-block">
            <img src="/images/Game.png" alt="" />
            <p></p>
          </div>

          <ul className="hidden lg:inline-block">
            All Games
            <li>Mobile Games</li>
            <li>Mobile Games</li>
            <li>Mobile Games</li>
            <li>Mobile Games</li>
            <li>Mobile Games</li>
          </ul>

          <h1>Startup Guide</h1>
          <h1>Legal Guide</h1>
          <h1>About Us</h1>
          <h1>Contact</h1>
        </div>
        <div className="flex items-center justify-center space-x-[28px] lg:space-x-32 mt-10 mb-5">
          <img
            src="/images/logo1.png"
            alt=""
            className="w-[58px] h-[24px] lg:w-[154px] lg:h-[64px]"
          />
          <img
            src="/images/logo2.png"
            alt=""
            className="w-[28px] h-[28px] lg:w-[74px] lg:h-[73px]"
          />
          <img
            src="/images/logo3.png"
            alt=""
            className="w-[59px] h-[20px] lg:w-[158px] lg:h-[54px]"
          />
          <img
            src="/images/logo4.png"
            alt=""
            className="w-[42px] h-[40px] lg:w-[112px] lg:h-[106px]"
          />
        </div>
        <hr />
        <div className="mt-20">
          <ul className="flex justify-evenly items-center text-gray-500">
            <li>Term Of Use</li>
            <li>How It Works</li>
            <li>Getting Started</li>
            <li>Order Process</li>
            <li>Make Contact</li>
            <li>The Layout</li>
            <li>Legal Regulation</li>
            <li>Privacy Policy</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
