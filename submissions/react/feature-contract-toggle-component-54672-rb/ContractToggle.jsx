import React, { useState, useEffect } from "react";
import "./style.css";

const ContractToggle = ({ checked, onChange, label = "Toggle switch" }) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const handleToggle = () => {
    setShouldAnimate(true);
    onChange && onChange(!checked);
  };

  useEffect(() => {
    if (shouldAnimate) {
      const timer = setTimeout(() => setShouldAnimate(false), 400);
      return () => clearTimeout(timer);
    }
  }, [shouldAnimate]);

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={handleToggle}
      className={`contract-toggle-btn-rb ${checked ? "checked-rb" : ""} ${shouldAnimate ? "contract-active-rb" : ""}`}
    >
      <div className="contract-toggle-thumb-rb" />
    </button>
  );
};

export default ContractToggle;
