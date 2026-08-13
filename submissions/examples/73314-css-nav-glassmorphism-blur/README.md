# Glassmorphism Blur CSS Navigation Component

A pure HTML + Vanilla CSS navigation component featuring a "Glassmorphism Blur" visual identity with translucent glass surfaces (`background: rgba(255, 255, 255, 0.08)`), backdrop blur (`backdrop-filter: blur(16px) saturate(160%)`), full fallback background for non-blur browsers, and responsive controls.

## Features

- **Pure HTML + CSS**: 100% interactive without JavaScript, external fonts, external image assets, or build scripts. Works offline.
- **Glassmorphism Identity**: Translucent glass surface, 1px glass border highlight, backdrop blur (`backdrop-filter: blur(16px) saturate(160%)`), and ambient CSS background mesh elements.
- **Robust Fallback**: Includes `@supports` fallback background (`rgba(15, 23, 42, 0.85)`) for browsers that do not support backdrop blur filters.
- **100% Accessible**: Built using semantic `<nav>`, `<ul>`, `<li>`, and real `<a>` links with `aria-current="page"` for active pages and clear `:focus-visible` indicators.
- **Clear `:focus-visible` States**: Dedicated focus outlines on active links.
- **Responsive & Mobile Ready**: Responsive flex layout wraps cleanly across mobile viewports (320px–1440px+).
- **Theme Adaptability & Motion Controls**: Supports `@media (prefers-color-scheme)` and `@media (prefers-reduced-motion: reduce)`.

## Usage

Include `style.css` and use semantic HTML:

```html
<nav class="glass-nav" aria-label="Primary navigation">
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
  --glass-bg: #0b1120;
  --glass-nav-bg: rgba(255, 255, 255, 0.08);
  --glass-nav-border: rgba(255, 255, 255, 0.18);
  --glass-accent: #38bdf8;
  --glass-blur: 16px;
}
```
