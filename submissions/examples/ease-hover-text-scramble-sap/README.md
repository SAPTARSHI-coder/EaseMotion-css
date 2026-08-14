# ease-hover-text-scramble-sap

Hovering text triggers a per-character scramble decode effect, resolving back to the original text with a staggered reveal.

## Usage
1. Include `style.css`.
2. Add markup with matching text in `data-text`:
```html
   <span class="text-scramble-sap" data-text="YOUR TEXT">YOUR TEXT</span>
```

## Customization
- `CHARS`: the random-character pool used during scrambling.
- Per-character `start`/`end` frame windows for stagger speed.
- `.scr-char.active` color for mid-scramble characters.

## Notes
- `requestAnimationFrame` drives the scramble since text content can't be randomized via CSS keyframes.
- `cancelAnimationFrame` on repeated hovers prevents overlapping scramble loops from stacking.
- Respects `prefers-reduced-motion`: checked via `matchMedia` in JS, and the scramble function returns immediately without running — hovering simply does nothing, leaving the static original text, rather than attempting a reduced version of the effect.