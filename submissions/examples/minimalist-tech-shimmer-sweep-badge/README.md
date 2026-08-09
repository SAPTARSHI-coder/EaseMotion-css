# CSS Shimmer-Sweep Badge (Minimalist Tech)

A pure CSS badge component designed for Minimalist Tech Layouts. It features a continuous, angled "Shimmer-Sweep" animation that periodically passes over the badge, giving it a premium, metallic, or glassmorphic feel without being overly distracting.

## Features
- Pure CSS and HTML (No JavaScript required).
- **Minimalist Tech Aesthetic**: Clean pill-shaped layout, sharp uppercase `Inter` typography, and built-in semantic color variants (Default, Success, Warning, Premium/Dark).
- **The Shimmer-Sweep Effect**: 
- A dedicated utility class `.shimmer-sweep` handles the animation. The badge container uses `overflow: hidden` to contain the effect.
- The effect is achieved using a pseudo-element (`::after`) to create a light beam. We use `linear-gradient` to create a semi-transparent white beam that fades out on the edges.
- We apply `transform: skewX(-20deg)` to this pseudo-element to create a sharp, slanted leading edge for the light beam, matching the technical aesthetic.
- The initial state places the beam completely off-screen to the left (`left: -100%`).
- An infinite `@keyframes` animation (`sweep-beam`) translates the pseudo-element across the badge to the right (`left: 200%`).
- **Pacing**: The animation has a duration of `3s`. However, the sweeping keyframes only operate between `0%` and `20%` of that duration. This intelligently creates a long, 2.4-second pause between each rapid sweep, preventing the animation from becoming annoying or overly distracting to the user.
- **Z-Indexing**: The text and icon content is set to `position: relative; z-index: 2;` to ensure they sit clearly above the passing light beam.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the continuous shimmer sweep pseudo-element is completely removed via `display: none`, leaving a clean, static semantic badge.

## Usage
Open `demo.html` in your browser. You will see a row of mock "System Badges". Watch them closely to observe the slanted light beam rapidly sweeping across them every few seconds.

## Files
- `demo.html`: The HTML structure for the badges, showcasing how to apply semantic color variants alongside the `.shimmer-sweep` animation class.
- `style.css`: The styling, minimalist tech design tokens, the pseudo-element `linear-gradient` construction, and the specific `@keyframes` driving the paced sweeping effect.
