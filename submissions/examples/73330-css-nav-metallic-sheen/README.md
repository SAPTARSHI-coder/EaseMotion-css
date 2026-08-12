# Metallic Sheen CSS Navigation Component

A pure HTML + Vanilla CSS navigation component featuring a "Metallic Sheen" visual identity with brushed metal surface gradients, inset bevel highlights, and a sliding reflective sheen band pseudo-element (`::before`).

## Features

- **Pure HTML + CSS**: 100% interactive without JavaScript, external fonts, external image assets, or build scripts. Works offline.
- **Metallic Sheen Identity**: Multi-layer brushed metal surface gradients (`linear-gradient(180deg, #334155 0%, #1e293b 50%, #0f172a 100%)`), inset highlight bevels (`box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25)`), and a reflective sheen band (`::before`) sliding across the control (`transform: translateX(-150%)` &rarr; `translateX(150%)`).
- **100% Accessible**: Built using semantic `<nav>`, `<ul>`, `<li>`, and real `<a>` links with `aria-current="page"` for active pages and clear `:focus-visible` indicators.
- **Clear `:focus-visible` States**: Dedicated focus outlines on active links.
- **Responsive & Mobile Ready**: Responsive flex layout wraps cleanly across mobile viewports (320px–1440px+).
- **Theme Adaptability & Motion Controls**: Supports `@media (prefers-color-scheme)` and `@media (prefers-reduced-motion: reduce)`.

## Usage

Include `style.css` and use semantic HTML:

```html
<nav class="metallic-nav" aria-label="Primary navigation">
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
  --metal-bg: #0f172a;
  --metal-card-bg: #1e293b;
  --metal-border: rgba(255, 255, 255, 0.15);
  --metal-accent: #38bdf8;
}
```
