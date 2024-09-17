import React from "react";
// import RegularFitLongSleeveTop from "../assets/RegularFitLongSleeveTop.png";
import { MdOutlineStar } from "react-icons/md";

function BestSellingCard(props) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-secondary w-72 h-96 overflow-hidden">
        <img src={props.img} alt="image" className="object-cover w-full h-full"/>
      </div>
      <span className="font-semibold">{props.product_name}</span>
      <div className="flex justify-evenly">
        <span>{props.price}</span>
        <pre> | </pre>
        <div className="flex items-center">
          <span>{props.rating}</span>
          <MdOutlineStar className="text-yellow-500"/>
        </div>
      </div>
    </div>
  );
}

export default BestSellingCard;
