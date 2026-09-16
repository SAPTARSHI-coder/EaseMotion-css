# CSS Scroll Zoom In

A pure CSS scroll-driven entry animation that smoothly scales elements from a smaller size to full scale as they scroll into view.

## What does this do?

Elements scale up from 82% scale and partial opacity to 100% scale and full opacity as they enter the viewport during scrolling, using native browser scroll timelines.

## How is it used?

Add the `ease-scroll-zoom-in` class to any HTML element you wish to animate on scroll:

```html
<article class="zoom-card ease-scroll-zoom-in">
  <h2>Feature Card</h2>
  <p>Content scales smoothly into view as you scroll.</p>
</article>
```

## Why is it useful?

It expands EaseMotion CSS's scroll animation utilities with zero JavaScript overhead. By utilizing native `animation-timeline: view()`, execution stays on the compositor thread without main-thread scroll listener overhead. Additionally, it features progressive static fallback for legacy browsers and full support for `prefers-reduced-motion`.
