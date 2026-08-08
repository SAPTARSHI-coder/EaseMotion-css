# ease-magnetic — Elastic Magnetic Hover Effect

**Submission for EaseMotion CSS · [Issue #2713](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/2713)**

---

## What it does

Adds an elastic, spring-like hover effect to any element — as if it is magnetized and floats toward the cursor. Achieved with pure CSS `transform` and a carefully tuned `cubic-bezier` curve. No JavaScript, no dependencies.

---

## Files

| File | Purpose |
|------|---------|
| `style.css` | All utility classes |
| `demo.html` | Live showcase of every variant |
| `README.md` | This document |

---

## Classes

| Class | Effect |
|-------|--------|
| `.ease-magnetic` | Default elastic spring — floats up −6 px on hover |
| `.ease-magnetic-x` | Same spring on the horizontal axis (+6 px right) |
| `.ease-magnetic.ease-magnetic-strong` | Pronounced −12 px lift |
| `.ease-magnetic.ease-magnetic-subtle` | Barely-there −3 px nudge |
| `.ease-magnetic.ease-magnetic-rotate` | Float + 2° tilt — playful feel |
| `.ease-magnetic.ease-magnetic-scale` | Float + 1.04× scale — premium feel |

---

## Usage

```html
<!-- Basic button -->
<button class="ease-btn ease-btn-primary ease-magnetic">
  Hover me
</button>

<!-- Strong hero card -->
<div class="ease-card ease-magnetic ease-magnetic-strong">
  Magnetic Card
</div>

<!-- Subtle nav link -->
<a href="#" class="ease-magnetic ease-magnetic-subtle">Nav link</a>

<!-- Horizontal slide -->
<button class="ease-btn ease-magnetic-x">Slides right</button>

<!-- Playful tilt -->
<div class="ease-card ease-magnetic ease-magnetic-rotate">Tilted</div>
```

---

## Technical design

### The spring curve

```css
transition: transform 0.45s cubic-bezier(0.23, 1, 0.32, 1);
```

`cubic-bezier(0.23, 1, 0.32, 1)` is an ease-out-expo curve — it shoots quickly and decelerates to a soft stop. This is what creates the "snap into place" spring feeling.

### Why `will-change: transform`

Promotes the element to its own compositor layer, keeping the animation on the GPU and ensuring 60 fps even on lower-end devices.

### Modifier pattern

`ease-magnetic-strong`, `ease-magnetic-subtle`, `ease-magnetic-rotate`, and `ease-magnetic-scale` are all **modifiers** — they only work when combined with the base `.ease-magnetic` class (except `.ease-magnetic-x`, which is a standalone axis variant).

```css
/* ✅ Correct */
<div class="ease-magnetic ease-magnetic-strong">

/* ❌ Wrong — modifier without base class */
<div class="ease-magnetic-strong">
```

### Reset on mouse-leave

The element returns to its original position using the same spring curve, so the spring-back feels as fluid as the hover-in.

### Accessibility

```css
@media (prefers-reduced-motion: reduce) {
  .ease-magnetic,
  .ease-magnetic-x {
    transition: none;
  }
}
```

Users who opt out of motion get an instant state change with no animation.

---

## Suggested framework class names (for maintainer)

Once reviewed, the suggested `ease-*` names for integration into `core/animations.css` are:

- `ease-magnetic`
- `ease-magnetic-x`
- `ease-magnetic-strong`
- `ease-magnetic-subtle`
- `ease-magnetic-rotate`
- `ease-magnetic-scale`

---

*Submitted as part of GSSoC 2026.*