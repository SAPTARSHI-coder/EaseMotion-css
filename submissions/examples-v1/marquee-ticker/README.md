# CSS-Only Infinite Marquee Ticker with Pause-on-Hover

## Overview
A pure CSS infinite scrolling marquee ticker with hover pause functionality. Uses only CSS animations and no JavaScript.

## Key Features
- **Infinite scroll**: Seamless looping animation
- **Pause on hover**: Animation pauses when hovering over the marquee
- **Accessibility**: Respects `prefers-reduced-motion` media query
- **Pure CSS**: No JavaScript dependencies
- **Responsive**: Works on all screen sizes

## Technical Details
- Uses `animation: scroll-left 20s linear infinite`
- Duplicated content for seamless loop
- `animation-play-state: paused` on hover
- GPU-accelerated with `transform: translateX()`

## Browser Support
Works on all modern browsers supporting CSS animations.
