# 3D Perspective Tilt CSS Navigation Component

A pure HTML + Vanilla CSS navigation component featuring a "3D Perspective Tilt" visual identity with 3D perspective context (`perspective: 900px`), restrained tilt transforms (`rotateX(5deg) rotateY(-4deg) translateZ(8px)`), multi-layer depth shadows, and tactile press states.

## Features

- **Pure HTML + CSS**: 100% interactive without JavaScript, external fonts, external image assets, or build scripts. Works offline.
- **3D Perspective Tilt Identity**: 3D container context (`perspective: 900px`), 3D transform preservation (`transform-style: preserve-3d`), restrained 3D tilt on hover/focus (`transform: perspective(900px) rotateX(5deg) rotateY(-4deg) translateZ(8px) translateY(-3px)`), expanding ambient shadow (`0 14px 28px rgba(15, 23, 42, 0.16)`), and tactile press states (`translateZ(0)`).
- **100% Accessible**: Built using semantic `<nav>`, `<ul>`, `<li>`, and real `<a>` links with `aria-current="page"` for active pages and clear `:focus-visible` indicators.
- **Clear `:focus-visible` States**: Dedicated focus outlines on active links.
- **Responsive & Mobile Ready**: Responsive flex layout wraps cleanly across mobile viewports (320px–1440px+).
- **Theme Adaptability & Motion Controls**: Supports `@media (prefers-color-scheme)` and `@media (prefers-reduced-motion: reduce)`.

## Usage

Include `style.css` and use semantic HTML:

```html
<nav class="tilt-nav" aria-label="Primary navigation">
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
  --tilt-bg: #f8fafc;
  --tilt-surface: #ffffff;
  --tilt-border: #cbd5e1;
  --tilt-accent: #2563eb;
  --tilt-perspective: 900px;
}
```
