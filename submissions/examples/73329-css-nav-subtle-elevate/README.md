# Subtle Elevate CSS Navigation Component

A pure HTML + Vanilla CSS navigation component featuring a "Subtle Elevate" visual identity with restrained vertical lifts (`transform: translateY(-2px)`), expanding ambient shadows, and tactile press states.

## Features

- **Pure HTML + CSS**: 100% interactive without JavaScript, external fonts, external image assets, or build scripts. Works offline.
- **Subtle Elevate Identity**: Clean flat navigation surface default (`box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06)`), restrained vertical lift on hover (`transform: translateY(-2px)`), expanding ambient shadow (`0 8px 18px rgba(15, 23, 42, 0.1)`), and tactile press state (`translateY(0)`).
- **100% Accessible**: Built using semantic `<nav>`, `<ul>`, `<li>`, and real `<a>` links with `aria-current="page"` for active pages and clear `:focus-visible` indicators.
- **Clear `:focus-visible` States**: Dedicated focus outlines on active links.
- **Responsive & Mobile Ready**: Responsive flex layout wraps cleanly across mobile viewports (320px–1440px+).
- **Theme Adaptability & Motion Controls**: Supports `@media (prefers-color-scheme)` and `@media (prefers-reduced-motion: reduce)`.

## Usage

Include `style.css` and use semantic HTML:

```html
<nav class="elevate-nav" aria-label="Primary navigation">
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
  --elevate-bg: #f8fafc;
  --elevate-surface: #ffffff;
  --elevate-border: #e2e8f0;
  --elevate-accent: #2563eb;
}
```
