import React from "react";
import images from "../assets/BlackCropTailoredJacket.png";

function ForYouCard() {
  return (
    <div className="flex flex-col">
      <div className="w-[300px]">
        <div className="bg-[#A9D4BA] w-72 h-96 overflow-hidden">
          <img
            src={images}
            alt="image"
            className="object-cover w-full h-full"
          />
        </div>
        <h1 className="text-center font-semibold text-2xl">Accessories</h1>
        <p className="text-center">
          Complete your ensemble with designer accessories such as handbags,
          scarves, belts, and hats.
        </p>
      </div>
    </div>
  );
}

export default ForYouCard;
