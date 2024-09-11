import React from "react";
import RegularFitLongSleeveTop from "../assets/RegularFitLongSleeveTop.png";
import BlackCropTailoredJacket from "../assets/BlackCropTailoredJacket.png"
import TexturedSunSetShirt from "../assets/TexturedSunSetShirt.png"
import CardComponent from "./CardComponent";

function OurProduct() {
  return (
    <section>
      <h1 className="roboto-slab text-5xl overall-text mb-5 text-center">Our Products</h1>
      <nav className="">
        <ul className="flex space-x-20 justify-center my-14">
            <li>SALE</li>
            <li>HOT</li>
            <li>NEW ARRIVALS</li>
            <li>ACCESSORIES</li>
        </ul>
      </nav>
    <div className="grid grid-cols-4 gap-6">
        <CardComponent product_name="Black Crop Tailored Jacket" price="$99" rating="3.9" img={RegularFitLongSleeveTop}/>
        <CardComponent product_name="Textured Sunset Shirt" price="$89" rating="2.2" img={BlackCropTailoredJacket} />
        <CardComponent product_name="Black Crop Tailored Jacket" price="$99" rating="3.9" img={TexturedSunSetShirt}/>
        <CardComponent product_name="Black Crop Tailored Jacket" price="$99" rating="3.9" img={TexturedSunSetShirt}/>
        <CardComponent product_name="Black Crop Tailored Jacket" price="$99" rating="3.9" img={TexturedSunSetShirt}/>
        <CardComponent product_name="Black Crop Tailored Jacket" price="$99" rating="3.9" img={TexturedSunSetShirt}/>
        <CardComponent product_name="Black Crop Tailored Jacket" price="$99" rating="3.9" img={TexturedSunSetShirt}/>
        <CardComponent product_name="Black Crop Tailored Jacket" price="$99" rating="3.9" img={TexturedSunSetShirt}/>
    </div>
    </section>
  );
}

export default OurProduct;
