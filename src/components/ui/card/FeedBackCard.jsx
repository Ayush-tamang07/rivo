import React from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";


function FeedBackCard(props) {
  return (
    <div className="bg-white w-96 p-3 shadow-lg">
      <BiSolidQuoteAltLeft className="text-3xl text-primary"/>
      <h1 className="roboto-slab primary-text font-bold text-2xl my-4">
        {props.username}
      </h1>
      <p>{props.description}</p>
    </div>
  );
}

export default FeedBackCard;
