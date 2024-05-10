import React from "react";
import image from "./pic.jpg";
import StarryBackground from "./Stars";

const Home = () => {
  return (
    <div>
      <StarryBackground count={5000} />
      <h1>Amanda 'Supernova' Cyrus</h1>
      <img
        src={image}
        alt="Amanda 'Supernova' Cyrus"
        style={{ maxWidth: "40%" }}
      />
      {/* You can add more content here if needed */}
    </div>
  );
};

export default Home;
