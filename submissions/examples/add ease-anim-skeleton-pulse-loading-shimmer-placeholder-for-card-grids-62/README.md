# Skeleton Pulse Loading Shimmer Placeholder (Vibrant Gradient Version)

A state-of-the-art loading placeholder designed to elevate the user experience while data is being fetched. Instead of standard gray bars, this component features premium glassmorphic cards and a vibrant, sweeping gradient shimmer animation.

## Features

- **Vibrant Shimmer Animation**: Utilizes CSS pseudo-elements (`::after`) and `@keyframes` to sweep a rich, multi-color gradient (purple to pink) across the skeleton blocks, creating a dynamic pulse effect.
- **Cascading Animation Delays**: Applies staggered `animation-delay` properties to different skeleton parts (image, avatar, text lines) to create a beautiful, cascading fluid motion rather than a flat, uniform flash.
- **Glassmorphism Aesthetic**: Cards are built with dark translucent backgrounds, subtle borders, and `backdrop-filter: blur`, ensuring they look incredible over complex backgrounds.
- **Responsive Card Grid**: Uses CSS Grid with `auto-fit` to ensure the placeholders scale elegantly across mobile devices, tablets, and desktop monitors.

## Files Included

- `demo.html`: The HTML structure containing a grid of skeleton cards and a toggle button to simulate a "loaded" state.
- `style.css`: The styling including CSS variables, layout logic, glassmorphic effects, and the shimmer keyframe animations.

## Usage Guide

1. Open `demo.html` in your web browser.
2. Observe the vibrant, cascading shimmer animations traversing the placeholder blocks.
3. Hover over the cards to see the interactive transform and border-color transition.
4. Click the "Simulate Loaded State" button at the bottom to see how the skeleton transitions to static shapes, demonstrating how you would replace these nodes in a real React/Vue application.
