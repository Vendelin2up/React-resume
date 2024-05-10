import React from "react";
import "./Stars.css";

const Star = () => {
  const top = Math.random() * 100;
  const left = Math.random() * 100;
  const animationDelay = `${Math.random() * 5}s`;

  return (
    <div
      className="star"
      style={{ top: `${top}%`, left: `${left}%`, animationDelay }}
    />
  );
};

const StarryBackground = ({ count = 1000 }) => {
  return (
    <div className="starry-background">
      {Array.from({ length: count }, (_, index) => (
        <Star key={index} />
      ))}
    </div>
  );
};

export default StarryBackground;
