# ease-card-glass — Glassmorphism Component

A new UI component module for **EaseMotion-CSS** that brings frosted-glass surfaces (`backdrop-filter`) together with hover-triggered micro-interactions — all in pure CSS, zero JavaScript.

---

## Live Demo

Open `demo.html` in any modern browser against a vivid or image-rich background to see the full effect.

---

## Files

| File | Purpose |
|---|---|
| `style.css` | The component — copy into your project or `@import` it |
| `demo.html` | Interactive showcase of every modifier |
| `README.md` | This file |

---

## Usage

### 1. Link the stylesheet

```html
<link rel="stylesheet" href="style.css" />
```

Or copy the relevant rules directly into your existing EaseMotion-CSS build.

---

### 2. Base component

```html
<div class="ease-card-glass">
  Your content here
</div>
```

Gives you a frosted-glass surface:
- `backdrop-filter: blur(14px) saturate(160%)`
- Subtle white border (`rgba(255,255,255, 0.12)`)
- Border-radius via `--ease-radius-medium` (default `12px`)

> **Note:** The glass effect requires a colorful or image-rich background behind the card. Against a plain white or light background the blur is invisible — this is expected behavior of `backdrop-filter`.

---

### 3. Motion modifiers

Stack any of these on `.ease-card-glass`:

| Class | Effect |
|---|---|
| `.ease-hover-illuminate` | Border brightens + ambient glow on hover |
| `.ease-hover-shimmer` | Diagonal light sweep fires once on hover |
| `.ease-hover-lift` | Card floats up `4px` on hover |
| `.ease-glow-pulse` | Continuous breathing glow (no hover required) |

**Combine freely:**

```html
<!-- Glow + shimmer sweep -->
<div class="ease-card-glass ease-hover-illuminate ease-hover-shimmer">
  Hero CTA card
</div>

<!-- Lift + glow for interactive cards -->
<div class="ease-card-glass ease-hover-illuminate ease-hover-lift">
  Feature card
</div>
```

---

### 4. Tinted variants

Override the glass tint with a color modifier:

```html
<div class="ease-card-glass ease-glass-purple ease-hover-illuminate ease-hover-shimmer">
  Purple glass
</div>

<div class="ease-card-glass ease-glass-cyan ease-hover-shimmer">
  Cyan glass
</div>

<div class="ease-card-glass ease-glass-rose ease-hover-illuminate">
  Rose glass
</div>
```

---

## CSS Custom Properties

All tokens are overridable at `:root` or on any ancestor element:

```css
:root {
  /* Surface */
  --ease-glass-bg:       rgba(255, 255, 255, 0.07);
  --ease-glass-border:   rgba(255, 255, 255, 0.12);
  --ease-glass-blur:     14px;
  --ease-glass-saturate: 160%;

  /* Shimmer sweep */
  --ease-shimmer-color:    rgba(255, 255, 255, 0.18);
  --ease-shimmer-angle:    120deg;
  --ease-shimmer-duration: 0.6s;

  /* Illuminate glow */
  --ease-illuminate-border:      rgba(255, 255, 255, 0.30);
  --ease-illuminate-glow:        rgba(255, 255, 255, 0.10);
  --ease-illuminate-glow-spread: 24px;

  /* Shared timing (inherits framework values if set) */
  --ease-speed-medium: 0.3s;
  --ease-radius-medium: 12px;
}
```

---

## Accessibility

- All animations respect `prefers-reduced-motion: reduce` — transitions and keyframe animations are disabled for users who prefer less motion.
- The shimmer pseudo-element is marked `pointer-events: none` so it never blocks interactive content.
- Color and contrast of card *content* is the author's responsibility; the component itself only styles the surface and border.

---

## Browser Support

Requires `backdrop-filter` support. As of 2025, this covers all evergreen browsers:

| Browser | Support |
|---|---|
| Chrome / Edge | ✅ 76+ |
| Firefox | ✅ 103+ |
| Safari | ✅ 9+ (with `-webkit-` prefix, included) |

Older browsers gracefully fall back to a semi-transparent surface without blur — content remains readable.

---

## Design Notes

- Works best over vibrant gradients, high-saturation images, or blurred colorful backgrounds.
- Tinted variants (`ease-glass-purple`, `ease-glass-cyan`, `ease-glass-rose`) use the same CSS variable system — add your own by overriding the four surface tokens.
- Extend shimmer angle or duration per-card using inline custom properties:
  ```html
  <div class="ease-card-glass ease-hover-shimmer"
       style="--ease-shimmer-angle: 90deg; --ease-shimmer-duration: 0.4s;">
  ```

---

## Related Issue

Implements [#6813 — Add Pre-built Glassmorphism Components with Hover-Triggered Shimmer / Backdrop Animations](https://github.com/saptarshi-coder/EaseMotion-css/issues/6813)