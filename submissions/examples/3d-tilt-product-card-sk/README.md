# 3D Tilt Product Card

A reusable, high-performance 3D tilt product card effect designed for premium e-commerce websites, product showcases, and interactive portfolios. Seamlessly integrates with EaseMotion CSS utilities.

## Features

- 🎮 **Interactive 3D Tilt:** Tracks cursor and touch movements to calculate smooth `rotateX` and `rotateY` transforms in real-time.
- 🌌 **Parallax Depth:** Internal card elements (like the product image and text) use `translateZ` to visually float off the card surface during the tilt.
- 🌑 **Dynamic Shadows:** Casts a dynamic `box-shadow` that reacts directly to the mouse position for enhanced, realistic lighting.
- ⚡ **Performant:** Utilizes `requestAnimationFrame` and GPU-accelerated transforms (`preserve-3d`, `will-change`) to ensure smooth 60fps rendering without jank.
- 🛑 **Prefers-Reduced-Motion:** JS completely aborts execution and CSS transforms are zeroed out if a user requests reduced motion at the OS level.

## Usage

1. Copy the HTML structure from `demo.html`. Ensure your wrapper element has the `data-tilt` attribute so the Javascript can find it.
2. Include `style.css` to establish the `perspective` context and `preserve-3d` relationships.
3. Include `script.js` to handle the mouse tracking, touch tracking, and physics calculations.

## Customization

- To change the maximum tilt angle, adjust the `const maxTilt = 15;` variable in `script.js`.
- To adjust how far the image "floats" off the card for the parallax effect, modify the `transform: translateZ(40px);` value in `style.css`.

## Contributed by
- Man1ac-1773
