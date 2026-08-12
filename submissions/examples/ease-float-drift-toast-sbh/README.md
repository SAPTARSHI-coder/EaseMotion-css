# ease-float-drift-toast

SaaS showcase toast notifications that float up into view (from below with a slight tilt) and drift out (upward with a gentle sway) after a hold, staggered by index. Pure CSS — no JavaScript is required for the animation.

## What does this do?

Adds a **float-drift toast**: glassmorphism toast notifications. Each toast floats in (`@keyframes fdt-in`: `opacity 0 → 1` + `translateY(24px → 0)` + `rotate(-1.5deg → 0deg)`), holds, then drifts out (`@keyframes fdt-out`: `opacity 1 → 0` + `translateY(0 → -20px)` + `rotate(0 → 1.5deg)`), staggered by its index. Includes info/success/warn variants with colored icons.

## How is it used?

1. Build a `.toaststack` region (fixed bottom-right) containing `.toast` elements, each with a `.toast__icon` and `.toast__msg`.
2. The CSS applies the float-in/hold/drift-out animation, staggered by `--i`.

```html
<link rel="stylesheet" href="style.css" />

<div class="toaststack" role="region" aria-label="Notifications" aria-live="polite">
  <div class="toast toast--info" role="status">
    <span class="toast__icon" aria-hidden="true">ⓘ</span>
    <span class="toast__msg">Sync complete — 3 items updated.</span>
  </div>
  <div class="toast toast--success" role="status">
    <span class="toast__icon" aria-hidden="true">✓</span>
    <span class="toast__msg">Payment received — $129.00</span>
  </div>
  <div class="toast toast--warn" role="status">
    <span class="toast__icon" aria-hidden="true">!</span>
    <span class="toast__msg">Trial ends in 2 days.</span>
  </div>
</div>
```

## Why is this useful?

- **Animation-first** — the signature motion is the float-in + drift-out: `@keyframes fdt-in`/`fdt-out` drive `opacity` and `transform: translateY()` + `rotate()` so toasts rise in with a slight tilt, hold, then drift up with a sway, staggered by `--i`. All via `opacity`/`transform`.
- **Glassmorphism aesthetic** — toasts are frosted panels via `backdrop-filter: blur()`; variants use accent-tinted icon chips.
- **Accessible** — the stack is an `aria-live="polite"` region labelled "Notifications"; each toast is `role="status"` so screen readers announce it; the icon is `aria-hidden`. Full `prefers-reduced-motion` support (toasts appear instantly with no float/drift).
- **Reusable** — configurable via CSS custom properties (`--in-duration`, `--out-duration`, `--hold-duration`, `--stagger`, `--glass-blur`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks). Pure CSS animation, no JS. Reload to replay the entrance; each toast auto-dismisses after the loop. SaaS-themed notification content.
- `style.css` — glassmorphism toasts, float-in/hold/drift-out keyframes staggered by `--i`, info/success/warn variants, fixed toast stack, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
