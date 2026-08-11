# CSS Holographic Foil Card

A pure CSS card component that simulates a shimmering rainbow holographic foil effect, commonly seen on premium trading cards, built entirely without JavaScript.

## Features
- Pure CSS and HTML (Zero JavaScript or WebGL required).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties (`--card-base-bg`, `--holo-gradient`, etc.) for easy overriding. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), intensifying the neon foil colors in dark mode.
- **Holographic Architecture (Documented in Code)**: 
- To simulate the metallic rainbow sheen purely in CSS, we use a `::before` pseudo-element positioned absolutely over the entire card.
- **The Gradient**: The pseudo-element contains a massive `linear-gradient` filled with rainbow colors (magenta, orange, yellow, green, blue, purple) with transparent buffers on the edges.
- **The Animation**: We set `background-size: 300% 300%` so the gradient extends far beyond the bounds of the card. A `@keyframes` animation smoothly pans `background-position` back and forth, dragging the colors across the surface.
- **The Blend Mode**: The crucial trick is `mix-blend-mode: color-dodge`. This forces the panned rainbow colors to interact with the underlying dark base of the card, blowing out the highlights and creating a metallic, over-exposed physical foil look.
- Fully accessible with `prefers-reduced-motion` support. The shimmering animations and hover lifts are completely disabled for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Watch the foil gradient continuously sweep across the card. Hover over the card to intensify the foil reflection opacity.

## Files
- `demo.html`: The HTML structure containing the base card layout and the content layer.
- `style.css`: The styling, CSS Custom Property theming blocks, and heavily commented mechanics detailing the `mix-blend-mode` trick.
