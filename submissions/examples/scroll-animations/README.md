# Scroll-Triggered Animations

A lightweight, vanilla JavaScript utility using the native `IntersectionObserver` API paired with CSS keyframes to trigger animations as elements enter the viewport.

## Files
- `ease-scroll.js` - A tiny script (<1KB) that adds the `ease-in-view` class to elements when they become visible.
- `style.css` - Contains the hidden pre-states, keyframes, and transition classes.
- `demo.html` - Interactive demonstration.

## Details
This addresses the "Scroll-triggered animations (IntersectionObserver)" requirement currently listed as "Planned" in the project Roadmap. 

Simply add the class `ease-scroll-trigger` along with your desired animation class (e.g., `ease-scroll-fade-up`) to any element. The observer will detect when it enters the viewport and trigger the CSS animation natively.
