import React from "react";
import { Link } from "react-router-dom";

function Item(props) {
  // console.log(props)
  return (
    <div className="w-[300px] hover:scale-[1.05] transition-[0.6s] ">
      <Link to={`/product/${props.id}`}><img className="h-[50vh] overflow-hidden" src={props.image} alt="" /></Link>
      <p className="w-[15vw]">{props.name}</p>
      <div className="flex gap-[20px]">
        <div className="text-[#373F4A] text-[18px] font-medium">
          ${props.new_price}
        </div>
        <div className="text-[#696969] text-[18px] line-through font-normal">
          {props.old_price}
        </div>
      </div>
    </div>
  );
}

export default Item;
