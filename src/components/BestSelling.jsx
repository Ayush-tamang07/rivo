import React from "react";
import BestSellingCard from "./BestSellingCard.jsx";
import RegularFitLongSleeveTop from "../assets/RegularFitLongSleeveTop.png";
import BlackCropTailoredJacket from "../assets/BlackCropTailoredJacket.png";
import TexturedSunSetShirt from "../assets/TexturedSunSetShirt.png";
// import BestSellingCard from './BestSellingCard.jsx'
import { AiOutlineArrowRight } from "react-icons/ai";

function BestSelling() {
  return (
    <section className="flex flex-col items-center my-20">
      <h1 className="roboto-slab text-5xl primary-text mb-5">Best Selling</h1>
      <p className="overall-text mb-10">
        Get in on the trend with our curated selection of best-selling styles.
      </p>
      <div className="flex gap-6">
        <BestSellingCard
          product_name="Black Crop Tailored Jacket"
          price="$99"
          rating="3.9"
          img={RegularFitLongSleeveTop}
        />
        <BestSellingCard
          product_name="Textured Sunset Shirt"
          price="$89"
          rating="2.2"
          img={BlackCropTailoredJacket}
        />
        <BestSellingCard
          product_name="Black Crop Tailored Jacket"
          price="$99"
          rating="3.9"
          img={TexturedSunSetShirt}
        />
      </div>
      <button className="border-2 border-[#224F34] py-3 px-8 text-2xl text-[#224F34] flex items-center">
        see all
        <AiOutlineArrowRight className="ml-2" />
      </button>
    </section>
  );
}

export default BestSelling;
