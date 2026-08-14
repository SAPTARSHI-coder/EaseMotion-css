# CSS Text Scramble Reveal Animation

A pure CSS, high-performance text scramble reveal animation using vertical step translations.

## 🌟 What the Animation Demonstrates
This example demonstrates a cyberpunk-style decryption text reveal effect. As the text appears, each character slot rapidly cycles through a predefined series of code symbols before settling on the final readable letter.

## 🛠️ Why Predefined Sequences (Instead of True Randomness)?
CSS does not support random character generators or text string operations natively. Rather than adding complex, heavy JS scripts (like GSAP or Anime.js), this example achieves a visually identical effect purely via CSS using **deterministic vertical character tracks** that scroll in steps.

## ⚙️ How Character Animations Work
1. **Track Stacking**: Each letter slot (`.scramble-char`) has a height of `1.2em` and `overflow: hidden`. Inside it is a column track (`.scramble-track`) containing 6 spans (5 placeholder glyphs and the 1 target letter).
2. **Step Translation**: Using the keyframe `@keyframes scramble-scroll-kf`, the track translates upward from `translateY(0)` to `translateY(-83.333%)` (the 6th element at index 5).
3. **Step Timing**: We apply `animation-timing-function: steps(5)`. This tells the browser to jump discretely to each translation interval (0%, 20%, 40%, 60%, 80%, 100%) rather than animating smoothly, showing each character individually.

## ⏱️ Staggered Timing
Staggered reveal delays are implemented via custom inline variables:
- We compute delay parameters using `span:nth-child(n) { --char-delay: ...s; }` in `style.css`.
- This ensures letters resolve sequentially from left to right, creating a decrypting sweep effect.

## ♿ Accessibility & Reduced-Motion
- **Screen Reader Friendly**: Screen readers will bypass the scramble tracks completely and read the final string directly due to `aria-label="[Final Text]"` on the parent wrapper and `aria-hidden="true"` on the animated spans.
- **prefers-reduced-motion**: Inside a `@media (prefers-reduced-motion: reduce)` block, all animations are set to `none` and the track position is locked at `translateY(-83.333%)`, rendering the final readable text instantly with zero movement.

## ✍️ How to Customize Text
To change the displayed text, split your target word into individual character spans:
```html
<span class="scramble-word">
  <!-- Letter 'A' -->
  <span class="scramble-char">
    <span class="scramble-track">
      <span>$</span><span>%</span><span>&amp;</span><span>@</span><span>#</span><span>A</span>
    </span>
  </span>
  <!-- Letter 'B' -->
  <span class="scramble-char">
    <span class="scramble-track">
      <span>*</span><span>?</span><span>!</span><span>+</span><span>=</span><span>B</span>
    </span>
  </span>
</span>
```
Ensure you have exactly 6 characters (5 placeholders and 1 target) inside each track.

## 🌐 Browser Compatibility
- **Full Support**: Chrome, Edge, Firefox, Safari, and Opera.
- **Fallback**: Static rendering is set to the final position by default (`transform: translateY(-83.333%)`), meaning any legacy browser will display the text fully visible and readable immediately.
