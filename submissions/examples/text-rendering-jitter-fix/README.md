# Text Rendering Jitter Fix

A CSS architectural pattern that resolves the infamous sub-pixel font wobbling and weight-shifting bug that occurs when animating elements containing text via CSS transforms (like `transform: scale()` or `transform: translateY()`).

## Features
- **The Bug Context**: When you apply a `transform` animation (like a hover scale) to a button, modern browsers temporarily promote that element to a hardware-accelerated GPU layer for smooth animation. However, standard text rendering on the CPU uses sub-pixel anti-aliasing (making text look slightly bolder), while GPU rendering uses grayscale anti-aliasing (making text look slightly thinner). As the animation starts, the text becomes blurry and thin. The moment the animation ends, the element drops off the GPU, and the text aggressively snaps back to being sharp and bold. This creates an incredibly jarring "wobble" or "jitter" effect.
- **The Fix**: 
  1. We apply `transform: translateZ(0)` and `backface-visibility: hidden` to permanently elevate the element to the GPU layer, avoiding the hardware-to-software snapping transition at the end of the animation.
  2. We apply `-webkit-font-smoothing: antialiased` and `-moz-osx-font-smoothing: grayscale` to force the text to render with standard grayscale anti-aliasing *all the time*. This guarantees the text weight remains perfectly mathematically consistent before, during, and after the scale animation.

## Usage
Open `demo.html` in a WebKit browser (Chrome or Safari). 
- Hover the **Buggy Button** and release. Watch the text weight specifically right at the moment the animation ends; you will see it "pop" or snap slightly heavier.
- Hover the **Fixed Button** and release. The text remains flawlessly crisp and consistent throughout the entire interaction lifecycle.

## Files
- `demo.html`: The HTML structure demonstrating the side-by-side button comparison.
- `style.css`: The styling engine containing the font-smoothing and GPU layering fixes.
