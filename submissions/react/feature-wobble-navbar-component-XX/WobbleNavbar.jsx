import React from 'react';
import './style.css';

/**
 * WobbleNavbar (Drop State) — EaseMotion CSS
 * Submission by: XX
 *
 * A navbar that drops into view on mount with a smooth wobble
 * settle effect. Respects prefers-reduced-motion.
 */
export default function WobbleNavbar({ children, links = [] }) {
  return (
    <nav
      className="ease-wobble-navbar-XX"
      role="navigation"
      aria-label="Primary"
    >
      <div className="ease-wobble-navbar-XX__inner">
        {links.length > 0 ? (
          <ul className="ease-wobble-navbar-XX__list">
            {links.map((link, i) => (
              <li key={i} className="ease-wobble-navbar-XX__item">
                <a href={link.href} className="ease-wobble-navbar-XX__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          children
        )}
      </div>
    </nav>
  );
}
