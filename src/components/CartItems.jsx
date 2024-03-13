import React, { useContext } from "react";
import remove_icon from "./assets/cart_cross_icon.png";
import { ShopContext } from "../context/ShopContext";

function CartItems() {
  const { all_product, cartitem, removeFromCart } = useContext(ShopContext);

  return (
    <div className="cartitems my-[100px] mx-[170px]">
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quntity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="h-[3px] bg-[#e2e2e2] border-0" />
      <div>
        <div className="cartitems-format grid grid-cols-6">
          <img src="" alt="" />
          <p></p>
          <p></p>
          <button className="cart-item-quantity"></button>
          <p></p>
          <img
            src={remove_icon}
            onClick={() => {
              removeFromCart();
            }}
            alt=""
          />
        </div>
        <hr />
        {all_product.map((e) => {
          if (cartitem[e.id] > 0) {
            return (
              <div className="cartitems-format">
                <img src={e.image} alt="" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cart-item-quantity">{cartitem[e.id]}</button>
                <p>{e.new_price*cartitem[e.id]}</p>
                <img
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default CartItems;
