import React from "react";
import "./header.css";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div id="hero" className="relative bg text-white">
      <div className="relative">
        <img src="/images/hero.png" alt="" />
        <div className="absolute top-[70px] md:top-[120px] lg:top-[200px] 2xl:top-[314px] w-full">
          <div className="flex flex-col space-y-10 justify-center text-center">
            <h1 className="text">
              SWEEPSTAKES REWARDS
              <br />
              #1 ONLINE GAME SUPPLIER
            </h1>
            <p className="text-2xl font-normal tracking-wider hidden xl:block">
              Multiple Game Developers in One Shop, We Have Contest Games,
              Sweepstakes <br /> Games, Skill Based Games, &amp; More. The Best
              Part Is We Have Tech Teams To <br /> Support It All!
            </p>
            <div className="flex justify-center space-x-2 lg:space-x-[45px]">
              <button className="w-[167px] h-[33px] sm:w-[200px] sm:h-[47px] lg:w-[256px] lg:h-[70.14px] button-grad rounded-l-full">
                Distribution
              </button>
              <button className="w-[256px] h-[70.14px] button-grad hidden xl:inline ">
                Distributors
              </button>
              <button className="w-[167px] h-[33px] sm:w-[200px] sm:h-[47px] lg:w-[256px] lg:h-[70.14px] button-grad rounded-r-full">
                Store Agents
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
