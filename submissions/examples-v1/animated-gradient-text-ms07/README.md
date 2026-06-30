# Animated Gradient Text

1. **What does this do?**
   Fills text with a wide, multi-color gradient that continuously flows across the letters in a smooth, repeating loop — pure CSS, no JavaScript involved.

2. **How is it used?**
   Apply `.gradient-text` to any heading or text element.

   ```html
   <h1 class="gradient-text">Flowing Gradient Text</h1>
   ```

3. **Why is this useful?**
   Animated gradient text is a popular treatment for hero headings, brand callouts, and feature highlights — it draws the eye without needing any extra markup or JS. It's a clean fit for EaseMotion CSS's pure-CSS, animation-first philosophy: a single class, one keyframe, zero dependencies.

### Notes for the maintainer

- The flow effect works by making the gradient much wider than the text (`background-size: 300% 100%`) and animating `background-position`, rather than animating the gradient's colors directly — this keeps it smooth and GPU-friendly with a single, simple keyframe.
- `background-clip: text` (with the `-webkit-` prefix for broader support) clips the gradient to the glyph shapes; `color: transparent` / `-webkit-text-fill-color: transparent` hide the fallback text color underneath.
- `prefers-reduced-motion: reduce` stops the panning but keeps the static gradient fill, since the color treatment itself isn't motion.
- Tested in Chrome, Firefox, and Edge.
