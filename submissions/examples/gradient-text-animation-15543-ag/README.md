# CSS Gradient Text Animation Example

This submission demonstrates the implementation of pure-CSS animated text gradients using background clipping and keyframe shifts.

---

## The Clipping Technique

The effect works by combining three core CSS properties:

1. **`background-image`** — A multi-color linear gradient representing the color palette.
2. **`-webkit-background-clip: text`** — Masks the background image to follow only the outlines of the characters.
3. **`-webkit-text-fill-color: transparent`** — Ensures the original font color is hidden so that the background gradient shines through.

---

## Shifting Background with Keyframes

To create motion:
- Expand the background horizontally using `background-size: 200% auto`.
- Apply a keyframe animation that shifts the `background-position` from `0%` to `200%`.

```css
@keyframes shine {
  to {
    background-position: 200% center;
  }
}
```

---

## Verification Steps

1. Open `demo.html` in a web browser.
2. Observe three distinct header text elements:
   - **Aurora Flow:** Purple and Cyan.
   - **Lava Wave:** Amber, Red, and Rose.
   - **Forest Light:** Emerald and Gold.
3. Verify that the gradient colors in each header flow smoothly across the text.
4. Set `prefers-reduced-motion` in DevTools to check that animations pause immediately.
