# CSS Elastic-Slide Tooltip (Minimalist Tech)

A pure CSS tooltip component designed for Minimalist Tech Layouts. It features a playful, physics-based "Elastic-Slide" entrance animation triggered on hover, creating a satisfying and modern interaction model.

## Features
- Pure CSS and HTML (No JavaScript required).
- The `.tooltip-content` is anchored absolute to the `.tooltip-trigger` parent (in this layout, the entire metric card).
- The slide animation is achieved by transitioning the tooltip from a pushed-out state (`translateX(40px)`) and zero opacity, to its natural resting state (`translateX(0)`) upon hovering the trigger element. 
- A heavily exaggerated `cubic-bezier(0.68, -0.55, 0.265, 1.55)` timing function gives the slide a snappy, elastic, "spring-like" feeling that overshoots its target before settling.
- Clean, data-focused aesthetic designed for metric dashboards, utilizing a high-contrast dark tooltip against light cards.
- Features a pure CSS side-pointing arrow built using border manipulation on the `::after` pseudo-element.
- Includes a smart media query breakpoint (`max-width: 768px`) that automatically repositions the tooltips from the right side to the bottom on smaller screens to prevent horizontal viewport overflow.
- Fully accessible with `prefers-reduced-motion` support ensuring degraded, safe static layouts for users sensitive to motion (the positional elastic slide is removed, relying only on a rapid opacity fade).

## Usage
Open `demo.html` in your browser. You will see a grid of system metrics. Hover your mouse anywhere over a metric card; a dark tooltip will snap elastically into view from the right side, revealing historical context.

## Files
- `demo.html`: The HTML structure for the metrics dashboard and the nested tooltip containers.
- `style.css`: The styling, grid layouts, and CSS `transform` logic for the elastic-slide effect and responsive repositioning.
