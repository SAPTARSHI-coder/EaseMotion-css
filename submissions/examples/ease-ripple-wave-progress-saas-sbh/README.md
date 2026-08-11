# ease-ripple-wave-progress (SaaS showcase)

A SaaS usage meter progress bar with a continuous ripple wave traveling along the fill as it grows toward a plan limit. Suited for SaaS showcase layouts (API calls, storage, seats).

## What does this do?

Adds a **ripple-wave progress bar** themed for SaaS dashboards: the fill grows from `0` to its target width (`--val`), and a bright translucent wave continuously sweeps across the fill's surface — like a ripple moving through water — to signal active, ongoing usage against a plan limit. Includes three color variants and a "used / limit" value readout.

## How is it used?

1. Set the target value via the `--val` CSS custom property on `.bar__fill` (e.g. `style="--val: 63%"`).
2. Set `aria-valuenow` on the `.bar` to match for screen readers.
3. Use modifier classes for color variants: `bar__fill--violet`, `bar__fill--emerald`.

```html
<link rel="stylesheet" href="style.css" />

<div class="task">
  <div class="task__head">
    <span class="task__label">API calls</span>
    <span class="task__value"><strong>1.26M</strong> / 2.00M</span>
  </div>
  <div class="bar" role="progressbar" aria-valuenow="63" aria-valuemin="0" aria-valuemax="100" aria-label="API calls usage">
    <div class="bar__fill" style="--val: 63%"></div>
  </div>
</div>
```

A small inline "Replay" button resets and re-runs the grow animation for the demo; the wave loops indefinitely via CSS.

## Why is this useful?

- **Animation-first** — two layered motions: `@keyframes rw-grow` animates the fill `width` to `--val`, while `@keyframes rw-wave` continuously translates a translucent highlight across the fill (`left -40% → 140%`) for the living "ripple" effect. All via `width`/`left`.
- **SaaS showcase aesthetic** — frosted panel via `backdrop-filter: blur()` over a translucent gradient, with a "used / limit" readout typical of billing/usage dashboards.
- **Accessible** — proper `role="progressbar"` with `aria-valuenow/min/max` + `aria-label`, `:focus-visible` outlines, and full `prefers-reduced-motion` support (fill jumps to final width; wave hidden entirely).
- **Reusable** — configurable via CSS custom properties (`--rw-duration`, `--rw-ease`, `--rw-wave-duration`, `--val`, `--glass-blur`, color tokens).

## Files

- `demo.html` — self-contained interactive demo (open directly in a browser; no server, CDNs, or frameworks). Includes a tiny optional Replay button.
- `style.css` — frosted panel, grow + ripple-wave keyframes, color variants, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-saas-sbh` suffix (instead of `-sbh`) because a `ease-ripple-wave-progress-sbh` submission already exists in the repo for a separate glassmorphism-themed issue; this SaaS-showcase variant uses a distinct folder name to avoid a collision while clearly serving this issue. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
