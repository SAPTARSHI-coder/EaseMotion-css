# Catapult QR Code Display

A pure-CSS animated QR code display component for EaseMotion CSS, inspired by real estate listing UI patterns. The QR code card "launches" into view with a catapult-style arc, rotation, and settle animation.

## Features
- Pure CSS — no JavaScript required
- EaseMotion-style keyframe animation (`ease-catapult-launch`)
- Fully responsive
- Respects `prefers-reduced-motion` for accessibility

## Usage
1. Include `style.css` in your project.
2. Add the markup structure from `demo.html`:
```html
   <div class="catapult-qr-card">
     <img class="catapult-qr-image" src="your-qr.png" alt="Description of the QR code destination">
     <p class="catapult-qr-caption">Your caption</p>
   </div>
```
3. Replace the QR image `src` and `alt` text with your own.

## Demo
Open `demo.html` in a browser to preview the animation.

## Accessibility
- QR image includes descriptive `alt` text.
- Animation is automatically disabled when the user has `prefers-reduced-motion: reduce` set.

## Credits
Created for issue #41978 — EaseMotion CSS.