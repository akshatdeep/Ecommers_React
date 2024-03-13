import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../components/Breadcrum";
import ProductDisplay from "../components/ProductDisplay";
import DescriptionBox from "../components/DescriptionBox";
import ReletedProduct from "../components/ReletedProduct";

function Product() {
  const { all_product } = useContext(ShopContext);
  const productId = useParams();
  const product = all_product.filter((e) => e.id == productId.productId)[0];
  return (
    <div>
      <Breadcrum product={product} id={productId} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <ReletedProduct/>
    </div>
  );
}

export default Product;
