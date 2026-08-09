# Parallax Depth Scroll Card Grid (High-Contrast Accessibility Edition)

A striking, modern portfolio grid designed with a focus on high-contrast accessibility while maintaining a premium aesthetic. It features dynamic scroll-based parallax depth effects, neon accents, and sharp typography.

## Features

- **High-Contrast Design**: Utilizes a pure black background with vibrant neon accents (Cyan, Yellow, Pink) and pure white text. Borders are bold (3px) to ensure clear element separation.
- **Accessible Interactions**: Includes clear `:focus` states, high contrast ratios, and structural semantic HTML. Interactive elements like buttons have explicit dashed outlines on focus.
- **Scroll Parallax Effect**: A lightweight JavaScript scroll listener applies dynamic `translateY` transforms to individual cards based on a custom `data-speed` attribute, creating a 3D depth illusion.
- **Grayscale to Color Hover**: Images are filtered with high-contrast grayscale by default and reveal their full vibrant color upon hover or focus, engaging the user without being overwhelming.

## Files Included

- `demo.html`: The semantic HTML layout featuring the grid, placeholder content, and the lightweight parallax script.
- `style.css`: High-contrast styling with CSS variables, responsive grid layout, and interactive transitions.

## Usage Guide

1. Open `demo.html` in your browser.
2. Scroll down the page to observe the cards moving at different speeds (parallax).
3. Hover over or use the keyboard (Tab) to focus on the cards to see the grayscale-to-color image transition and neon button fills.
4. To adjust the parallax speed of a card, change the `data-speed` attribute value in the HTML (e.g., `data-speed="0.2"` to `0.8`).
