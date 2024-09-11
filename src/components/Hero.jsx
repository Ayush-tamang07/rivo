import React from "react";
import image from "../assets/hero-image.png";

function Hero() {
  return (
    <section className="flex justify-center items-center my-20">
      <div className="max-w-[800px] mx-24">
        <p className="text-7xl text-start rufina-bold">Discover and  <br />Find Your Own  <br />Fashion!</p>
        <p className="leading-8 text-start">
          Explore our curated collection of stylish <br /> clothing and
          accessories tailored to your <br /> unique taste.
        </p>
        <button className="text-white bg-[#224F34] py-3 px-4 shadow-xl">Explore Now</button>
      </div>
      <div className="bg-[#6BC785] rounded-tl-[90px] rounded-br-[90px] rounded-tr-[20px] rounded-bl-[20px]">
        <img src={image} alt="image" width={300} />
      </div>
    </section>
  );
}

export default Hero;
