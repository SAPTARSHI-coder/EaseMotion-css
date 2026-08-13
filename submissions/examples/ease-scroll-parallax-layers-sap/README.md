# ease-scroll-parallax-layers-sap

A layered scene (mountains, stars, text) where each layer moves at a different rate as the section scrolls through the viewport, creating depth via classic multi-layer parallax.

## Usage
1. Include `style.css`.
2. Add markup: multiple `.layer` divs, each with a `data-speed` value, inside `.parallax-layers-sap`.
3. Attach the scroll-linked transform calculation from `demo.html`.

## Customization
- `data-speed` per layer: relative movement rate — lower values (closer to 0) move slower ("distant"), higher values move faster ("closer").
- Layer visuals — swap the gradient/star backgrounds for real images.
- The `-0.3` multiplier in JS: overall parallax intensity.

## Notes
- Each layer's `transform: translateY()` offset is computed from the section's position relative to the viewport, multiplied by its own `data-speed`, so layers naturally separate visually without needing separate scroll listeners per layer.
- `will-change: transform` hints the browser to optimize these layers for frequent transform updates.
- Respects `prefers-reduced-motion`: checked via `matchMedia` in JS, and the update function returns immediately without computing any transform when active; a CSS `!important` rule additionally forces layers to their neutral position as a defensive fallback.