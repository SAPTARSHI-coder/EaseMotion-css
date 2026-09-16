# ease-animated-font-sap

A continuously animated heading where each character bobs up and down in a wave pattern with a color shift, staggered per letter.

## Usage
1. Include `style.css`.
2. Add markup: any heading with `class="animated-font-sap"` and plain text content.
3. Include the JS from `demo.html`, which splits the text into per-character `<span>`s with staggered `animation-delay`.

## Customization
- `char-wave-sap` keyframes: bob height and color shift.
- `i * 0.08s` stagger interval: wave speed across the word.
- Animation duration (`2.4s`) on `.af-char`: how fast each character cycles.

## Notes
- JS only splits text into individual `<span>` elements and assigns staggered delays — the actual bobbing/color animation is pure CSS `@keyframes`, applied identically to every character.
- Spaces get a dedicated `.space` class with fixed width (rather than being wrapped in an animated span) so word gaps don't visually "bob."
- Respects `prefers-reduced-motion`: per-character animation is disabled, text displays as a normal static heading.