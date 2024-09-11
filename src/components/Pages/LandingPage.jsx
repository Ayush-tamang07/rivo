import React from "react";
import Header from "../Header.jsx";
import Hero from "../Hero.jsx";
import BestSelling from "../BestSelling";
import OurProduct from "../OurProduct.jsx";
import ExclusiveOffer from "../ExclusiveOffer.jsx";


function LandingPage() {
  return (
    <div className="">
      <div className="primary overall-text p-5">
        <Header />
        <Hero />
      </div>
      <div className="flex flex-col items-center">
        <BestSelling />
        <OurProduct/>
        <ExclusiveOffer/>
      </div>
    </div>
  );
}

export default LandingPage;
