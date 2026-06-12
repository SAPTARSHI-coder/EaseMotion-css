# Scroll Progress Fallback

A JavaScript polyfill fallback for the `.ease-scroll-progress` component when `animation-timeline: scroll()` is not supported.

## The Problem

The `animation-timeline: scroll()` CSS API is not supported in:

- Firefox (all versions)
- Safari < 15.4
- Older Chromium-based browsers

Without a fallback, the scroll progress bar remains invisible in these browsers.

## The Fix

This example demonstrates two layers of fallback:

1. **CSS `@supports`** — The native `animation-timeline` is wrapped in an `@supports (animation-timeline: scroll())` rule so unsupported browsers gracefully skip it.

2. **JS scroll listener** — A lightweight scroll event handler with `requestAnimationFrame` throttling reads the document scroll position and applies `transform: scaleX()` inline.

## Usage

```html
<div class="ease-scroll-progress" id="progress-bar"></div>

<script>
  (function () {
    if (
      window.CSS &&
      CSS.supports &&
      CSS.supports("animation-timeline", "scroll()")
    )
      return;

    var ticking = false;
    var bar = document.getElementById("progress-bar");

    function update() {
      var p = Math.min(
        window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight),
        1
      );
      bar.style.transform = "scaleX(" + p + ")";
      ticking = false;
    }

    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          requestAnimationFrame(update);
          ticking = true;
        }
      },
      { passive: true }
    );
    update();
  })();
</script>
```

## Files

- `demo.html` — Interactive demo page
- `style.css` — Styles with `@supports` fallback and demo layout
- `README.md` — This file
