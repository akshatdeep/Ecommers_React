import React from "react";
import handicon from "../components/assets/hand_icon.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import Heroimg from '../components/assets/hero_image.png'

function Page1() {
  return (
    <div className="h-[80vh] w-full bg-pink-100 flex">
      <div className="left h-full w-1/2">
        <h6 className="text-[1.2vw] uppercase font-semibold pt-[10vw] pl-[4.5vw]">
          new arrivals only
        </h6>
        <div className="flex items-center">
          <p className="text-[4vw] text-center tracking-wider font-semibold pl-[4.5vw]">new</p>
          <img className="h-[4vw]" src={handicon} alt="" />
        </div>
        <p className="text-[4vw] font-semibold tracking-wider text-left leading-[4.5vw] pl-[4.5vw] mb-[5vw]">
          collections <br /> for everyone
        </p>
        <button className="ml-[4.5vw] px-[2vw] bg-red-500 py-[.7vw] rounded-full flex items-center gap-5 font-semibold text-white">Latest Collection <FaLongArrowAltRight className="text-white text-[1.3vw]" /></button>
      </div>
      <div className="right flex items-start ">
        <img className="h-[90vh] object-cover ml-[4vw]" src={Heroimg} alt="" />
      </div>
    </div>
  );
}

export default Page1;
