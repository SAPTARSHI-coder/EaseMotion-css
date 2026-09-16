# Mesh Gradient Background

## What does this do?

Demonstrates an animated **multicolor mesh gradient background** built entirely with pure CSS — no JavaScript, no canvas, no SVG filters. Five radial-gradient blobs drift independently behind a glassmorphism content panel.

## Features

- **Layered radial gradients** — five `radial-gradient()` blobs, each absolutely positioned and styled with `filter: blur` and `mix-blend-mode: screen` to produce smooth color blending.
- **Purple · Cyan · Blue · Pink · Violet** color palette defined via CSS custom properties.
- **Smooth background movement** — each blob animates on its own `@keyframes` track at a different duration (15 s – 26 s), so they never move in sync. Only `transform: translate() scale()` is animated (GPU-composited, no layout shifts).
- **Glassmorphism content panel** — `backdrop-filter: blur(18px)`, translucent background, subtle border and box-shadow.
- **Responsive** — blob sizes use `clamp()`, panel padding uses `clamp()`, layout is viewport-relative.
- **Reduced-motion safe** — all drift animations stop under `prefers-reduced-motion: reduce`; the gradient remains visible as a static composition.
- **Zero JavaScript** — pure HTML + CSS.

## How the animation works

Each `.mgb-layer` element is a large colored circle positioned `absolute` inside a `fixed` canvas:

```css
.mgb-layer--purple {
  animation: mgb-drift-1 18s ease-in-out infinite alternate;
}

@keyframes mgb-drift-1 {
  0%   { transform: translate(0, 0)    scale(1);    }
  33%  { transform: translate(8%, 12%) scale(1.06); }
  100% { transform: translate(10%, -5%) scale(1.04); }
}
```

Because each blob has a unique keyframe path and duration, they orbit at different speeds and produce an organic mesh effect when their blurred, screen-blended halos overlap.

## Responsive behavior

| Viewport | Behavior |
|----------|----------|
| ≥ 1440 px | Full-size blobs; panel max-width 560 px centred |
| 768–1440 px | `clamp()` scales blob sizes and panel padding naturally |
| ≤ 768 px | `overflow-x: hidden` on body prevents horizontal scroll |
| ≤ 400 px | Panel padding tightened; buttons stack vertically |

## Reduced-motion behavior

```css
@media (prefers-reduced-motion: reduce) {
  .mgb-layer { animation: none; }
}
```

The five gradient blobs remain visible as a static layered composition — no blank or broken state.

## How to run

Open `demo.html` directly in any modern browser.

No build step, server, or dependencies are required.
