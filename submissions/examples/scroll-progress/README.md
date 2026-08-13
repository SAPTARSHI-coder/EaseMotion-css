# Sticky Scroll-Progress Bar

A slim gradient bar fixed to the top of the viewport that fills as the user scrolls down the page — built with the modern CSS scroll-driven animations spec (`animation-timeline: scroll()`), no JavaScript required.

## Features

- 📏 Bar fill is tied directly to scroll position via `animation-timeline: scroll(root)`
- 🌈 Gradient fill (purple → teal)
- 🧊 Fixed to the top of the viewport at all times
- ♿ Respects `prefers-reduced-motion` (shows a static dimmed bar instead)
- 🧩 Pure HTML + CSS — no JavaScript, no scroll event listeners

## Usage

```html
<div class="scroll-progress"></div>

<main class="page">
  <!-- your long page content -->
</main>
```

Place `.scroll-progress` as a direct child near the top of `<body>` — it's `position: fixed`, so its DOM position doesn't affect layout.

## Browser support note

This component uses `animation-timeline: scroll()`, part of the CSS Scroll-Driven Animations spec. It's supported in **Chrome/Edge 115+** and shipping in other browsers. In browsers without support, the bar simply stays at 0% width (no error, just no progress fill) — a graceful, non-breaking fallback. For guaranteed cross-browser support today, a small JS scroll listener updating a `--progress` custom property is the common polyfill approach, but this submission focuses on the pure-CSS technique as the primary implementation per the issue's "CSS keyframes only" style of request.

## Why it fits EaseMotion CSS

This showcases a cutting-edge pure-CSS animation technique — scroll-linked motion with zero JavaScript and zero scroll listeners, which is exactly the kind of modern, framework-free capability the project highlights.

## Files

- `demo.html` — a long scrollable demo page with the progress bar
- `style.css` — the scroll-driven animation
- `README.md` — this file

## Notes

`animation-timeline: scroll(root)` ties progress to the whole document's scroll range by default; use `scroll(nearest)` instead if you want the bar to track a specific scrollable container rather than the whole page.