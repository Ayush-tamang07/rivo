import React from "react";
// import RegularFitLongSleeveTop from "../assets/RegularFitLongSleeveTop.png";
import { MdOutlineStar } from "../../icons.js";


function CardComponent(props) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-secondary w-64 h-96 overflow-hidden">
        <img src={props.img} alt="image" className="object-cover w-full h-full"/>
      </div>
      <span className="font-semibold mt-5">{props.product_name}</span>
      <div className="flex justify-evenly">
        <span>{props.price}</span>
        <pre> | </pre>
        <div className="flex items-center gap-2">
          <span>{props.rating}</span>
          <MdOutlineStar className="text-yellow-500 text-2xl" />
          </div>
      </div>
    </div>
  );
}

export default CardComponent;
