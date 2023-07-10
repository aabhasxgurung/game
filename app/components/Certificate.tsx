import React from "react";
import "./certificate.css";

type Props = {};

const certificates = [{}];

const Certificate = (props: Props) => {
  return (
    <div id="certificate" className="">
      <div className="border-2 border-fuchsia-600 w-[425.33px] h-[372.33px]">
        <img src="/images/verify.png" alt="" />
        <h1 className="text-white">Verified Software</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, qui
          debitis voluptas autem quibusdam animi accusantium. Odio facilis
          soluta dolorum illo! Ipsam deserunt consequatur accusamus! Odit
          explicabo aspernatur omnis quasi?
        </p>
      </div>
    </div>
  );
};

export default Certificate;
