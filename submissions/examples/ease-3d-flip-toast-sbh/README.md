# ease-3d-flip-toast

SaaS showcase toast notifications that flip into view in 3D (rotating on the X axis from `-90deg` to `0deg`) and flip out (`0deg` to `90deg`) after a hold, staggered by index. Pure CSS — no JavaScript is required for the animation.

## What does this do?

Adds a **3D-flip toast**: glassmorphism toast notifications. Each toast flips in (`@keyframes tft-in`: `opacity 0 → 1` + `transform: rotateX(-90deg → 0deg)`) within a 3D perspective context, holds, then flips out (`@keyframes tft-out`: `opacity 1 → 0` + `transform: rotateX(0 → 90deg)`), staggered by its index. Uses `perspective`, `transform-style: preserve-3d`, and `backface-visibility: hidden`. Includes info/success/warn variants with colored icons.

## How is it used?

1. Build a `.toaststack` region (fixed bottom-right, with `perspective`) containing `.toast` elements, each with a `.toast__icon` and `.toast__msg`.
2. The CSS applies the 3D-flip-in/hold/flip-out animation, staggered by `--i`.

```html
<link rel="stylesheet" href="style.css" />

<div class="toaststack" role="region" aria-label="Notifications" aria-live="polite">
  <div class="toast toast--info" role="status">
    <span class="toast__icon" aria-hidden="true">ⓘ</span>
    <span class="toast__msg">Invite sent to 3 members.</span>
  </div>
  <div class="toast toast--success" role="status">
    <span class="toast__icon" aria-hidden="true">✓</span>
    <span class="toast__msg">Build passed in 42s.</span>
  </div>
  <div class="toast toast--warn" role="status">
    <span class="toast__icon" aria-hidden="true">!</span>
    <span class="toast__msg">API rate limit nearing.</span>
  </div>
</div>
```

## Why is this useful?

- **Animation-first** — the signature motion is the 3D flip: `@keyframes tft-in`/`tft-out` drive `opacity` and `transform: rotateX()` (`-90deg → 0deg → 90deg`) within a `perspective` context, staggered by `--i`. All via `opacity`/`transform`.
- **Glassmorphism aesthetic** — toasts are frosted panels via `backdrop-filter: blur()`; variants use accent-tinted icon chips.
- **Accessible** — the stack is an `aria-live="polite"` region labelled "Notifications"; each toast is `role="status"` so screen readers announce it; the icon is `aria-hidden`. Full `prefers-reduced-motion` support (toasts appear instantly with no flip).
- **Reusable** — configurable via CSS custom properties (`--in-duration`, `--out-duration`, `--hold-duration`, `--stagger`, `--perspective`, `--glass-blur`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks). Pure CSS animation, no JS. Reload to replay the entrance; each toast auto-dismisses after the loop. SaaS-themed notification content.
- `style.css` — glassmorphism toasts, 3D-flip-in/flip-out keyframes staggered by `--i`, perspective context, info/success/warn variants, fixed toast stack, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
