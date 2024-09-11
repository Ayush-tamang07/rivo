import React from 'react'
import CardComponent from "./CardComponent.jsx"
import RegularFitLongSleeveTop from "../assets/RegularFitLongSleeveTop.png";
import BlackCropTailoredJacket from "../assets/BlackCropTailoredJacket.png"
import TexturedSunSetShirt from "../assets/TexturedSunSetShirt.png"



function BestSelling() {
  return (
    <section className='flex flex-col items-center my-20'>
        <h1 className='roboto-slab text-5xl overall-text mb-5'>Best Selling</h1>
        <p className='overall-text mb-10'>Get in on the trend with our curated selection of best-selling styles.</p>
        <div className='flex gap-6'>
        <CardComponent product_name="Black Crop Tailored Jacket" price="$99" rating="3.9" img={RegularFitLongSleeveTop}/>
        <CardComponent product_name="Textured Sunset Shirt" price="$89" rating="2.2" img={BlackCropTailoredJacket} />
        <CardComponent product_name="Black Crop Tailored Jacket" price="$99" rating="3.9" img={TexturedSunSetShirt}/>
        </div>
        <button>see all</button>

    </section>
  )
}

export default BestSelling