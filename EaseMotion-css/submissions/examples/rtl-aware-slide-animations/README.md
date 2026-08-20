# RTL-Aware Slide Animations

A smart CSS architecture designed to make `transform: translateX()` animations fully compatible with Right-to-Left (RTL) reading directions (such as Arabic or Hebrew).

## Features
- **The Bug Context**: In CSS, `transform: translateX()` operates on physical coordinates, not logical coordinates. A `translateX(-100%)` will *always* slide an element in from the physical left side of the screen. If a website switches to RTL mode (`dir="rtl"`), the logical start of the page is now the right side, but the hardcoded animation will still slide in from the left, ruining the UI flow.
- **The Fix**: Because there is currently no native `transform: translateInline()` supported in CSS, we use a CSS Variable Direction Multiplier.
  - We declare `--dir-multiplier: 1` globally.
  - We declare `--dir-multiplier: -1` on `[dir="rtl"]`.
  - In our `@keyframes`, we wrap the translation in a `calc()`: `translateX(calc(-100px * var(--dir-multiplier)))`.
  - The animation automatically flips its axis perfectly when the HTML direction changes!

## Usage
Open `demo.html` in your browser.
1. Observe the animations sliding in from the Left (the logical start in LTR).
2. Click the "Switch to RTL Mode" button.
3. Observe the buggy animation still slides from the Left (which is now the logical *end*). 
4. Observe the fixed animation perfectly flips its axis and slides in from the Right (the new logical start).

## Files
- `demo.html`: The HTML structure containing the toggle button to swap the `<html dir="...">` attribute.
- `style.css`: The styling engine defining the multiplier logic and the `calc()` keyframes.
