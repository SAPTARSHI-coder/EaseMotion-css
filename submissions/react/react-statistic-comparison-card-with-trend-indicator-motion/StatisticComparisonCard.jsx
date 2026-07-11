import React, { useState } from "react";
import "./style.css";

export default function StatisticComparisonCard({
  title = "Revenue",
  currentValue = "$48,500",
  previousValue = "$44,200",
  percentage = "+9.7%",
  trend = "up",
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`stat-card ${hovered ? "hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="header">
        <h3>{title}</h3>

        <span className={`trend ${trend}`}>
          {trend === "up" ? "▲" : "▼"} {percentage}
        </span>
      </div>

      <div className="values">
        <h2>{currentValue}</h2>
        <p>Previous: {previousValue}</p>
      </div>

      <div className={`indicator ${trend}`}></div>
    </div>
  );
}