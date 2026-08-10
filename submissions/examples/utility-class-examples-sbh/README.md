# utility-class-examples

Practical, visual demonstrations of common animation utility classes — Fade In, Slide Up, Zoom In, Bounce — plus Delay (`.delay-1` … `.delay-4`) and Duration (`.dur-fast` / `.dur-slow`) utilities. Each demo card shows the utility name, a live preview box, and the exact class to use, with a Replay button to re-run every animation from the start.

## What does this do?

- **Fade In** — `.fade-in` animates `opacity` 0→1 (`@keyframes uc-fade-in`).
- **Slide Up** — `.slide-up` fades in while translating up from `translateY(1.5rem)` (`@keyframes uc-slide-up`).
- **Zoom In** — `.zoom-in` fades in while scaling from `scale(0.6)` (`@keyframes uc-zoom-in`).
- **Bounce** — `.bounce` drops in and settles with a few diminishing bounces (`@keyframes uc-bounce`).
- **Delay utilities** — `.delay-1` (0.2s) through `.delay-4` (0.8s) stagger entrance animations (shown with four `.fade-in` boxes).
- **Duration utilities** — `.dur-fast` (0.3s) and `.dur-slow` (1.2s) override the default `--uc-dur` (0.6s).
- **Replay** — a button re-triggers every animation by toggling classes off→reflow→on.
- All entrance utilities use `both` fill mode so elements hold their start state until the animation runs (clean on-load reveals).

## How is it used?

1. Link the stylesheet.
2. Add a utility class to any element. Utilities compose freely.

```html
<link rel="stylesheet" href="style.css" />

<div class="box fade-in">Fade</div>
<div class="box slide-up">Slide</div>
<div class="box zoom-in">Zoom</div>
<div class="box bounce">Bounce</div>

<!-- compose: fade in, delayed, slow -->
<div class="box fade-in delay-2 dur-slow">…</div>
```

## Why is this useful?

- **Directly addresses the issue** — the issue asked for live demos of Fade In, Slide Up, Zoom In, Bounce, Delay, and Duration utilities with code snippets; this provides all six in a single self-contained page.
- **Beginner-friendly** — each card pairs the visible animation with the exact class name and a copy-ready snippet.
- **Composable** — entrance + delay + duration utilities stack cleanly (e.g. `.fade-in.delay-2.dur-slow`).
- **Accessible** — `prefers-reduced-motion` disables all entrance animations (elements render in their final state); the Replay button is a real `<button>`.
- **Reusable** — configurable via CSS custom properties (`--uc-dur`, `--uc-ease`, `--uc-accent`, `--uc-box-grad`, etc.).

## Files

- `demo.html` — self-contained showcase (open directly in a browser; no server, CDNs, or frameworks). Six demo cards (Fade In / Slide Up / Zoom In / Bounce / Delays / Durations) + the Replay script.
- `style.css` — page + demo grid + animated box, the four entrance `@keyframes`, delay/duration utilities, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
