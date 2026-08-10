# ease-ripple-loader

> Expanding rings that fade out — a pure CSS loading indicator.

No JavaScript. No dependencies. One stylesheet, a handful of `div`s, and a set of BEM-style modifier classes.

---

## Files

| File | Purpose |
|------|---------|
| `style.css` | The loader — import this in your project |
| `demo.html` | Live demo of all variants |
| `README.md` | This file |

---

## Quick start

```html
<!-- 1. Link the stylesheet -->
<link rel="stylesheet" href="style.css" />

<!-- 2. Add the markup -->
<div class="ease-ripple ease-ripple--blue ease-ripple--md">
  <div class="ease-ripple__ring"></div>
  <div class="ease-ripple__ring"></div>
  <div class="ease-ripple__ring"></div>
  <div class="ease-ripple__dot"></div>  <!-- optional centre dot -->
</div>
```

That's it. Three rings stagger-animate outward and fade, creating a continuous ripple pulse.

---

## Modifier classes

### Colour

| Class | Hex |
|-------|-----|
| `ease-ripple--blue` *(default)* | `#4f6ef7` |
| `ease-ripple--teal` | `#14b8a6` |
| `ease-ripple--rose` | `#f43f5e` |
| `ease-ripple--amber` | `#f59e0b` |
| `ease-ripple--white` | `#ffffff` |

### Size

| Class | Diameter |
|-------|----------|
| `ease-ripple--sm` | 40 px |
| `ease-ripple--md` | 80 px |
| `ease-ripple--lg` | 140 px |

### Speed

| Class | Duration |
|-------|----------|
| `ease-ripple--slow` | 3 s |
| `ease-ripple--normal` | 1.8 s |
| `ease-ripple--fast` | 1 s |

### State

| Class | Effect |
|-------|--------|
| `ease-ripple--paused` | Freezes the animation in place |

---

## Custom properties

Override any token directly with CSS custom properties — no need to fork the stylesheet:

```css
.my-loader {
  --ripple-color:        #a78bfa;   /* ring colour */
  --ripple-size:         100px;     /* width & height of the container */
  --ripple-count:        3;         /* informational — add/remove <div>s in HTML */
  --ripple-duration:     2.4s;      /* one full cycle */
  --ripple-border-width: 2px;       /* ring stroke thickness */
  --ripple-easing:       ease-out;  /* animation timing function */
}
```

---

## Accessibility

- Respects `prefers-reduced-motion`: animation is replaced with three static concentric rings at reduced opacity.
- Wrap the loader in an element with `role="status"` and `aria-label="Loading"` for screen-reader compatibility:

```html
<div role="status" aria-label="Loading">
  <div class="ease-ripple ease-ripple--blue ease-ripple--md">
    <div class="ease-ripple__ring"></div>
    <div class="ease-ripple__ring"></div>
    <div class="ease-ripple__ring"></div>
  </div>
</div>
```

---

## How it works

Each `.ease-ripple__ring` runs the same `ease-ripple-expand` keyframe — scaling from 10 % to 100 % of the container while fading from `opacity: 0 → 1 → 0`. The three rings are offset by one-third of the total duration each, creating an unbroken wave:

```
Ring 1:  ░░░░████████░░░░████████░░░░
Ring 2:  ░░░░░░░░████████░░░░████████
Ring 3:  ████████░░░░████████░░░░░░░░
```

The easing (`cubic-bezier(0.22, 0.61, 0.36, 1)`) gives each ring a fast initial burst that decelerates — mimicking the physics of a real ripple in water.

---

## Browser support

All modern browsers. No prefixes required. CSS custom properties and `@keyframes` are universally supported.

---
