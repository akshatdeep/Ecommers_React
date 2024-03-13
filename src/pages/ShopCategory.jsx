import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import dropdown_icon from "../components/assets/dropdown_icon.png";
import Item from "../components/Item";

function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img
        className="w-[82%] block my-[30px] mx-auto"
        src={props.banner}
        alt=""
      />
      <div className="ShopCategory-indexSort flex my-[0px] mx-[170px] justify-center items-center">
        <p className="font-semibold">
          <span className="font-semibold">Showing 1-12</span> out of 36 products
        </p>
      </div>
      <div className="shop-category-short py-[10px] w-[8%] h-[5%] flex items-center justify-between ml-[89%]  rounded-[40px] border-[1px] border-gray-400 cursor-pointer px-[18px]">
        Sort by <img src={dropdown_icon} alt="" />
      </div>
      <div className="shop-category-products collection mt-[50px] grid grid-cols-4 gap-[80px] px-[3vw]">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore flex justify-center items-center my-[150px] mx-auto w-[233px] h-[69px] rounded-[75px] bg-gray-200 text-stone-700 text-[18px] font-medium cursor-pointer">
        Explore more
      </div>
    </div>
  );
}

export default ShopCategory;
