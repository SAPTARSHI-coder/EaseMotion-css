# Scroll Triggered Counter

## What does this do?
Numbers animate from zero to their target value when the section scrolls into view.

## How is it used?
Add `data-target` to any element with class `counter-value`:

    <span class="counter-value" data-target="1500">0</span>

## Why is it useful?
Perfect for statistics sections, dashboards, and landing page metrics.

## Tech Stack
- HTML
- CSS
- Vanilla JS (IntersectionObserver + requestAnimationFrame)

## Preview
Open demo.html directly in your browser to see the effect.

## Contribution Notes
- Class naming was handled by the contributor
- Maintainer will rename to ease-* convention before merging
