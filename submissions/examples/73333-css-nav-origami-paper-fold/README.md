# Origami Paper Fold CSS Navigation Component

A pure HTML + Vanilla CSS navigation component featuring an "Origami Paper Fold" visual identity where navigation items resemble folded paper panels with paper flap geometry (`clip-path`), paper crease shadows, and smooth unfold transitions.

## Features

- **Pure HTML + CSS**: 100% interactive without JavaScript, external fonts, external image assets, or build scripts. Works offline.
- **Origami Paper Fold Identity**: Layered paper flap geometry (`clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)`), triangular paper fold flap pseudo-elements (`::before`), paper crease gradient overlays (`::after`), and GPU-accelerated unfold lift transitions (`transform: translateY(-4px)`).
- **100% Accessible**: Built using semantic `<nav>`, `<ul>`, `<li>`, and real `<a>` links with `aria-current="page"` for active pages and clear `:focus-visible` indicators.
- **Clear `:focus-visible` States**: Dedicated focus outlines on active links.
- **Responsive & Mobile Ready**: Responsive flex layout wraps cleanly across mobile viewports (320px–1440px+).
- **Theme Adaptability & Motion Controls**: Supports `@media (prefers-color-scheme)` and `@media (prefers-reduced-motion: reduce)`.

## Usage

Include `style.css` and use semantic HTML:

```html
<nav class="origami-nav" aria-label="Primary navigation">
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
  --origami-bg: #f1f5f9;
  --origami-surface: #ffffff;
  --origami-border: #cbd5e1;
  --origami-accent: #2563eb;
  --origami-flap: #e2e8f0;
}
```
