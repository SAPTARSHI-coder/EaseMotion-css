# Nav Drawer Push Content

## What does this do?

A navigation drawer that slides in from the left edge and smoothly pushes the main page content to the right, creating a cohesive app-like sidebar experience.

## How is it used?

Add the `ndp-drawer` class to your sidebar element and `ndp-content` class to your main content wrapper. Toggle `.ndp-open` on `body` to show or hide the drawer:

```html
<body>
  <nav class="ndp-drawer">
    <!-- sidebar links -->
  </nav>
  <div class="ndp-content">
    <!-- main content -->
  </div>
  <script>
    function toggleDrawer() {
      document.body.classList.toggle('ndp-open');
    }
  </script>
</body>
```

Configure parameters via CSS custom properties on `:root`:

- `--ndp-drawer-width` — Width of the sidebar (default `280px`).
- `--ndp-duration` — Transition duration (default `0.35s`).
- `--ndp-easing` — Transition easing curve (default `cubic-bezier(0.4, 0, 0.2, 1)`).
- `--ndp-bg` — Sidebar background color (default `#ffffff`).
- `--ndp-text` — Sidebar text color (default `#0f172a`).
- `--ndp-border` — Sidebar border color (default `#e2e8f0`).

## Why is this useful?

Push-content navigation is a common pattern in responsive web apps, admin dashboards, and documentation sites. This implementation relies purely on CSS transitions (`transform` on the drawer, `margin-left` on the content) that can be accelerated by the GPU, avoiding layout thrashing. It respects `prefers-reduced-motion`, degrades gracefully, and is straightforward to integrate into any project without JavaScript animation libraries.
