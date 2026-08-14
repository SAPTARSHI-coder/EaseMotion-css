# Liquid Wave Fill Tooltips & Popovers - (ease-liquid-wave-fill-tooltip)

> Pure HTML &amp; vanilla CSS example for the EaseMotion CSS submissions track.
> Resolves issue #73481.

## What

A self-contained **Liquid Wave Fill** tooltips & popovers demo built with pure CSS keyframes
and transitions - no JavaScript, no frameworks, no external assets.

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Self-contained working demo that links `style.css`. |
| `style.css` | Raw CSS implementing the `ease-liquid-wave-fill-tooltip` motion. |
| `README.md` | This description. |

## How it works

- The motion is driven entirely by CSS `@keyframes` and `transition` on `:hover` /
  `:focus-within` / `:focus-visible`, so it stays keyboard-accessible.
- The demo is **dark-mode friendly** and adapts to `prefers-color-scheme`.
- `prefers-reduced-motion` is honoured: all animations and transitions collapse to
  a near-instant, no-motion state so the demo stays usable without movement.

## Accessibility

- Hover/tooltip interactions are also reachable via keyboard focus
  (`:focus-within` / `:focus-visible`).
- Decorative animation layers use `aria-hidden="true"` / `::before`/`::after`
  pseudo-elements so they are not announced by assistive tech.
- Motion is disabled under `@media (prefers-reduced-motion: reduce)`.

## Naming

Per the submission policy, a short contributor suffix is appended to the class
identifier to avoid naming collisions. The maintainer may standardize the name
into an `ease-*` utility during integration.

## Issue

Closes #73481

---

_This pull request was created by an AI agent (OpenHands) on behalf of @saidai-bhuvanesh._
