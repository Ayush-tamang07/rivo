import React from "react";
import Header from "../Header.jsx";
import Hero from "../Hero.jsx";
import BestSelling from "../BestSelling";
import OurProduct from "../OurProduct.jsx";
import ExclusiveOffer from "../ExclusiveOffer.jsx";
import ForYou from "../ForYou.jsx";
import Footer from "../Footer.jsx";


function LandingPage() {
  return (
    <div className="">
      <div className="primary overall-text pt-4 pb-1">
        <Header />
        <Hero />
      </div>
      <div className="flex flex-col items-center">
        <BestSelling />
        <OurProduct/>
        <ExclusiveOffer/>
        <ForYou/>
        <Footer/>
      </div>
    </div>
  );
}

export default LandingPage;
