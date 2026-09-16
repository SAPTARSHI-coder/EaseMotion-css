# CSS Float-Drift Tooltip (Minimalist Tech)

A pure CSS tooltip component designed for Minimalist Tech Layouts. It features a smooth, physics-based "Float-Drift" entrance animation triggered on hover, creating an elegant and professional interaction model.

## Features
- Pure CSS and HTML (No JavaScript required).
- The `.tooltip-content` is anchored absolute to the `.tooltip-trigger` parent. 
- The drift animation is achieved by transitioning the tooltip from a pushed down state (`translateY(15px)`) and zero opacity, to its natural resting state (`translateY(0)`) and full opacity upon hovering the trigger element. 
- A bouncy `cubic-bezier` timing function gives the drift a natural, floating feeling.
- Clean, data-focused aesthetic designed for API documentation layouts, utilizing monospace typography for code paths (`JetBrains Mono`).
- Features a pure CSS downward-pointing arrow built using border manipulation on the `::after` pseudo-element.
- Fully accessible with `prefers-reduced-motion` support ensuring degraded, safe static layouts for users sensitive to motion (the positional drift is removed, relying only on a rapid opacity fade).

## Usage
Open `demo.html` in your browser. You will see a list of API endpoints. Hover your mouse over the dashed endpoint paths; a dark tooltip will smoothly drift upwards into view, revealing additional details.

## Files
- `demo.html`: The HTML structure for the layout and the nested tooltip containers.
- `style.css`: The styling, flexbox layouts, and CSS `transform` logic for the hover-driven float-drift effect.
