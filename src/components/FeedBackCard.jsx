import React from "react";

function FeedBackCard(props) {
  return (
    <div className="bg-white w-96 p-3 shadow-lg">
      <h1 className="text-4xl font-times primary-text">"</h1>
      <h1 className="roboto-slab primary-text font-bold text-2xl">
        {props.username}
      </h1>
      <p>{props.description}</p>
    </div>
  );
}

export default FeedBackCard;
