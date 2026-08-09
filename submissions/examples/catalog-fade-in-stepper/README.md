# CSS Fade-In Stepper

A clean, pure CSS stepper component designed for Product Catalog Layouts and multi-step configuration flows. It utilizes a smooth `fade-in-up` animation for elements entering the view, providing a polished and gentle user experience.

## Features
- Pure CSS and HTML (No JavaScript required).
- Reusable `.fade-in-element` utility class utilizing an `@keyframes fade-in-up` animation.
- Smooth `translateY` and `opacity` transition combination using a custom `cubic-bezier` timing function for a natural feeling entrance.
- Clean, responsive flexbox layout that adapts to mobile viewports.
- Fully accessible with `prefers-reduced-motion` support ensuring degraded, safe static layouts for users sensitive to motion.

## Usage
Open `demo.html` in your browser. Upon load (or simulating a step change), the active step indicator and the main content area will smoothly fade in and slide up into position, drawing the user's attention to the active content.

## Files
- `demo.html`: The HTML structure for the stepper layout, connection lines, and the content area with applied fade-in classes.
- `style.css`: The styling, flexbox layouts, and `@keyframes` animation logic.
