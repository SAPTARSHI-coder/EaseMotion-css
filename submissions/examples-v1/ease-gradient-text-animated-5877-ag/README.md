# Animated Gradient Text

This submission creates the `ease-gradient-text` effect — text where the color is clipped from a shifting gradient background, producing a smooth animated color-sweep through the letters.

---

## What It Does

Combines three CSS techniques:
1. `background-clip: text` + `-webkit-background-clip: text` — clips the gradient to the text shape
2. `color: transparent` / `-webkit-text-fill-color: transparent` — makes the element's own color transparent so the background shows through
3. `@keyframes gradientShift` — animates `background-position` from `0%` to `100%` and back on a `background-size: 200% auto` gradient

## How It's Used

```html
<!-- Basic usage -->
<p class="gradient-text gradient-text--ocean">Animated gradient headline</p>

<!-- Large display -->
<h1 class="gradient-text gradient-text--ember gradient-text--display">Big Impact</h1>

<!-- Slow drift -->
<p class="gradient-text gradient-text--forest gradient-text--slow">Calm forest flow</p>
```

## Why It's Useful

- Creates premium, attention-grabbing headings with zero JS
- Three distinct color presets cover warm, cool, and nature palettes
- The `--gradient-duration` CSS variable makes speed trivially configurable
- `prefers-reduced-motion` support ensures the gradient is shown statically for motion-sensitive users

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Verify each of the three preset cards shows a smoothly animating gradient clipped to the text.
3. Verify the large display card shows the multi-line heading at a larger size.
4. Verify the slow card animates at roughly half the speed of the default.
5. Enable `prefers-reduced-motion` in the OS — verify the gradient is static (no animation).
