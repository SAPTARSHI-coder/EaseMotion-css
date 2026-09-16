# CSS Shimmer-Sweep Stepper

A pure CSS stepper component designed for Product Catalog Layouts and multi-step configuration flows. It features an elegant, continuous shimmer sweep animation on active and completed steps to guide the user's attention forward.

## Features
- Pure CSS and HTML (No JavaScript required).
- Continuous `@keyframes shimmer-sweep` animation applied using the `::after` pseudo-element.
- Dynamic `linear-gradient` that translates across the element to create a glossy shine effect.
- The `shimmer-active` class can be applied to both stepper circles and primary call-to-action buttons.
- Clean, responsive flexbox layout that adapts to mobile viewports.
- Fully accessible with `prefers-reduced-motion` support ensuring degraded, safe static layouts for users sensitive to motion.

## Usage
Open `demo.html` in your browser. You will see a 4-step configuration flow. The completed step, the active step, and the primary "Next Step" button all feature the continuous shimmer sweep animation to indicate progress and primary actions.

## Files
- `demo.html`: The HTML structure for the stepper layout, connection lines, and action buttons.
- `style.css`: The styling, flexbox layouts, and `@keyframes shimmer-sweep` animations.
