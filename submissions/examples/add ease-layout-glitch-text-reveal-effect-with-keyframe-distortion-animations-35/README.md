# Glitch Text Reveal Effect (Glassmorphic Style)

A highly aesthetic, modern web component that combines the trending glassmorphism design style with a clean, high-fidelity glitch text reveal animation.

## Features

- **Premium Glassmorphism**: Features a beautiful frosted glass card (`backdrop-filter: blur(24px)`) layered over animated, vibrant background color blobs that refract through the glass.
- **Subtle Glitch Animation**: Unlike chaotic cyberpunk glitches, this style utilizes soft translucent text shadows (Cyan and Pink) and smooth linear clip-path animations to create an elegant, controlled distortion.
- **CSS-Only Interaction**: The glitch effect and 3D card tilt are driven entirely by CSS `:hover` states, ensuring excellent performance without the need for JavaScript event listeners.
- **Modern Typography & Gradients**: Uses the 'Outfit' font family with a subtle white-to-transparent text gradient (`background-clip: text`) for a highly polished look.

## Files Included

- `demo.html`: The HTML structure containing the animated background blobs and the glassmorphic card layout.
- `style.css`: The stylesheet featuring CSS variables, advanced glassmorphism styling, and the `@keyframes` for the clip-path glitch distortion.

## Usage Guide

1. Open `demo.html` in your web browser.
2. Observe the slowly animating background blobs creating a dynamic environment behind the glass card.
3. Hover your mouse over the glass card to trigger the continuous text glitch animation and the subtle 3D hover transform.
4. To change the text, modify the content of the `<h1>` tag and its `data-text` attribute in `demo.html`.
