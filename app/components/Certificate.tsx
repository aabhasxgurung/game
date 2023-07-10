import React from "react";

import "./home.css";

type Props = {};

const certificates = [
  {
    image: "/images/verify.png",
    title: "Verified Software",
    desc: "Top Sweepstakes & Skill Based Game Developers (non-knockoff) Ready To Lease In Your Business.",
  },
  {
    image: "/images/hardware.png",
    title: "Fresh Hardware",
    desc: "Professionally Fabricated Plug and Play Game Systems Ready To Lease In Your Business.",
  },
  {
    image: "/images/security.png",
    title: "Advanced Security",
    desc: "All Systems Equipped With Tracking, Anti-Cheat, & Remote Access With Lock Out Mode.",
  },
  {
    image: "/images/tech.png",
    title: "Tech Support",
    desc: "All Products Are Maintained & Serviced With Anytime Tech Support.",
  },
  {
    image: "/images/quality.png",
    title: "Quality Certified",
    desc: "Gaming Lab Tested & Approved For Authorized Skill Based & Sweepstakes Games.",
  },
  {
    image: "/images/test.png",
    title: "Tested & Proven",
    desc: "Tested & Proven Math Models That Hold True. Community Jackpots That Pop.",
  },
];

const Certificate = (props: Props) => {
  return (
    <div id="certificate">
      <h1 className="text-white font-bold text-2xl sm:text-4xl lg:text-5xl mt-1 lg:mt-20 tracking-wide">
        Authentic Certified Software
      </h1>
      <p className="text-white text-sm lg:text-xl font-thin lg:font-semibold leading-relaxed lg:mt-4">
        Quality Products with top notch support
      </p>
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-20 mt-10">
        {certificates.map((certificate) => (
          <div className="certificate-card ">
            <img src={certificate.image} alt="" />
            <h1>{certificate.title}</h1>
            <p>{certificate.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;
