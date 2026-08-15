# ease-zoom-in-left

> A CSS-only side-entry zoom animation where elements scale up from a smaller size while sliding in from the right. Perfect for sidebar content reveals, panel entrances, and lateral navigation transitions.

Resolves **[Issue #11824](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/11824)**.

---

## Preview

Open `demo.html` in any modern browser to explore:

| Feature | Description |
|---|---|
| **Interactive Sandbox** | Pick scale intensity, speed, and slide distance — then replay the animation live |
| **Sidebar Reveal** | Toggle a side-panel that zooms in from the right |
| **Staggered Feed** | Watch list items enter one-by-one with cascading delays |

---

## How to Use

### 1. Link the Stylesheet

```html
<link rel="stylesheet" href="style.css">
```

### 2. Apply the Base Class

```html
<div class="ease-zoom-in-left">
  Your content here
</div>
```

### 3. Add Optional Modifiers

| Modifier | Effect |
|---|---|
| `.zoom-fast` | Faster duration (0.25 s) |
| `.zoom-slow` | Slower duration (0.75 s) |
| `.zoom-scale-subtle` | Less dramatic scaling (0.8) |
| `.zoom-scale-intense` | More dramatic scaling (0.3) |
| `.zoom-translate-short` | Shorter horizontal slide (15 px) |
| `.zoom-translate-long` | Longer horizontal slide (80 px) |

```html
<div class="ease-zoom-in-left zoom-fast zoom-scale-subtle">
  Fast, subtle side-entry
</div>
```

---

## Custom Properties

Fine-tune behaviour with CSS custom properties:

| Property | Default | Description |
|---|---|---|
| `--ease-zoom-scale` | `0.5` | Starting scale factor |
| `--ease-zoom-translate` | `40px` | Starting X offset |
| `--ease-zoom-duration` | `0.45s` | Animation duration |
| `--ease-zoom-easing` | `cubic-bezier(0.16,1,0.3,1)` | Easing curve |

---

## Accessibility

The animation automatically honours `prefers-reduced-motion: reduce`. When reduced motion is preferred, the element appears instantly without any animation.

---

## Files

| File | Purpose |
|---|---|
| `style.css` | Keyframes, base class, modifiers, and accessibility fallback |
| `demo.html` | Interactive playground and real-world examples |
| `README.md` | This documentation |

---

## Browser Support

Works in all browsers that support CSS `@keyframes`, custom properties, and `animation-fill-mode: both` — Chrome 43+, Firefox 16+, Safari 9+, Edge 12+.
