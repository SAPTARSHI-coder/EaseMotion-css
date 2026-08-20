# ease-trig-orbit

A pure CSS orbital loader utility built using modern CSS trigonometric functions (`sin()` and `cos()`).

---

### 1. What does this do?
`ease-trig-orbit` creates a circular, orbiting loading animation by mathematically calculating the trajectory of child dots using native CSS `sin()` and `cos()` trigonometric functions combined with `calc()`. A single animated custom CSS property (`--angle`) smoothly rotates all elements around a central origin without requiring SVG paths or JavaScript animation loops.

---

### 2. How is it used?

Include `style.css` in your project and structure your HTML with a wrapper `.ease-trig-orbit` and child elements `.ease-trig-dot`. Distribute each child element around the orbit using an inline `--offset` custom property.

```html
<link rel="stylesheet" href="style.css">

<div class="ease-trig-orbit">
  <div class="ease-trig-dot" style="--offset: 0deg;"></div>
  <div class="ease-trig-dot" style="--offset: 90deg;"></div>
  <div class="ease-trig-dot" style="--offset: 180deg;"></div>
  <div class="ease-trig-dot" style="--offset: 270deg;"></div>
</div>
```

---

### 3. Why is it useful?
- **Zero JavaScript / SVG:** Replaces complex SVG path computations and JS `requestAnimationFrame` render loops with native CSS engine calculations.
- **Hardware-Accelerated Performance:** Runs entirely on the compositor thread using native CSS `@property` and transforms.
- **Highly Customizable:** Easily adjust orbital speed, radius (`--radius`), dot size, colors, or number of orbiting nodes by simply tweaking CSS variables and `--offset` angle values.
