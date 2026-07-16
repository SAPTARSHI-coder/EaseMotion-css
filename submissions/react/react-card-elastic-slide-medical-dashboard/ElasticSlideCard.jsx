import React from "react";
import "./style.css";

export default function ElasticSlideCard({
  title = "Patient Status",
  value = "Stable",
  children,
}) {
  return (
    <div className="medical-card ease-hover-lift">
      <div className="card-header">
        <h3>{title}</h3>
      </div>

      <div className="card-body">
        <h2>{value}</h2>
        <p>{children}</p>
      </div>

      <button className="card-btn">
        View Details
      </button>
    </div>
  );
}