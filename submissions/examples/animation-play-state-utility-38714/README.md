# Animation Play State Utility Example (`animation-play-state`)

This submission resolves issue #38714 by providing a practical demonstration of the `animation-play-state` CSS property, highlighting its importance for accessibility (WCAG 2.2.2 Pause, Stop, Hide).

## Overview
Continuous CSS animations (like infinite tickers, bouncing icons, or spinning loaders) can be distracting or cause motion sickness for some users. To comply with web accessibility standards, developers must provide a way for users to pause these animations. The `animation-play-state` property is the perfect CSS-only tool for this job.

## Features
- **WCAG Compliance Demo:** Demonstrates how to easily pause continuous animations on hover or focus using the `:hover` and `:focus-within` pseudo-classes combined with `animation-play-state: paused`.
- **Marquee Ticker Example:** A horizontal news ticker that automatically pauses when a user hovers over it to read a specific headline.
- **Interactive Checkbox Toggle:** Shows how to use the CSS Checkbox Hack (`#pause-animations:checked ~ .container .animated-element`) to give users a global "Pause All Animations" toggle switch entirely without JavaScript.

## Files
- `demo.html`: The HTML structure containing the ticker and the global animation toggle checkbox.
- `style.css`: The CSS demonstrating the `animation-play-state` utility.
