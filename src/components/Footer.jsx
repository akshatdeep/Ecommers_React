import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import logo from "./assets/logo.png";

function Footer() {
  return (
    <div className="h-[70vh] w-full bg-[#FCE7F3] mt-[10vw] flex flex-col justify-center items-center">
      <div className="flex items-center text-[3vw] font-bold">
        <img src={logo} alt="" />
        <h1>NexusNook</h1>
      </div>
      <div className="flex items-center gap-[4vw] my-[4vw] cursor-pointer font-semibold">
        <h6>Company</h6>
        <h6>Products</h6>
        <h6>Offices</h6>
        <h6>About</h6>
        <h6>Contect</h6>
      </div>
      <div className="flex items-center gap-[4vw] text-[2vw]">
        <FaInstagram />
        <FaFacebook />
        <FaLinkedin />
      </div>
    </div>
  );
}

export default Footer;
