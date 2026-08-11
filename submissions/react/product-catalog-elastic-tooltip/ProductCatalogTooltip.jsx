import React, { useState } from "react";
import "./style.css";

const ProductCatalogTooltip = ({
  productName = "Wireless Headphones",
  price = "$99.99",
  description = "Premium sound quality with noise cancellation.",
  position = "top",
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={`tooltip-wrapper tooltip-${position}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      <div className="tooltip-trigger" tabIndex={0}>
        {children}
      </div>

      <div
        className={`tooltip-card ease-slide ease-hover-lift ${
          isVisible ? "show" : ""
        }`}
        role="tooltip"
      >
        <h4 className="product-title">{productName}</h4>
        <p className="product-price">{price}</p>
        <p className="product-description">{description}</p>
      </div>
    </div>
  );
};

export default ProductCatalogTooltip;