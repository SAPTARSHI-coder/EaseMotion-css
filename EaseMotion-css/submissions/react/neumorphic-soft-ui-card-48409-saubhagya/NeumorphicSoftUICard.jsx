import React from "react";
import "./style.css";

export default function NeumorphicSoftUICard({
  title = "Neumorphic Soft UI",
  description = "Modern soft UI card with dual-shadow effects.",
  tag = "Design",
}) {
  return (
    <div className="nm-card">
      <div className="nm-card-image-placeholder">
        <span className="nm-icon">✦</span>
      </div>

      <div className="nm-card-content">
        <span className="nm-card-tag">{tag}</span>

        <h3 className="nm-card-title">
          {title}
        </h3>

        <p className="nm-card-text">
          {description}
        </p>

        <button className="nm-btn">
          Explore
        </button>
      </div>
    </div>
  );
}