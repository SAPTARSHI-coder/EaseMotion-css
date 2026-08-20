# Navbar

**Category:** Navigation
**Issue:** #88692 (v1.3 roadmap — navigation components)

A sticky top navbar with a glassmorphism backdrop blur, an animated
underline on the active/hovered link, and a mobile hamburger menu
implemented with the checkbox hack — no JavaScript required.

## How to use

```html
<nav class="ease-navbar">
  <div class="ease-navbar-brand">Brand</div>

  <input type="checkbox" id="ease-navbar-toggle" class="ease-navbar-toggle-input" />

  <ul class="ease-navbar-links">
    <li><a href="#" class="ease-navbar-link ease-navbar-link--active">Home</a></li>
    <li><a href="#" class="ease-navbar-link">About</a></li>
  </ul>

  <label for="ease-navbar-toggle" class="ease-navbar-toggle" aria-label="Toggle navigation">
    <span></span><span></span><span></span>
  </label>
</nav>
```

- `ease-navbar--transparent` — transparent variant for hero overlays
- `ease-navbar-link--active` — marks the current page link
- Collapses into a hamburger menu below 720px viewport width

## Why it fits EaseMotion CSS
- Zero JS dependency (pure CSS checkbox-hack toggle)
- Themeable via CSS custom properties (`--ease-navbar-accent`, etc.)
- Respects `prefers-reduced-motion` and `prefers-color-scheme`

## Browser support
Chrome, Firefox, Edge, Safari. `backdrop-filter` degrades gracefully to a
solid background in browsers without support.
