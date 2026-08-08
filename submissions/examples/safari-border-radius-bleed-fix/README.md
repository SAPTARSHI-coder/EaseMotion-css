# Safari Border-Radius Bleed Fix

A reliable CSS structural pattern that resolves the infamous WebKit rendering bug where hardware-accelerated child elements bleed outside the rounded corners of their `overflow: hidden` parent container during animations.

## Features
- **The Bug Context**: It is extremely common in modern web design to have a card with rounded corners (`border-radius`, `overflow: hidden`) and an image inside that scales up slightly on hover (`transform: scale()`). In Apple's WebKit engine (Safari on macOS and iOS), CSS transforms promote the child image to the hardware GPU compositor layer. However, because the parent wrapper remains on the CPU software layer, the GPU doesn't understand the parent's clipping boundaries. The result: during the transition, the sharp, square corners of the image pierce through the parent's rounded corners.
- **The Fix**: To solve this, we must force Safari to process the parent's clipping mask on the hardware layer as well.
  1. We apply `transform: translateZ(0)` to the parent. This elevates the parent to the GPU, syncing the clipping layers.
  2. As a bulletproof fallback for older WebKit builds or complex nested layouts, we also apply `-webkit-mask-image: -webkit-radial-gradient(white, black);`, which mathematically forces a pixel-perfect alpha crop on the element.

## Usage
Open `demo.html` in Safari (macOS or iOS).
- Hover over the **Buggy Card**. Look closely at the top corners. As the image scales, the sharp square corners of the photo will bleed outside the card's 24px border radius.
- Hover over the **Fixed Card**. The hardware clipping masks perfectly contain the scaled image to the rounded corners throughout the entire transition.

## Files
- `demo.html`: The HTML structure demonstrating the side-by-side card comparison.
- `style.css`: The styling engine containing the WebKit hardware mask fixes.
