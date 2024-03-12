import React from "react";
import new_collection from "./assets/new_collections";
import Item from "./Item";

function NewCollection() {
  return (
    <div className="mt-[10vw] popular flex flex-col items-center gap-[10px] ml-[3vw] h-full">
      <h1 className="text-[#171717] text-[50px] font-normal">new collection</h1>
      <hr className="w-[200px] h-[6px] rounded-[10px] bg-[#252525]" />
      <div className="collection mt-[50px] grid grid-cols-4 gap-[80px]">
        {new_collection.map((item, i) => {
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

export default NewCollection;
