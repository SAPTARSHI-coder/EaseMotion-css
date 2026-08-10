# CSS Ripple-Wave Feature Grid (Glassmorphism UI)

A pure CSS interactive feature grid component designed for Glassmorphism UI Layouts. It features a continuous, concentric "Ripple-Wave" animation that emanates from the top-left corner of the cards upon hover, mimicking sonar pings or water ripples.

## Features
- Pure CSS and HTML (No JavaScript required for interactions or animations).
- **Glassmorphism Aesthetic**: The feature cards (`.glass-card`) utilize `backdrop-filter: blur(16px)` layered over large, softly glowing, ambient background orbs (`.bg-orb`).
- **The Ripple-Wave Effect**: 
- The `.feature-card` acts as the container and crucially utilizes `overflow: hidden` to keep the expanding waves confined within the card's boundaries.
- Inside each card, hidden behind the text but above the background blur, are three absolutely positioned `.ripple` elements.
- When the card is hovered (`.feature-card:hover .ripple`), an `@keyframes` animation (`ripple-wave`) is triggered on these elements. 
- The keyframes expand the elements massively (`transform: scale(4)`), starting with a thick semi-transparent white border that thins out and fades to `opacity: 0` as it grows, perfectly simulating a physical wave.
- We utilize utility classes (`.r-1`, `.r-2`, `.r-3`) with staggered `animation-delay` values (0s, 1s, 2s) to ensure the waves are generated continuously and concentrically as long as the user hovers over the card.
- **Card Hover Interactions**: Hovering also slightly elevates the card (`transform: translateY(-5px)`), brightens the border, and mildly scales up the featured icon wrapper.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the continuous ripple-wave keyframes, the card elevation transformations, and icon scaling are completely disabled. The interactions safely fall back to standard CSS hover state changes (like text color brightening).

## Usage
Open `demo.html` in your browser. You will see a mock Platform Capabilities grid. Hover your mouse over any of the six feature cards. You will observe the card lift slightly while concentric circular waves begin to ripple outward from the top-left corner, cascading across the frosted glass surface.

## Files
- `demo.html`: The HTML structure for the layout, detailing the grid implementation and the hidden `.ripple` nodes required inside each card to achieve the effect.
- `style.css`: The styling, glassmorphism tokens, and the complex staggered `@keyframes` driving the continuous ripple-wave mechanics.
