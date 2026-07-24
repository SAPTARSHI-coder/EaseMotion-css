# Spiral Sticky Header

## What does this do?
This submission adds a pure CSS spiral-themed sticky header variant with accessible navigation and action controls.

## How is it used?
Use the markup and classes from `demo.html` with `style.css`.

```html
<header class="spiral-sticky-header" role="banner" aria-label="Primary header">
  <div class="spiral-sticky-header__spiral" aria-hidden="true"></div>
  <div class="spiral-sticky-header__glow" aria-hidden="true"></div>

  <div class="spiral-sticky-header__inner">
    <a class="brand" href="#">Spiral Header</a>
    <nav class="nav-cluster" aria-label="Primary navigation">
      <a class="nav-link" href="#overview">Overview</a>
      <a class="nav-link" href="#features">Features</a>
      <a class="nav-link" href="#patterns">Patterns</a>
      <a class="nav-link" href="#contact">Contact</a>
    </nav>
    <div class="header-actions">
      <button class="chip chip--ghost" type="button">Preview</button>
      <button class="chip chip--solid" type="button">Get Started</button>
    </div>
  </div>
</header>
```

## Why is it useful?
It provides a reusable sticky header pattern with a distinctive motion-first identity, while staying lightweight, responsive, and accessible in line with the EaseMotion CSS philosophy.

## Notes
- Pure CSS implementation, no JavaScript required.
- Includes `prefers-reduced-motion` handling.
- Includes skip-link and keyboard-focus visibility.
- Uses EaseMotion classes in the demo (`ease-fade-in`, `ease-slide-up`, `ease-hover-grow`).
- Designed to be conflict-safe by adding files only inside `submissions/examples/spiral-sticky-header-pp-41415/`.
