# Component: navbar dark mode

Demonstrates the `prefers-color-scheme: dark` overrides for the navbar component — ensuring the navigation bar adapts to the user's OS-level dark mode preference.

## Features

- Pure HTML & CSS
- Responsive navbar with hamburger menu
- Follows OS dark mode via `prefers-color-scheme: dark`
- Uses CSS custom properties for all colors
- Mobile drawer with overlay
- Reduced motion support
- No JavaScript required

## Usage

```html
<nav class="ease-navbar">
  <a class="ease-navbar-brand" href="#">Brand</a>
  <button class="ease-navbar-toggle">...</button>
  <div class="ease-navbar-menu">
    <a class="ease-navbar-link" href="#">Home</a>
    <a class="ease-navbar-link" href="#">About</a>
  </div>
</nav>
```

## Why is it useful?

Dark mode is expected in modern UIs. Without `prefers-color-scheme` overrides in navbar.css, the navbar ignores the user's OS preference — creating a jarring light navbar on a dark page. This submission demonstrates the correct pattern.
