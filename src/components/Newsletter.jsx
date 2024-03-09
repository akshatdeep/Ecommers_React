import React from "react";

function Newsletter() {
  return (
    <div className="h-[60vh] w-full  mt-[10vw] px-[6vw]">
      <div className="bg-blue-300 h-full flex flex-col justify-center items-center">
        <h1 className="text-[4vw] font-semibold ">
          Get Exclusive Offers On Your Email
        </h1>
        <p className="font-semibold my-[2vw]">
          Subscribe to our newletter and stay updated
        </p>
        <div className="w-[500px] bg-white flex rounded-full ">
          <input
            className="px-[8vw] py-[1vw] rounded-full border-none outline-none"
            type="email"
            placeholder="enter your email"
          />
          <button className="bg-black text-white px-[2vw] py-[0.8vw] rounded-full ">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
