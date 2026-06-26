# Typewriter Loop

1. **What does this do?**
   Types out a phrase character by character, pauses, deletes it, then types the next phrase from a list — looping indefinitely. A blinking text cursor (pure CSS) sits beside the typed text the whole time.

2. **How is it used?**
   Add a `.typewriter` element containing a `.typewriter-text` span (for the JS to fill in) and a `.typewriter-cursor` span (for the CSS blink), with the phrase list passed as a JSON array in `data-phrases`:

   ```html
   <span class="typewriter" data-phrases='["fast interfaces.", "calm transitions.", "delightful details."]'>
     <span class="typewriter-text"></span>
     <span class="typewriter-cursor" aria-hidden="true"></span>
   </span>
   ```

   Retime the effect with two CSS custom properties on `.typewriter`:

   ```css
   .typewriter {
     --ease-type-speed: 70ms;   /* ms per character while typing */
     --ease-delete-speed: 40ms; /* ms per character while deleting */
   }
   ```

3. **Why is this useful?**
   A rotating multi-phrase typewriter is one of the most common hero-subheading treatments on marketing and landing pages, and this gives EaseMotion CSS a ready, dependency-free version: JS owns the array/typing state machine, CSS owns the cursor blink, and the whole thing is retunable through two named variables rather than buried magic numbers.

### Notes for the maintainer
- **JS manages the phrase array and typing/deleting** exactly as the issue specifies — a single recursive `setTimeout` loop (not `setInterval`) handles typing, pausing on the full phrase, deleting, pausing on empty, and advancing to the next phrase with wraparound. Traced by hand to confirm no off-by-one errors (deleting stops exactly at an empty string, never goes negative or skips the last character).
- **CSS handles the cursor blink** independently of the JS loop — `.typewriter-cursor` blinks on its own fixed interval via `@keyframes`, not tied to each keystroke, so it reads as a steady text-cursor rather than a flicker.
- **`--ease-type-speed` and `--ease-delete-speed`** are read directly from the computed style via `getComputedStyle` so a single CSS declaration controls the actual JS timing — no duplicated values between CSS and JS. The reader function accepts either `ms` or `s` units (e.g. `70ms` or `0.07s`) and normalizes to milliseconds, since a naive `parseFloat` alone would silently misinterpret `0.07s` as 0.07 milliseconds instead of 70.
- `prefers-reduced-motion: reduce` stops the cursor's blink animation but keeps it visibly solid, so the live-typing text still reads as active without the continuous blinking motion.
- Tested in Chrome, Firefox, and Edge.