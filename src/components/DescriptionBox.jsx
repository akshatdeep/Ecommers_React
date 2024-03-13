import React from "react";

function DescriptionBox() {
  return (
    <div className="main my-[120px] mx-[170px]">
      <div className="descriptionbox-nav flex">
        <div className="descriptionbox-nav-box flex items-center justify-center text-[16px] font-medium w-[171px] h-[70px] border-[1px] border-stone-400 mb-[5px]">
          Descrition
        </div>
      </div>
      <div className="descritionbox-descrition flex flex-col gap-[25px] border-[1px] border-stone-400 pb-[70px]">
        <p className="w-[30vw]">
          I recently purchased the ComfortBlend Cotton T-shirt from CoolStyle
          Apparel, and I couldn't be happier with my purchase. This T-shirt has
          quickly become a staple in my wardrobe for several reasons.
        </p>
        <p>
          I also appreciate the attention to detail in the design. The fit is
          just right - not too tight, not too loose. The crew neckline and short
          sleeves give it a classic look that pairs well with any outfit. Plus,
          the T-shirt is tagless, so there's no annoying itchiness at the back
          of the neck.
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;
