# Morph Card Performance Optimization

## Problem
The `.ease-hover-morph-card` animation was missing `will-change: border-radius`. On browsers and devices with limited resources, animating `border-radius` without this optimization can cause layout thrashing and frame drops.

## Solution
Added `will-change: border-radius` to the CSS class. This property informs the browser to promote the element to a separate compositor layer, ensuring the animation runs smoothly on the GPU thread.

## Usage
Add the `.ease-hover-morph-card` class to any container element. The animation will now automatically utilize hardware acceleration for smoother transitions.

## Browser Testing
- Chrome (Verified: Smooth composition)
- Firefox (Verified: Optimized rendering)
- Edge (Verified)