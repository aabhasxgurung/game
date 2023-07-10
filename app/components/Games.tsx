import React from "react";

import GameCard from "./GameCard";
import MobileGame from "./MobileGame";

type Props = {};

const Games = (props: Props) => {
  return (
    <div id="games" className="bg-[#0B0620] ">
      <div className=" w-full flex justify-center items-center">
        <div className="heading gradient-bg w-[358px] h-[55px] lg:w-[1706.667px] lg:h-[73.333px] flex items-center justify-center gap-[10px]">
          <h1 className="uppercase text-[32px] text-[#FFF]  text-center">
            Top Hitters
          </h1>
        </div>
      </div>
      <div className="mt-10 space-y-32 hidden lg:block ">
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
      </div>
      <div className="block md:hidden">
        <MobileGame />
      </div>
    </div>
  );
};

export default Games;
