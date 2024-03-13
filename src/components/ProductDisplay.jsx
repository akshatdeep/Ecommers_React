import React, { useContext } from "react";
import star_icon from "./assets/star_icon.png";
import star_dull from "./assets/star_dull_icon.png";
import { ShopContext } from "../context/ShopContext";

function ProductDisplay(props) {
  const { product } = props;
  const {addTocart} = useContext(ShopContext)
  return (
    <div className="productdisplay flex my-[10px] mx-[70px] h-screen w-full">
      <div className="productdisplay-left flex gap-[17px] ">
        <div className="productdisplay-img-list flex flex-col gap-[16px]">
          <img className="h-[200px] " src={product.image} alt="" />
          <img className="h-[163px]" src={product.image} alt="" />
          <img className="h-[163px]" src={product.image} alt="" />
          <img className="h-[163px]" src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img
            className="product-main-image w-[700px] h-[630px]"
            src={product.image}
            alt=""
          />
        </div>
      </div>
      <div className="productdisplay-right my-0 mx-[70px] flex flex-col">
        <h1 className="text-[3vw] text-stone-800 font-bold">{product.name}</h1>
        <div className="productdisplay-star-right flex items-center mt-[13px] gap-[5px] text-stone-800 text-[16px]">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-price flex my-[40px] mx-0 gap-[30px] text-[24px] font-semibold">
          <div className="productdisplay-right-old-price text-stone-500 line-through">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-new-price text-red-500">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-dec">
          A T-shirt is a type of unisex garment characterized by its simple
          design, typically consisting of a round neckline and short sleeves. It
        </div>
        <div className="productdisplay-right-size">
          <h1 className="mt-[55px] text-stone-600 text-[20px] font-medium">
            Select Size
          </h1>
          <div className="productdisplay-right-size flex my-[30px] mx-0 gap-[20px]">
            <div className="py-[18px] px-[24px] bg-[#bebebe79] boder-[1px] border-[#ebebeb] cursor-pointer">
              S
            </div>
            <div className="py-[18px] px-[24px] bg-[#bebebe79] boder-[1px] border-[#ebebeb] cursor-pointer">
              M
            </div>
            <div className="py-[18px] px-[24px] bg-[#bebebe79] boder-[1px] border-[#ebebeb] cursor-pointer">
              L
            </div>
            <div className="py-[18px] px-[24px] bg-[#bebebe79] boder-[1px] border-[#ebebeb] cursor-pointer">
              XL
            </div>
            <div className="py-[18px] px-[24px] bg-[#bebebe79] boder-[1px] border-[#ebebeb] cursor-pointer">
              XXL
            </div>
          </div>
        </div>
        <button onClick={()=>{addTocart(product.id)}} className="bg-red-500 w-[200px] py-[15px] px-[30px] text-[16px] font-medium mb-[40px] border-none outline-none cursor-pointer text-white hover:bg-red-600">
          ADD TO CART
        </button>
        <p className="productdisplay-right-category font-medium">
          Category: <span className="mt-[10px]">Women, T-Shirt, Crop Top</span>
        </p>
        <p className="productdisplay-right-category font-medium">
          Tags: <span className="mt-[10px]">Modern Latest</span>
        </p>
      </div>
    </div>
  );
}

export default ProductDisplay;
