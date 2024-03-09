import React from "react";
import Page1 from "../components/Page1";
import Popular from "../components/Popular";
import Offers from "../components/Offers";
import NewCollection from "../components/NewCollection";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function Shop() {
  return (
    <div>
      <Page1 />
      <Popular />
      <Offers />
      <NewCollection />
      <Newsletter />
      <Footer/>
    </div>
  );
}

export default Shop;
