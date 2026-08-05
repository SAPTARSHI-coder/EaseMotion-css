import React, { useState } from "react";
import "./style.css";

export default function ProductCatalogTooltip({
  productName,
  price,
  description,
  children,
}) {
  const [show, setShow] = useState(false);

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}

      {show && (
        <div className="tooltip-card">
          <h3>{productName}</h3>
          <p>{description}</p>
          <strong>{price}</strong>
        </div>
      )}
    </div>
  );
}