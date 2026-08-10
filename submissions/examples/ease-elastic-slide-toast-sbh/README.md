# ease-elastic-slide-toast

SaaS showcase toast notifications that slide in from the right with an elastic spring (overshoot) and slide out smoothly to the right after a hold, staggered by index. Pure CSS — no JavaScript is required for the animation.

## What does this do?

Adds an **elastic-slide toast**: glassmorphism toast notifications. Each toast slides in from the right (`@keyframes est-in`: `opacity 0 → 1` + `translateX(120% → 0)` with an overshoot easing so it overshoots past rest and settles), holds, then slides out (`@keyframes est-out`: `opacity 1 → 0` + `translateX(0 → 120%)`), staggered by its index. Includes info/success/warn variants with colored icons.

## How is it used?

1. Build a `.toaststack` region (fixed bottom-right) containing `.toast` elements, each with a `.toast__icon` and `.toast__msg`.
2. The CSS applies the elastic-slide-in/hold/slide-out animation, staggered by `--i`.

```html
<link rel="stylesheet" href="style.css" />

<div class="toaststack" role="region" aria-label="Notifications" aria-live="polite">
  <div class="toast toast--info" role="status">
    <span class="toast__icon" aria-hidden="true">ⓘ</span>
    <span class="toast__msg">New comment on your report.</span>
  </div>
  <div class="toast toast--success" role="status">
    <span class="toast__icon" aria-hidden="true">✓</span>
    <span class="toast__msg">Deployment succeeded.</span>
  </div>
  <div class="toast toast--warn" role="status">
    <span class="toast__icon" aria-hidden="true">!</span>
    <span class="toast__msg">Storage almost full.</span>
  </div>
</div>
```

## Why is this useful?

- **Animation-first** — the signature motion is the elastic slide-in + slide-out: `@keyframes est-in`/`est-out` drive `opacity` and `transform: translateX()` with an overshoot easing (`cubic-bezier(0.34, 1.56, 0.64, 1)`) so toasts spring past rest and settle, staggered by `--i`. All via `opacity`/`transform`.
- **Glassmorphism aesthetic** — toasts are frosted panels via `backdrop-filter: blur()`; variants use accent-tinted icon chips.
- **Accessible** — the stack is an `aria-live="polite"` region labelled "Notifications"; each toast is `role="status"` so screen readers announce it; the icon is `aria-hidden`. Full `prefers-reduced-motion` support (toasts appear instantly with no slide).
- **Reusable** — configurable via CSS custom properties (`--in-duration`, `--out-duration`, `--hold-duration`, `--stagger`, `--travel`, `--glass-blur`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks). Pure CSS animation, no JS. Reload to replay the entrance; each toast auto-dismisses after the loop. SaaS-themed notification content.
- `style.css` — glassmorphism toasts, elastic-slide-in/slide-out keyframes staggered by `--i`, info/success/warn variants, fixed toast stack, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
