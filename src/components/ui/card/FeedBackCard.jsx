import React from "react";
import { BiSolidQuoteAltLeft } from "../../icons.js";



function FeedBackCard(props) {
  return (
    <div className="bg-white w-96 p-3 shadow-lg">
      <BiSolidQuoteAltLeft className="text-3xl text-primary"/>
      <h1 className="roboto-slab primary-text font-bold text-2xl my-4">
        {props.username}
      </h1>
      <p className="text-[#6F6F6F]">{props.description}</p>
    </div>
  );
}

export default FeedBackCard;
