import React from "react";

function LoginSiginup() {
  return (
    <div className="LoginSiginup w-full h-[90vh] bg-[#fce3fe] py-[40px]">
      <div className="LoginSiginup-container w-[580px] h-[500px] bg-white m-auto py-[40px] px-[60px] mb-[9vw]">
        <h1 className="my-[20px] mx-[0]">Sign Up</h1>
        <div className="Loginsignup-flieds flex flex-col gap-[29px] mt-[20px]">
          <input
            className="h-[42px] w-full pl-[20px] border-[1px] border-gray-200 outline-none text-stone-500 text-[15px]"
            type="text"
            placeholder="Enter Your Username"
          />
          <input
            className="h-[42px] w-full pl-[20px] border-[1px] border-gray-200 outline-none text-stone-500 text-[15px]"
            type="email"
            placeholder="Enter Your Email"
          />
          <input
            className="h-[42px] w-full pl-[20px] border-[1px] border-gray-200 outline-none text-stone-500 text-[15px]"
            type="password"
            placeholder="Enter Your Password"
          />
        </div>
        <button className="w-[460px] h-[45px] text-white bg-red-400 text-[24px] font-medium cursor-pointer mt-[1vw] hover:bg-red-600">
          Continue
        </button>
        <p className="mt-[20px] text-gray-500 text-[18px] font-medium">
          Already have an account?{" "}
          <span className="text-red-600 font-bold cursor-pointer">
            Login here
          </span>
        </p>
        <div className="LoginSiginup-agree flex items-center mt-[25px] gap-[20px] text-stone-700 text-[16px] font-medium">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
}

export default LoginSiginup;
