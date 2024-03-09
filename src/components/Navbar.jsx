import React, { useState } from "react";
import cart from "./assets/cart_icon.png";
import logo from "./assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [menu, setmenu] = useState("home");
  return (
    <div className="h-[20vh] w-full flex justify-between items-center px-[6vw] border-b-[1px] boder-zinc-100">
      <div className="flex items-center h-[1vw] gap-5">
        <h1 className="text-[2vw] font-bold">NexusNook</h1>
        <img src={logo} alt="" />
      </div>
      <div className=" flex gap-20">
        <h6 className="text-[1.2vw] font-normal cursor-pointer">
          <Link to="/">HOME</Link>
          {menu === "home" ? (
            <hr className="boder-none w-[90%] h-[3px] bg-red-500" />
          ) : (
            <></>
          )}
        </h6>
        <h6
          onClick={() => {
            setmenu("men");
          }}
          className="text-[1.2vw] font-normal cursor-pointer"
        >
          <Link to="/mens">mens</Link>
          {menu === "men" ? (
            <hr className="boder-none w-[90%] h-[3px] bg-red-500" />
          ) : (
            <></>
          )}
        </h6>
        <h6
          onClick={() => {
            setmenu("women");
          }}
          className="text-[1.2vw] font-normal cursor-pointer"
        >
          {" "}
          <Link to="/womens">womens</Link>
          {menu === "women" ? (
            <hr className="boder-none w-[90%] h-[3px] bg-red-500" />
          ) : (
            <></>
          )}
        </h6>
        <h6
          onClick={() => {
            setmenu("kids");
          }}
          className="text-[1.2vw] font-normal cursor-pointer"
        >
          <Link to="/kids">KIDS</Link>
          {menu === "kids" ? (
            <hr className="boder-none w-[90%] h-[3px] bg-red-500" />
          ) : (
            <></>
          )}
        </h6>
      </div>
      <div className="flex items-center gap-5 cursor-pointer">
        <Link to="/login">
          <button className=" py-[.5vw] px-[2.5vw] border-[1px] border-black font-semibold rounded-full">
            LOGIN
          </button>
        </Link>
        <Link to="cart">
          <img src={cart} alt="" />
        </Link>
        <div className="w-[22px] h-[22px] bg-red-600 flex justify-center items-center mr absolute right-[5%] top-[6%] rounded-full text-white">
          0
        </div>
      </div>
    </div>
  );
}

export default Navbar;
