# CSS Easing Curve Explorer

An interactive documentation page that visually explains how CSS
easing functions and cubic-bezier curves affect motion.

## 1. What does this do?

Presents a single-page, dark-themed documentation showcase covering
the five built-in CSS timing functions (`linear`, `ease`, `ease-in`,
`ease-out`, `ease-in-out`), three custom `cubic-bezier()` curves, a
side-by-side comparison of all curves animating together, practical
"when to use it" guidance, an interactive playground for tuning
duration and distance live, and a section explaining
`prefers-reduced-motion`. Each easing card includes a live animation
preview and a replay button.

## 2. How is it used?

Open `demo.html` directly in any browser — no build step or server
required. Interact with:

- **Replay** buttons on each easing card to re-trigger that specific
  animation.
- The **Playground** duration and distance sliders, which update CSS
  custom properties (`--demo-duration`, `--demo-distance`) read by
  every animation on the page.
- **Replay All** / **Replay Comparison** buttons to re-run every demo
  at once.

To reuse a curve in your own project, copy the corresponding
`animation-timing-function` or `cubic-bezier()` value shown on each
card directly into your CSS.

## 3. Why is it useful?

Easing values are easy to write but hard to visualize from code alone.
This page turns an abstract CSS property into something developers can
see, compare, and tune before committing to it in production, while
also modeling accessibility best practices — visible focus states,
keyboard-operable controls, and graceful behavior under
`prefers-reduced-motion` — that any motion-heavy documentation page
should follow.