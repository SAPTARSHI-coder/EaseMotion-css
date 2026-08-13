# Responsive Pastel Tooltip V2

A modern, highly polished tooltip component featuring soft pastel aesthetics and playful spring animations.

## Features
- **4-Way Directional Support**: Includes pre-configured CSS classes for placing tooltips on the `top`, `bottom`, `left`, or `right` of the trigger element.
- **Spring Animations**: Uses a custom `cubic-bezier(0.68, -0.55, 0.265, 1.55)` transition to give the tooltips a bouncy, physical "pop" when appearing.
- **CSS-Drawn Arrows**: The directional arrows on the tooltips are drawn entirely using CSS border hacks on the `::after` pseudo-element (no SVG or images required).
- **Responsive Fallback**: Includes a media query that forces `left` and `right` tooltips to behave like `bottom` tooltips on small mobile screens to prevent ugly horizontal scrolling and overflow clipping.
- **Rich Typography**: Styled using the rounded `Nunito` font to match the friendly pastel aesthetic.

## Usage
Include `demo.html` and `style.css` in your project. Wrap your trigger element (like a button) and the tooltip `div` inside a `.tooltip-wrapper` container. Apply the desired directional class (`tip-top`, `tip-bottom`, `tip-left`, `tip-right`) to the tooltip `div`.
