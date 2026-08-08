# Animation Performance Best Practices Guide

This submission resolves issue #38723 by providing a comprehensive guide and interactive demonstration on writing high-performance CSS animations.

## Overview
Poorly optimized CSS animations can cause "jank" (dropped frames), high CPU usage, and drain device batteries. This guide outlines the golden rules of CSS animation and provides a side-by-side demo comparing bad practices (animating layout/paint properties) with best practices (animating composite properties).

## Golden Rules of CSS Performance
1. **Animate Composite Properties Only:** Only animate `transform` and `opacity`. These are handled by the GPU (Compositor Thread) and do not trigger Layout or Paint recalculations.
2. **Avoid Animating Layout Properties:** Never animate `width`, `height`, `margin`, `padding`, `top`, `left`, etc. This forces the browser to recalculate the layout for every frame (Layout Thrashing).
3. **Avoid Animating Paint Properties:** Avoid animating `color`, `background-color`, or `box-shadow` if possible, as they force the browser to repaint the element on the CPU.
4. **Use `will-change` Sparingly:** Use `will-change: transform` only when necessary to hint to the browser to prepare a GPU layer, but remove it after the animation to free up memory.

## Files
- `README.md`: This guide.
- `demo.html`: An interactive page demonstrating the visual and CPU differences between a "Bad" animation (animating `margin-left` and `width`) and a "Good" animation (animating `transform: translate()` and `transform: scale()`).
- `style.css`: The CSS powering the demonstration.
