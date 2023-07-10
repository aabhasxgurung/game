import React from "react";

import "./home.css";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="container">
      <div>
        <div className="flex flex-col">
          <h1 className="title font-bold mt-10">Contact Us</h1>
          <p className="subtitle">Any Questions or Remarks? Just message us</p>
        </div>
        <div className="flex-container gap-36">
          <div className="image-container">
            <img src="/images/contact.png" alt="" className="image" />
          </div>
          <div className="form-container">
            <p>Name</p>
            <input type="text" />
            <p>Phone Number</p>
            <input type="text" />
            <p>Email</p>
            <input type="email" />
            <p>Message</p>
            <textarea></textarea>
            <button>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
