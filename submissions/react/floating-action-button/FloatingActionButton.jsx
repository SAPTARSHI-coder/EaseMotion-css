import React from "react";
import "./style.css";

const FloatingActionButton = ({
  icon = "+",
  onClick,
  position = "bottom-right",
}) => {
  return (
    <button
      className={`fab ${position}`}
      onClick={onClick}
      aria-label="Floating Action Button"
    >
      {icon}
    </button>
  );
};

export default FloatingActionButton;