import React from "react";
import data_product from "../components/assets/data";
import Item from "./Item";

function Popular() {
  return (
    <div className="popular flex flex-col items-center gap-[10px] h-[90vh] ml-[3vw] mt-[6vw]">
      <h1 className="text-[#171717] text-[50px] font-normal">
        POPULAR IN WOMEN
      </h1>
      <hr className="w-[200px] h-[6px] rounded-[10px] bg-[#252525]" />
      <div className=" popular_item mt-[50px] flex gap-[30px] ">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old-price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Popular;
