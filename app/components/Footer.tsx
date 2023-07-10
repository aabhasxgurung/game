import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div>
      <div>
        <div className="flex justify-between px-9">
          <div>
            <img src="/images/Game.png" alt="" />
            <p></p>
          </div>

          <ul>
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
        <div className="flex items-center justify-center mt-10">
          <img src="/images/logo1.png" alt="" />
          <img src="/images/logo2.png" alt="" />
          <img src="/images/logo3.png" alt="" />
          <img src="/images/logo4.png" alt="" />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
