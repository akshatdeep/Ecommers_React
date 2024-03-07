import React from "react";

function Item(props) {
  return (
    <div className="w-[350px] hover: scale-[1.05] transition-[0.6s]">
      <img src={props.image} alt="" />
      <p className="my-[6px]">{props.name}</p>
      <div className="flex gap-[20px]">
        <div className="text-[#373F4A] text-[18px] font-medium">{props.new_price}</div>
        <div className="text-[#696969] text-[18px] line-through font-normal">{props.old_price}</div>
      </div>
    </div>
  );
}

export default Item;
