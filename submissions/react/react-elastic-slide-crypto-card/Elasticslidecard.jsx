import React from "react";
import "./style.css";

const ElasticSlideCard = ({
  coinName = "Bitcoin",
  coinSymbol = "BTC",
  price = "$67,240.55",
  change = "+2.34%",
  isPositive = true,
  icon = "🪙",
}) => {
  return (
    <div className="elastic-slide-card ease-fade-in ease-hover-lift">
      <div className="elastic-slide-card__inner">
        <div className="elastic-slide-card__front">
          <div className="elastic-slide-card__icon">{icon}</div>
          <h3 className="elastic-slide-card__name">{coinName}</h3>
          <span className="elastic-slide-card__symbol">{coinSymbol}</span>
        </div>

        <div className="elastic-slide-card__back">
          <p className="elastic-slide-card__price">{price}</p>
          <p
            className={`elastic-slide-card__change ${
              isPositive
                ? "elastic-slide-card__change--up"
                : "elastic-slide-card__change--down"
            }`}
          >
            {change}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ElasticSlideCard;