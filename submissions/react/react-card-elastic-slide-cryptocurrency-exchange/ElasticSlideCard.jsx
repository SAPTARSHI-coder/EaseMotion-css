import React from "react";
import "./style.css";

const ElasticSlideCard = ({
  title,
  subtitle,
  price,
  change,
}) => {
  return (
    <div className="crypto-card">
      <div className="crypto-header">
        <h3>{title}</h3>
        <span>{subtitle}</span>
      </div>

      <div className="crypto-body">
        <h2>{price}</h2>
        <p>{change}</p>
      </div>

      <button>Trade</button>
    </div>
  );
};

export default ElasticSlideCard;