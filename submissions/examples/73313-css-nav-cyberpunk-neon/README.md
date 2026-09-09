# Cyberpunk Neon CSS Navigation Component

A pure HTML + Vanilla CSS navigation component featuring a "Cyberpunk Neon" visual identity with dark synthwave surfaces (`#070914`), cyan (`#00f6ff`) and magenta (`#ff2bd6`) neon glow highlights, angular polygon clip-path chamfers, and responsive controls.

## Features

- **Pure HTML + CSS**: 100% interactive without JavaScript, external fonts, external image assets, or build scripts. Works offline.
- **Cyberpunk Neon Identity**: Dark synthwave surface, angular corner polygon chamfers (`clip-path`), multi-layer cyan & magenta neon box-shadows & text-shadows, and atmospheric CSS grid background.
- **100% Accessible**: Built using semantic `<nav>`, `<ul>`, `<li>`, and real `<a>` links with `aria-current="page"` for active pages and clear `:focus-visible` indicators.
- **Clear `:focus-visible` States**: Dedicated focus outlines on active links with distinct neon cyan glow.
- **Responsive & Mobile Ready**: Responsive flex layout wraps cleanly across mobile viewports (320px–1440px+).
- **Theme Adaptability & Motion Controls**: Supports `@media (prefers-color-scheme)` and `@media (prefers-reduced-motion: reduce)`.

## Usage

Include `style.css` and use semantic HTML:

```html
<nav class="cyber-nav" aria-label="Primary navigation">
  <ul class="nav-list">
    <li class="nav-item">
      <a href="#home" class="nav-link" aria-current="page">Home</a>
    </li>
    <li class="nav-item">
      <a href="#projects" class="nav-link">Projects</a>
    </li>
    <li class="nav-item">
      <a href="#about" class="nav-link">About</a>
    </li>
  </ul>
</nav>
```

### Customization Variables

```css
:root {
  --cyber-bg: #070914;
  --cyber-surface: #0d1224;
  --cyber-primary: #00f6ff;
  --cyber-secondary: #ff2bd6;
  --cyber-border: rgba(0, 246, 255, 0.45);
}
```
