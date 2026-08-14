# Foucault Pendulum Swing CSS Navigation Component

A pure HTML + Vanilla CSS navigation component featuring a "Foucault Pendulum Swing" visual identity with a suspended CSS cable & bob (`.pendulum-cable`, `.pendulum-bob`), smooth physics-inspired swinging keyframes (`@keyframes pendulum-swing`), circular floor track guides (`.pendulum-track`), and pointer-safe decorative layers (`pointer-events: none; aria-hidden="true"`).

## Features

- **Pure HTML + CSS**: 100% interactive without JavaScript, external fonts, external image assets, or build scripts. Works offline.
- **Foucault Pendulum Identity**: Suspended CSS cable & brass/cyan bob (`.pendulum`), orbital floor track rings (`.pendulum-track`), realistic swinging keyframes (`@keyframes pendulum-swing`), and pointer-safe decorative layers (`pointer-events: none`).
- **100% Accessible**: Built using semantic `<header>`, `<nav aria-label="Primary navigation">`, `<ul class="nav-links">`, real `<a>` navigation links with `aria-current="page"`, and clear `:focus-visible` indicators.
- **Clear `:focus-visible` States**: Dedicated focus outlines on active navigation links with radiant cyan glow.
- **Responsive & Mobile Ready**: Layout wraps cleanly across mobile viewports (320px–1440px+).
- **Theme Adaptability & Motion Controls**: Supports `@media (prefers-color-scheme)` and `@media (prefers-reduced-motion: reduce)`.

## Usage

Include `style.css` and use semantic HTML:

```html
<header class="site-header">
  <nav class="pendulum-nav" aria-label="Primary navigation">
    <a class="brand" href="#">EASEMOTION</a>

    <ul class="nav-links">
      <li><a href="#home" aria-current="page">Home</a></li>
      <li><a href="#about">About</a></li>
    </ul>

    <div class="pendulum-decoration" aria-hidden="true">
      <div class="pendulum-arm">
        <span class="pendulum-cable"></span>
        <span class="pendulum-bob"></span>
      </div>
    </div>
  </nav>
</header>
```

### Customization Variables

```css
:root {
  --pendulum-bg: #0b1020;
  --pendulum-surface: #121a2d;
  --pendulum-accent: #63e6ff;
  --pendulum-accent-2: #a78bfa;
}
```
