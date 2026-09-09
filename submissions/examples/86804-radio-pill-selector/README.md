# Pure CSS Radio Pill Selector

An interactive, pure CSS segmented pill selector component where the selected radio button slides an animated highlight glider beneath the active label.

> Part of GSSoC 2026 contributions. Fixes/Resolves Issue [#86804](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/86804).

## Features

- **Sliding Glider Animation**: A pill group where the selected radio button triggers a smooth cubic-bezier spring transition (`cubic-bezier(0.16, 1, 0.3, 1)`) of the highlight glider beneath the active label.
- **Zero JavaScript Interactivity**: 100% pure CSS state handling using hidden radio inputs and adjacent/general sibling selectors (`~`).
- **Multiple Layout Variations**:
  - 4-option timeline view selector (Day, Week, Month, Quarter) with reactive preview panels.
  - Dual-option pricing toggle with annual discount badges and dynamic price card calculations.
  - Compact size variations: Small (`sm`), Medium (`md`), and Large (`lg`).
- **Micro-Interactions & Aesthetics**: Subtle active click compression (`scale(0.96)`), glassmorphic dark container styling, luminous glider halos, and active text typography transitions.
- **Accessible & Responsive**: Keyboard navigable using arrow keys, visible `:focus-visible` outline rings, and `@media (prefers-reduced-motion: reduce)` compliance.

## Usage

```html
<div class="pill-selector-box">
  <!-- Radio State Controllers -->
  <input type="radio" name="time-range" id="time-day" class="pill-radio" checked>
  <input type="radio" name="time-range" id="time-week" class="pill-radio">
  <input type="radio" name="time-range" id="time-month" class="pill-radio">
  <input type="radio" name="time-range" id="time-quarter" class="pill-radio">

  <!-- Segmented Pill Group -->
  <nav class="pill-group pill-group-4">
    <label for="time-day" class="pill-item item-day">Day</label>
    <label for="time-week" class="pill-item item-week">Week</label>
    <label for="time-month" class="pill-item item-month">Month</label>
    <label for="time-quarter" class="pill-item item-quarter">Quarter</label>
    <div class="pill-glider"></div>
  </nav>
</div>
```

## Structure

```
submissions/examples/86804-radio-pill-selector/
├── demo.html
├── style.css
└── README.md
```

## Tech Stack

- HTML5 (Semantic radio forms and navigation)
- CSS3 (Cubic-bezier transforms, CSS variables, Glassmorphism, CSS sibling state selectors)
