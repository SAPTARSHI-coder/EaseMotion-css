# Word Carousel

1. **What does this do?**
   A single word in a sentence cycles vertically through a list of alternatives — each word slides up and fades in from below, holds steady, then slides further up and fades out, before the next word in the array takes its place. Built for hero taglines like "We build **fast** interfaces" → "We build **accessible** interfaces" → ...

2. **How is it used?**
   Wrap a `.wordcarousel-track` span inside a fixed-height, clipped `.wordcarousel` container, with the word list passed as a JSON array in `data-words`:

   ```html
   <span class="wordcarousel" data-words='["fast", "accessible", "delightful", "composable"]'>
     <span class="wordcarousel-track"></span>
   </span>
   ```

   Retime the whole cycle with one CSS custom property:

   ```css
   .wordcarousel {
     --ease-carousel-speed: 2200ms; /* full cycle: in, hold, out */
   }
   ```

3. **Why is this useful?**
   Cycling a single word while the rest of a sentence stays fixed is a very common, high-impact hero-section technique, and doing it with a real `overflow: hidden` clipped track (rather than just crossfading stacked absolute-positioned words) gives a more polished, genuinely "carousel" feel. JS only has to swap text and restart one animation class — all the actual motion lives in a single CSS keyframe.

### Notes for the maintainer
- **Words scroll vertically in an `overflow: hidden` container** — `.wordcarousel` is the fixed-height clipping box, `.wordcarousel-track` is the element that actually animates within it.
- **Each word fades/slides in then out** within a single `@keyframes` cycle (`0–12%` slide+fade in, `12–78%` hold, `78–100%` slide+fade out), so JS never has to coordinate two separate "enter" and "exit" animations — it just swaps the text and restarts one class.
- **Loops through the word array** via `(index + 1) % words.length`, wrapping back to the start indefinitely.
- **`--ease-carousel-speed`** is read by JS via `getComputedStyle` (same unit-aware parser used in other recent submissions, handling both `ms` and `s`) so the `setInterval` delay and the CSS `animation-duration` always stay derived from the same single source — verified by tracing the timing across several cycles to confirm each animation completes exactly as the next word swap fires, with no visible gap or overlap.
- One caveat worth noting: `setInterval` can drift slightly under heavy main-thread load, which is a general JS scheduling characteristic rather than a bug in this implementation — acceptable for a decorative hero element, but worth knowing if extremely precise long-run timing ever matters.
- `prefers-reduced-motion: reduce` swaps to a fade-only variant of the keyframes (same timing, no vertical motion), so the word change is still visible without the continuous slide.
- Tested in Chrome, Firefox, and Edge.