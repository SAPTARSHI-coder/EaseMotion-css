# CSS Text Scramble Reveal Animation (V2)

1. **What does this do?** Creates a pure CSS scramble reveal effect that cycles character slots through code symbols before resolving to readable text.
2. **How is it used?** Place letter spans inside a `.scr-char` container and group them using a `.scr-track` class.
3. **Why is it useful?** It approximates complex cyberpunk decryption animations with hardware-accelerated, zero-dependency CSS step keyframes.

---

## Technical Documentation

### 1. What the Text Scramble Reveal Effect Does
It simulates a cybernetic code decryption phase. On page load or replay trigger, characters cycle through random code glyphs and resolve sequentially from left to right.

### 2. How the CSS Creates the Visual Scramble Effect
- **Vertical tracks**: Spans containing code glyphs and the target character are stacked column-wise. The container limits visible height using `overflow: hidden`.
- **Step Translations**: The track translates upward using `steps(5)` timing functions. This jumps instantly from one glyph to the next without smooth scrolls, mimicking digital glitch updates.

### 3. How Pseudo-Elements/Layers are Used
We avoid pseudo-elements on individual slots to allow screen readers to parse the target letter structure natively. Instead, the final readable letters are positioned inside standard block containers.

### 4. How Staggered Delays Work
Custom inline `--char-delay` properties are calculated for each letter slot:
```html
<span class="scr-char" style="--char-delay: 0.15s;">
```
This forces letters to resolve sequentially from left to right, creating a sequential sweep.

### 5. Customizing Animation Speed
Adjust the animation duration in the `.scr-track` rules:
```css
#scr-replay-toggle:checked ~ .scr-demo-content .scr-track {
  animation: scr-scroll-kf-2 1s steps(5) both; /* Change 1s to target speed */
}
```

### 6. Customizing Reveal Intensity
To add more placeholder symbols or increase length, increase the number of spans in the track and update the translation percentage (e.g. for 8 items, translate `-87.5%` using `steps(7)`).

### 7. Reduced-Motion Fallback
Under prefers-reduced-motion queries:
```css
@media (prefers-reduced-motion: reduce) {
  .scr-track {
    transform: translateY(-83.333%) !important;
    animation: none !important;
  }
}
```
All translations are bypassed, and the final readable string is loaded immediately.

### 8. Limitations of CSS-Only Scrambling
Without JavaScript:
- The character sequences are deterministic rather than truly randomized.
- The animation timing is fixed and cannot dynamically adapt to user reading speeds or text lengths.
- However, using CSS `steps()` and custom delays provides a lightweight, performant, and accessible visual approximation.
