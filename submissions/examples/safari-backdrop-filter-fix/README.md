# Safari Backdrop Filter Fix

A robust structural pattern to resolve Safari's notorious performance issues, clipping bugs, and frame drops when animating `backdrop-filter: blur()` on UI components like modals (commonly used in Glassmorphism designs).

## Features
- **The Bug Context**: When applying `backdrop-filter` directly to a modal overlay container that also holds child DOM nodes, Apple's WebKit engine struggles immensely during opacity or scale transitions. It constantly repaints the blurred area, causing massive lag and visual artifacts on iOS and MacOS.
- **The Fix**: 
  1. **Layer Separation**: We move the `-webkit-backdrop-filter` property off the parent wrapper and place it on a dedicated, empty `.glass-blur-layer` `<div>` positioned absolutely behind the modal content.
  2. **Hardware Acceleration**: We apply `transform: translateZ(0)` and `will-change: transform` exclusively to this empty blur layer. This forces the browser to composite the blurred background on the GPU as a single flattened texture, completely isolating it from the layout calculations of the modal children.
- **Vendor Prefixes**: Ensuring `-webkit-backdrop-filter` is explicitly declared alongside the standard `backdrop-filter`.

## Usage
Open `demo.html` in Safari (iOS or macOS). 
Click the "Open Glass Modal" button. You will notice that the entrance transition is perfectly smooth, and the vibrant background orbs blur correctly behind the modal without causing the browser to stutter.

## Files
- `demo.html`: The HTML structure demonstrating the separation of the `.glass-blur-layer` and the `.glass-dialog`.
- `style.css`: The styling engine applying the hardware acceleration and webkit prefixes.
