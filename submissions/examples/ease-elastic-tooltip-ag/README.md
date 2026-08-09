# Bouncy Elastic Tooltip

A clean, informative tooltip that appears on hover with a satisfying, bouncy elastic pop-in animation.

## Preview

Open `demo.html` in your browser and hover your mouse over the button. The tooltip will scale up and "bounce" slightly past its final size before settling.

## Implementation Details

- **No JavaScript:** The tooltip's visibility is managed entirely by the CSS `:hover` pseudo-class on the parent wrapper.
- **The Bounce:** The key to the "elastic" or "bouncy" effect is the `transition` timing function. Instead of standard `ease` or `linear`, it uses a custom `cubic-bezier(0.68, -0.55, 0.265, 1.55)`. 
- **Overshoot:** The fourth value in the cubic-bezier (`1.55`) is greater than 1. This tells the browser to temporarily overshoot the final target value (scaling past `1`) before snapping back into place, creating the physical spring-like feeling.
- **Initial State:** The tooltip starts scaled down to half size (`scale(0.5)`) and hidden (`opacity: 0`).
