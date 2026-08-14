# Scroll-Driven Image Reveal with Clip-Path Morphing

A pure CSS scroll-driven animation: each image morphs from a small diamond shape into its full rectangular frame as it scrolls into the viewport, using the native CSS `animation-timeline: view()` API — no JavaScript, no IntersectionObserver.

## Features

- Scroll progress directly drives the animation via `animation-timeline: view()`
- `clip-path` morphs through an intermediate hexagon shape into the final rectangle
- Fully responsive gallery layout
- Graceful `@supports` fallback for browsers without scroll-driven animation support
- Respects `prefers-reduced-motion` by disabling the effect entirely
- No external JS or frameworks — pure CSS/HTML

## Usage

1. Copy `demo.html` and `style.css` into your project.
2. Wrap any image (or block element) in a `.reveal-item` with an `.reveal-image` inside.
3. Adjust `animation-range` on `.reveal-item` to control when the reveal starts/finishes relative to scroll position.

## CSS Custom Properties

| Property | Purpose |
|---|---|
| `--page-bg` | Page background color |
| `--text-primary` | Primary text color |
| `--text-secondary` | Secondary/subtitle text color |
| `--caption-bg` | Caption overlay background |

## Browser Support Note

`animation-timeline: view()` is supported in current Chromium-based browsers. Firefox and Safari fall back via `@supports not (...)` to show images fully visible with no animation, so the content is never hidden on unsupported browsers.

## Accessibility

- All animation is disabled under `prefers-reduced-motion: reduce`, showing images immediately.
- Unsupported browsers get the same non-animated fallback, so nothing is ever permanently hidden.