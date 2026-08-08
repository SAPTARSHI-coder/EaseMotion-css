import React, { useState } from "react";
import "./style.css";

const ShimmerSaasModal = ({
  title = "SaaS Product Preview",
  children = "Showcase your SaaS platform with an elegant animated modal.",
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="ease-hover-lift saas-open-btn"
        onClick={() => setOpen(true)}
      >
        View Product
      </button>

      {open && (
        <div className="saas-overlay ease-fade-in">
          <div className="saas-modal">
            <div className="shimmer-animation"></div>

            <button
              className="saas-close"
              onClick={() => setOpen(false)}
            >
              ×
            </button>

            <div className="modal-content">
              <span className="badge">SaaS</span>

              <h2>{title}</h2>

              <p>{children}</p>

              <button
                className="launch-btn ease-hover-lift"
                onClick={() => setOpen(false)}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShimmerSaasModal;