# Dark Mode FOUC Fix

## What does this do?
Eliminates the Flash of Unstyled Content (FOUC) — the brief white flash that appears when a dark-mode-preferring user loads a page — by applying the saved theme class synchronously before the browser's first paint using a tiny inline script and `<meta name="color-scheme">`.

## How is it used?
```html
<!-- 1. Add color-scheme meta tag -->
<meta name="color-scheme" content="dark light">

<!-- 2. Inline script before </head> — runs before first paint -->
<script>
  (function () {
    var saved = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = saved || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.classList.add('no-transition');
    window.addEventListener('load', function () {
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          document.documentElement.classList.remove('no-transition');
        });
      });
    });
  })();
</script>
```

## Why is it useful?
When dark mode preference is stored in `localStorage`, the JavaScript that reads it runs after the browser has already painted the page in light mode, causing a visible flash. A synchronous inline script in `<head>` runs before the first paint, preventing the flash entirely. The `no-transition` class suppresses CSS transitions during this initial setup so the colour change is invisible.

## Tech Stack
- HTML
- CSS (no frameworks)
- Minimal vanilla JavaScript (inline, ~300 bytes)

## Preview
Open `demo.html` directly in your browser to see the effect.

## Contribution Notes
- Fixes: #9827
- Class naming was handled by the contributor
- Maintainer will rename to `ease-*` convention before merging
