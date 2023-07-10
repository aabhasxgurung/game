import React from "react";

import "./home.css";

type Props = {};

const games = [
  {
    imageSrc: "images/game1.png",
    name: "Velvet Games",
    desc: "Seven Bar Casino",
    price: "$13.99",
  },
  {
    imageSrc: "images/game2.png",
    name: "Mobile Skill Games",
    desc: "Golden City",
    price: "$13.99",
  },
  {
    imageSrc: "images/game3.png",
    name: "Server Game System",
    desc: "Galaxy Star",
    price: "$10.99",
  },
  {
    imageSrc: "images/game4.png",
    name: "Mobile Games",
    desc: "Orion Stars",
    price: "$45",
  },
  {
    imageSrc: "images/game5.png",
    name: "Server Game System",
    desc: "Seven Bar Casino",
    price: "$99.99",
  },
];

const GameCard = (props: Props) => {
  return (
    <div className="game-card-container">
      {games.map((game, index) => (
        <div key={index} className="game-card">
          <img src={game.imageSrc} alt="" />
          <h4 className="flex items-start text-white text-xl font-bold uppercase mt-3 tracking-wider">
            {game.name}
          </h4>
          <p className="flex items-start text-white mt-3">{game.desc}</p>
          <p className="flex items-start text-white">{game.price}</p>
        </div>
      ))}
    </div>
  );
};

export default GameCard;
