# ease-scroll-reveal

A scroll-driven reveal: cards fade and rise (or slide / scale / focus) into view as they cross into the viewport. Pure CSS via `animation-timeline: view()`.

## What does this do?

Adds a **scroll-reveal**: each `.reveal` card animates from a hidden starting state to its resting state as it enters the viewport, driven by scroll position rather than JavaScript. Variants change the entry direction: `--up` (rise), `--left` / `--right` (horizontal slide), `--scale` (grow in), and `--blur` (focus-in).

## How is it used?

1. Add the `.reveal` class to any element, plus a direction variant.
2. Place elements in normal document flow; the browser ties the animation to the element's scroll position via `animation-timeline: view()`.

```html
<link rel="stylesheet" href="style.css" />

<article class="card reveal reveal--up">
  <h2>01 · Origins</h2>
  <p>…</p>
</article>
```

## Why is this useful?

- **Animation-first** — the signature motion is scroll-driven keyframes bound with `animation-timeline: view()` and `animation-range: entry 0% cover 22%`, so the reveal plays as the element enters the viewport and finishes shortly after — no IntersectionObserver, no JS. Five entry variants via distinct `@keyframes` (`reveal-up`, `reveal-left`, `reveal-right`, `reveal-scale`, `reveal-blur`).
- **Glassmorphism aesthetic** — reveal cards are frosted panels via `backdrop-filter: blur()`.
- **Accessible** — `prefers-reduced-motion` disables the reveal entirely so content is fully visible immediately.
- **Progressive enhancement** — a `@supports not (animation-timeline: view())` fallback plays the reveal once on load (still pure CSS), and browsers without support still show all content at rest.
- **Reusable** — configurable via CSS custom properties (`--reveal-duration`, `--reveal-ease`, `--reveal-distance`, `--glass-blur`).

## Browser support note

`animation-timeline: view()` ships in current Chromium and is in development elsewhere. The included `@supports` fallback guarantees content is never stuck hidden in any browser.

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks).
- `style.css` — scroll-driven reveal base, five entry keyframes, `@supports` fallback, responsive + reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
