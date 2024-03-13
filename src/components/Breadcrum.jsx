import React from "react";
import arrow_icon from "./assets/breadcrum_arrow.png";

function Breadcrum(props) {
  const { product } = props;
  return (
    <div className="breadcrum flex items-center gap-[5px] text-stone-700 text-[16px] font-semibold mx-[60px] my-[50px] uppercase">
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />{" "}
      {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
}

export default Breadcrum;
