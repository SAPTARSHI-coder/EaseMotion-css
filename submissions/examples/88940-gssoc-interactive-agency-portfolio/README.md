# Pure CSS Creative Agency Portfolio & Showcase (Issue #88940)

An interactive, pure CSS design agency project showcase deck featuring category filter tabs (Web Apps, Brand Identity), case study drawers, and responsive glassmorphic cards.

> Part of GSSoC 2026 contributions. Fixes/Resolves Issue [#88940](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/88940).

## Features
- **100% Pure CSS Filtering**: Category selection tabs (All, Web Apps, Branding) and project case study modal powered with CSS `:checked` radio and checkbox state logic.
- **Glassmorphic Agency Aesthetic**: Dark-mode purple & pink design system with custom properties, glassmorphism blur, and styled project cards.
- **Responsive Layout**: Full screen adaptability across mobile and desktop breakpoints.

## Usage

```html
<div class="agency-card">
  <!-- Category Filter State Controller -->
  <input type="radio" name="cat-select" id="cat-all" class="state-radio" checked>
  <input type="checkbox" id="project-modal-toggle" class="state-checkbox">

  <!-- Navigation -->
  <nav class="cat-nav">
    <label for="cat-all">All Projects</label>
    <label for="cat-web">Web Applications</label>
  </nav>

  <!-- Agency Display -->
  <div class="agency-body">...</div>
</div>
```

## Structure
```
submissions/examples/88940-gssoc-interactive-agency-portfolio/
├── demo.html
├── style.css
└── README.md
```

## Tech Stack
- HTML5
- CSS3 (Keyframe Animations, Custom Properties, Flexbox & Grid, CSS State Selectors)
