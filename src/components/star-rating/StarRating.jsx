import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

// eslint-disable-next-line react/prop-types
const StarRating = ({ noOfStart = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };
  const handleMouseEnter = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  };
  const handleMouseLeave = () => {
    setHover(rating);
  };

  console.log(rating, hover);

  return (
    <div className="star-rating">
      {[...Array(noOfStart)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inActive"}
            onClick={() => handleClick(index)}
            onMouseOver={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
