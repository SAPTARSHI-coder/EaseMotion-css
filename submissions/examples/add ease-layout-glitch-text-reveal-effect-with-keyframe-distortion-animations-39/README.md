# Glitch Text Reveal Effect (High-Contrast Accessibility Edition)

A striking, modern glitch text reveal component that places a strong emphasis on web accessibility (`a11y`). It utilizes high-contrast colors, clear focus states, and respects user motion preferences.

## Features

- **High Contrast Design**: Built with a pure black (`#000000`) and pure white (`#FFFFFF`) foundation, accented with WCAG-compliant high-contrast Neon Yellow and Cyan.
- **Prefers-Reduced-Motion Support**: Crucially, the glitch animation is completely disabled for users who have configured their OS/browser to reduce motion, replacing the potentially jarring glitch with a subtle, safe border flash fallback via JavaScript and CSS media queries.
- **Keyboard & Screen Reader Accessible**: The trigger button features highly visible dashed outlines on `:focus-visible` and the semantic structure uses `aria-labels` and `aria-labelledby` for clear context.
- **Performant CSS Glitch**: The animation uses the modern `clip-path: inset()` property alongside `@keyframes` for hardware-accelerated, jank-free text distortion.

## Files Included

- `demo.html`: The semantic HTML layout featuring the accessible card grid, the glitch text, and the JavaScript logic that honors motion preferences.
- `style.css`: The styling including CSS variables, high-contrast borders, focus states, and the core `@keyframes` animations.

## Usage Guide

1. Open `demo.html` in your web browser.
2. The glitch effect will run automatically on load (unless your system has 'reduced motion' enabled).
3. Click the "RUN DIAGNOSTIC" button to manually trigger the animation.
4. Try navigating the page with the `Tab` key to observe the high-contrast focus rings on interactive elements.
