import React from "react";
import "./home.css";

type Props = {};

const businesses = [
  {
    img: "/images/signup.png",
    desc: "1. Sign Up",
  },
  {
    img: "/images/cart.png",
    desc: "2. Shop & Check Out",
  },
  {
    img: "/images/recieve.png",
    desc: "3. Recieve Lease Quote",
  },
  {
    img: "/images/approved.png",
    desc: "4. Get Approved",
  },
  {
    img: "/images/getprod.png",
    desc: "5. Get Products",
  },
];

const BusinessBanner = (props: Props) => {
  return (
    <div className="mt-32 bg-grad">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl lg:text-5xl font-bold leading-[53.76px] tracking-wide mt-2 lg:mt-20">
          Grow Your Business Fast
        </h1>
        <p className="text-sm lg:text-lg leading-relaxed mt-1 lg:mt-10">
          Its simple to start leasing our game rentals
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:flex items-center justify-center p-3 gap-6 lg:gap-11 mt-11">
        {businesses.map((business) => (
          <div className="bg-[#0b0620] rounded-xl w-[174px] h-[156px] lg:w-[305px] lg:h-[218px] flex items-center justify-center flex-col">
            <img
              src={business.img}
              alt=""
              className="lg:w-[85px] lg:h-[85px] w-[64px] h-[64px]"
            />
            <h1 className="mt-6 text-sm lg:text-xl">{business.desc}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessBanner;
