# ease-blur-entrance-stepper

A horizontal stepper whose steps blur into focus sequentially on load (staggered blur-in entrance), with a connector that also un-blurs. Pure CSS — no JavaScript required for the animation.

## What does this do?

Adds a **blur-entrance-stepper**: a glassmorphism horizontal stepper. On load, each step starts blurred, faded, and slightly lifted, then focuses in (`@keyframes bes-in`: `filter: blur(8px → 0)` + `opacity 0 → 1` + `translateY(8px → 0)`), staggered by its index (`--i`) so steps resolve one after another. The connector line also un-blurs (`@keyframes bes-line`). Completed steps show an emerald check; the current step is accent-filled with a glow ring.

## How is it used?

1. Build an `.stepper__list` of `.step` items, each carrying its index via `style="--i: N"` (0-based) to drive the stagger.
2. Mark the current step with `aria-current="step"` on the node; mark completed steps with the `step--done` class.

```html
<link rel="stylesheet" href="style.css" />

<ol class="stepper__list" role="list">
  <li class="step" style="--i: 0">
    <span class="step__node" aria-current="step">1</span>
    <span class="step__label">Cart</span>
  </li>
  <li class="step step--done" style="--i: 1">
    <span class="step__node" aria-hidden="true">&#10003;</span>
    <span class="step__label">Address</span>
  </li>
  …
</ol>
```

## Why is this useful?

- **Animation-first** — the signature motion is the staggered blur-in: `@keyframes bes-in` drives `filter: blur()` (`8px → 0`), `opacity` (`0 → 1`), and `transform: translateY()` (`8px → 0`), delayed by `calc(var(--stagger) * var(--i))` so each step resolves in sequence. The connector un-blurs via `@keyframes bes-line`. All via `filter`/`opacity`/`transform`.
- **Glassmorphism aesthetic** — nodes are frosted pills via `backdrop-filter: blur()`; the entrance blur is a focus-pull effect.
- **Accessible** — `role="list"`/`listitem` semantics; the current step uses `aria-current="step"`; completed-step checkmarks are `aria-hidden="true"` (the label text conveys meaning). Full `prefers-reduced-motion` support (steps appear instantly with no blur/stagger).
- **Reusable** — configurable via CSS custom properties (`--blur-duration`, `--blur-ease`, `--stagger`, `--line-duration`, `--glass-blur-bg`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks). Pure CSS animation, no JS. Reload to replay the entrance.
- `style.css` — glassmorphism stepper, staggered blur-in keyframes, connector un-blur, done/current node states, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
