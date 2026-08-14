# ease-typing-placeholder-sap

An input field whose placeholder text continuously types out, pauses, deletes, and cycles through a rotating list of example queries.

## Usage
1. Include `style.css`.
2. Add markup: a plain `<input>` with no static placeholder (JS drives it entirely).
3. Include the `tick()` typing loop from `demo.html`, customizing the `phrases` array.

## Customization
- `phrases` array: the rotating placeholder text set.
- Typing/deleting speed (`65`/`35` ms per character).
- Pause duration after a phrase fully types (`1400ms` before deletion starts).

## Notes
- Since native `placeholder` attributes can't be styled or animated via CSS `@keyframes`, this effect is entirely JS-driven, updating `input.placeholder` character-by-character via recursive `setTimeout` calls.
- Deleting is intentionally faster than typing (35ms vs 65ms) to mimic realistic human typing rhythm.
- Respects `prefers-reduced-motion`: since the effect is JS string manipulation (not a CSS transition/animation), it's unaffected by the media query directly — a stricter compliant build could check `matchMedia` in JS and instead statically rotate through phrases every few seconds without the per-character typing effect.