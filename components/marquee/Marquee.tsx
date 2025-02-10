import React from "react";
import './mar.css'

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        <span>Order by 5pm for next day delivery! </span> 
        <span>Free Delivery on orders over 50£</span>
        <span>Delivering in Leiscester</span>
      </div>
    </div>
  );
};

export default Marquee;