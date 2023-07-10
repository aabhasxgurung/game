import React from "react";

import GameCard from "./GameCard";

type Props = {};

const Games = (props: Props) => {
  return (
    <div id="games" className="bg-[#0B0620]">
      <div className=" w-full flex justify-center items-center">
        <div className="heading gradient-bg w-[1706.667px] h-[73.333px] flex items-center justify-center gap-[10px]">
          <h1 className="uppercase text-[32px] text-[#FFF]  text-center">
            Top Hitlers
          </h1>
        </div>
        ;
      </div>
      <div className="mt-10 space-y-32">
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
      </div>
    </div>
  );
};

export default Games;
