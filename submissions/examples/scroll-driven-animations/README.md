# Scroll Driven Animations

## What does this do?
Demonstrates CSS `animation-timeline` and `view()` for scroll-driven animations without JavaScript.

## How is it used?
Set `animation-timeline: scroll(root)` or `animation-timeline: view()`:

    .bar { animation: scale linear; animation-timeline: scroll(root); }

## Why is it useful?
Enables performant scroll-linked animations natively, without IntersectionObserver or scroll events.

## Tech Stack
- HTML
- CSS (scroll-driven animations)

## Preview
Open demo.html directly in your browser to see the effect.

## Contribution Notes
- Class naming was handled by the contributor
- Maintainer will rename to ease-* convention before merging
