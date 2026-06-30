# CSS-Only Infinite Scroll Text (Marquee)

## What does this do?

GPU-accelerated infinite scrolling text using CSS `transform: translateX/Y()` with `@keyframes`. Seamless loop via duplicate content. No JavaScript.

## How is it used?

```html
<div class="ease-marquee ease-marquee-horizontal">
  <div class="ease-marquee-track">
    <span>Item 1</span>
    <span>Item 2</span>
    <!-- Duplicate items for seamless loop -->
    <span>Item 1</span>
    <span>Item 2</span>
  </div>
</div>
```

| Class                      | Effect               |
| -------------------------- | -------------------- |
| `ease-marquee-horizontal`  | Left-to-right scroll |
| `ease-marquee-vertical`    | Bottom-to-top scroll |
| `ease-marquee-reverse`     | Reverse direction    |
| `ease-marquee-speed-fast`  | 15s duration         |
| `ease-marquee-speed-slow`  | 60s duration         |
| `ease-marquee-pause-hover` | Pause on hover       |

Customize via `--ease-marquee-speed` and `--ease-marquee-gap`.

## Why is it useful?

Lightweight marquee for brand strips, news tickers, and announcements. No JS, GPU-accelerated, respects `prefers-reduced-motion`.
