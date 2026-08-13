# ease-typewriter

Classic typewriter text reveal with a blinking caret — pure CSS, driven by an animated `width` on a `ch`-unit container.

## Usage
1. Include `style.css`.
2. Add markup, setting `--type-width` to roughly the character count of your text (in `ch` units):
```html
   <h1 class="typewriter" style="--type-width: 20ch;">Hello, I am typing...</h1>
```

## Customization
- `--type-width`: must roughly match text length for the reveal to land exactly at the last character. Measure in `ch` (≈ width of one monospace character).
- `typing` animation duration (`3s`) and `steps(30, end)`: match the step count to your character count for even per-letter reveal timing.
- `blink-caret` duration controls caret blink speed.

## Notes
- Monospace font (`Courier New`) is required for the `ch`-based width calculation to line up cleanly with actual character count.
- `steps(30, end)` makes the width grow in discrete jumps rather than smoothly, so it reads as "typing" character-by-character instead of a slow reveal/wipe.
- Caret is just the element's own `border-right`, blinked via a second infinite animation running in parallel with the typing one.