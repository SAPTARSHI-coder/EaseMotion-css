# ease-counter — Animated Number Count-Up

1. **What does this add?** A CSS-driven number count-up animation using `@property` + CSS `counter()` to animate from 0 to a target value (`--ease-count-to`) via `@keyframes`. No JavaScript required. Includes slow (3s) and fast (0.8s) duration variants, plus a suffix variant for `%`/`+` symbols.
2. **How is it used?**

```html
<span class="ease-counter" style="--ease-count-to: 97">0</span>

<span
  class="ease-counter ease-counter-slow ease-counter-suffix"
  style="--ease-count-to: 1500; --ease-counter-suffix: '+';"
  >0</span
>

<span
  class="ease-counter ease-counter-fast ease-counter-suffix"
  style="--ease-count-to: 75; --ease-counter-suffix: '%';"
  >0</span
>
```

3. **Why is it useful?** Animated statistics ("97 projects completed", "1500+ happy users") are common in hero sections and landing pages. This uses `@property` to register `--ease-counter-val` as an animatable `<integer>`, then displays it via `counter()` on a pseudo-element — pure CSS, zero dependencies, aligned with EaseMotion CSS's animation-first, human-readable philosophy.

**Note:** This complements the existing `.ease-count-up` utility in `core/animations.css` (which uses `--ease-count`) by adding named duration variants (`-slow`, `-fast`) and a suffix variant, with its own `--ease-counter-val`/`--ease-counter-suffix` properties to avoid naming collisions.
