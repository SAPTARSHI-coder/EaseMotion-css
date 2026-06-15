# ease-spinner

**Animated CSS loading spinners for EaseMotion CSS**
Pure CSS · No SVG · No JavaScript · Zero dependencies

---

## Files

| File | Purpose |
|---|---|
| `style.css` | The utility — drop into your project or the EaseMotion dist bundle |
| `demo.html` | Live preview of all styles, sizes, speeds, and colors |
| `README.md` | This documentation |

---

## Quick Start

Link `style.css` and add the class to any inline element:

```html
<link rel="stylesheet" href="style.css" />

<!-- Classic ring -->
<div class="ease-spinner"></div>

<!-- Dots (requires child spans) -->
<div class="ease-spinner-dots">
  <span></span><span></span><span></span>
</div>

<!-- Bars (requires child spans) -->
<div class="ease-spinner-bars">
  <span></span><span></span><span></span><span></span><span></span>
</div>
```

---

## Classes

### Styles

| Class | Effect |
|---|---|
| `.ease-spinner` | Classic single-ring spinner |
| `.ease-spinner-dual` | Dual-ring counter-color spinner |
| `.ease-spinner-dots` | Three bouncing dots (needs 3 `<span>` children) |
| `.ease-spinner-bars` | Five animated bars (needs 5 `<span>` children) |

### Sizes

| Class | Effect |
|---|---|
| `.ease-spinner-sm` | Small (20px) |
| *(none)* | Default (40px) |
| `.ease-spinner-lg` | Large (64px) |

### Speeds

| Class | Effect |
|---|---|
| `.ease-spinner-slow` | Slow (1.6s cycle) |
| *(none)* | Default (0.8s cycle) |
| `.ease-spinner-fast` | Fast (0.4s cycle) |

### Colors

| Class | Effect |
|---|---|
| *(none)* | Default blue |
| `.ease-spinner-purple` | Purple / violet |
| `.ease-spinner-green` | Green / teal |
| `.ease-spinner-white` | White (for dark backgrounds) |

---

## Combining Modifiers

All modifiers are composable:

```html
<!-- Large purple slow ring -->
<div class="ease-spinner ease-spinner-lg ease-spinner-purple ease-spinner-slow"></div>

<!-- Small white dots (inline in a button) -->
<button>
  <div class="ease-spinner-dots ease-spinner-sm ease-spinner-white">
    <span></span><span></span><span></span>
  </div>
  Loading…
</button>

<!-- Fast green bars -->
<div class="ease-spinner-bars ease-spinner-green ease-spinner-fast">
  <span></span><span></span><span></span><span></span><span></span>
</div>
```

---

## How It Works

Each spinner type uses a different `@keyframes` strategy:

- **Ring / Dual** — `border` + `border-radius: 50%` rotated by `ease-spin`
- **Dots** — three `<span>` circles scaled in sequence via `ease-pulse-dots`
- **Bars** — five `<span>` bars stretched vertically via `ease-bar-stretch`

No extra DOM nodes beyond the declared markup. No SVG, no canvas, no JS.

---

## Accessibility

Respects `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  .ease-spinner,
  .ease-spinner-dual { animation: none; }
  .ease-spinner-dots span,
  .ease-spinner-bars span { animation: none; opacity: 0.6; }
}
```

Always pair spinners with a screen-reader label in production:

```html
<div class="ease-spinner" role="status" aria-label="Loading"></div>
```

---

## Browser Support

Uses `border`, `border-radius`, `@keyframes`, and `animation` — universally supported in all modern browsers and IE 11+.

---

Closes #2726
