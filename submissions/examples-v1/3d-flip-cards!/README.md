# 3D Flip Cards Example

This is a self-contained example demonstrating how to create interactive 3D flipping cards using pure CSS, seamlessly integrated with **EaseMotion CSS** utility classes.

## Features
- 🔄 Smooth 3D Y-axis rotation on hover/focus using CSS `transform-style: preserve-3d`.
- ⚡ Built-in EaseMotion classes for layout (`ease-flex`, `ease-gap-8`), entrance animations (`ease-fade-in`, `ease-delay-*`), and styling (`ease-bg-slate-800`, `ease-rounded-xl`).
- ♿ Fully accessible: Respects `prefers-reduced-motion` and supports keyboard `focus-within` triggering.
- 🚫 Zero JavaScript required.

## How to Use
1. Ensure the EaseMotion CSS CDN is linked in your `<head>` (already included in `demo.html`).
2. Link the `style.css` file.
3. Copy the `.flip-card` HTML structure and customize the front/back content.

## Customization
- Change the flip direction by modifying `rotateY(180deg)` to `rotateX(180deg)` in `style.css`.
- Adjust the animation speed by changing the `0.6s` value in the `.flip-card-inner` transition property.