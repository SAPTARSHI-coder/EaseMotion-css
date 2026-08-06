import React, { useState } from "react";
import "./style.css";

const ElasticSlideTooltip = ({
  text = "Tooltip",
  position = "top",
  children,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={`tooltip-wrapper tooltip-${position}`}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}

      <div
        className={`tooltip-box ease-slide elastic ${
          show ? "show" : ""
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default ElasticSlideTooltip;