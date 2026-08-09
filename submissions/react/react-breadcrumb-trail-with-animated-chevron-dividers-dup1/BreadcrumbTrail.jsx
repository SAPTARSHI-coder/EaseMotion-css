import React, { useState } from "react";
import "./style.css";

const BreadcrumbTrail = ({
  items = [],
  onNavigate = () => {},
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <nav aria-label="Breadcrumb" className="ease-fade-in">
      <ol className="breadcrumb-container">
        {items.map((item, index) => (
          <li
            key={item.label}
            className="breadcrumb-item"
          >
            <button
              className={`breadcrumb-button ${
                item.active ? "active" : ""
              } ease-hover-grow`}
              onClick={() => !item.active && onNavigate(item)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              disabled={item.active}
            >
              {item.label}
            </button>

            {index !== items.length - 1 && (
              <span
                className={`chevron ease-slide-in-right ${
                  hoveredIndex === index ? "move" : ""
                }`}
              >
                ❯
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadcrumbTrail;