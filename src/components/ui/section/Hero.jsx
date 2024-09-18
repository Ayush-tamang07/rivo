import React from "react";
import image from "../../../assets/hero-image.png"

function Hero() {
  return (
    <section className="flex justify-center items-center my-20">
      <div className="max-w-[800px] mx-24 my-5">
        <p className="text-7xl text-start rufina-bold primary-text my-5">Discover and  <br />Find Your Own  <br />Fashion!</p>
        <p className="leading-8 text-start my-3 text-text1">
          Explore our curated collection of stylish <br /> clothing and
          accessories tailored to your <br /> unique taste.
        </p>
        <button className="text-white bg-primary py-3 px-4 shadow-xl my-3">Explore Now</button>
      </div>
      <div className="bg-[#6BC785] rounded-tl-[90px] rounded-br-[90px] rounded-tr-[20px] rounded-bl-[20px]">
        <img src={image} alt="image" width={420} />
      </div>
    </section>
  );
}

export default Hero;
