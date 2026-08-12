# Solar Flare Radial CSS Badge Component

A pure HTML + Vanilla CSS badge and action chip component featuring a glowing "Solar Flare Radial" visual identity.

## Features

- **Pure HTML + CSS**: 100% interactive without JavaScript, external fonts, external image assets, or build scripts. Works offline.
- **Solar Flare Radial Visual Identity**: Multi-layered pseudo-elements (`::before` & `::after`) using `radial-gradient()`, `conic-gradient()`, and `@keyframes solar-flare-pulse` to create a glowing solar flare core while keeping text content crisp and stable.
- **Semantic & Accessible**: Supports both non-interactive status badges (`<span>`) and interactive action chips (`<button type="button">`) with clear `:focus-visible` ring indicators.
- **Hardware-Friendly Animations**: GPU-accelerated transitions on `opacity` and `transform`.
- **Responsive & Dark Mode**: Adapts across mobile viewports (down to 320px), `@media (prefers-color-scheme)`, and `@media (prefers-reduced-motion: reduce)`.

## Usage

Include `style.css` and use semantic HTML:

```html
<!-- Non-Interactive Status Badge -->
<span class="solar-badge">
  <span class="solar-core-dot" aria-hidden="true"></span>
  <span>Active</span>
</span>

<!-- Interactive Action Chip -->
<button type="button" class="solar-badge-btn">
  <span class="solar-core-dot" aria-hidden="true"></span>
  <span>Explore System</span>
</button>
```

### Customization Variables

```css
:root {
  --solar-bg: #1c1917;
  --solar-surface: #292524;
  --solar-border: rgba(245, 158, 11, 0.4);
  --solar-text: #fffbeb;
  --solar-core: #f59e0b;
  --solar-flare: #ea580c;
  --solar-glow: rgba(245, 158, 11, 0.35);
}
```
