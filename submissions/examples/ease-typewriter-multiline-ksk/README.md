# Multi-line CSS Typewriter Effect (`ease-typewriter-multiline-ksk`)

1. What does this do?  
An animated typing reveal effect that supports wrapping paragraphs across multiple lines in pure CSS. It works by overlaying an absolute pseudo-element `.ease-typewriter-mask` (`::after`) on each word span, animating its width to scale horizontally (`scaleX(1)` → `scaleX(0)`) sequentially with staggered animation delays.

2. How is it used?  
Wrap each word of your text in a `.type-word` span inside `.ease-typewriter-multiline`. The staggered character entrance delays execute natively:

```html
<p class="ease-typewriter-multiline">
  <span class="type-word">Word</span>
  <span class="type-word">by</span>
  <span class="type-word">word.</span>
</p>
```

Configure parameters using CSS variables:
```css
.ease-typewriter-multiline {
  --ease-type-speed:    0.16s;            /* reveal duration per word */
  --ease-type-delay:    0.12s;            /* staggered delay multiplier */
  --ease-bg:            #0f111a;          /* must match background color */
}
```

3. Why is it useful?  
Standard single-line typewriters animate element widths using fixed character counts (`ch`), which breaks when text wraps onto multiple lines. This utility segments elements into individual relative word spans with absolute overlay masks, enabling organic multi-line typing layouts without any external JavaScript runtimes, maintaining full responsiveness, prefers-reduced-motion safety overrides, and Dark/Light theme modes.

---
*Created for ECSoC-26 / GSSoC-26 — Resolves #68985.*
