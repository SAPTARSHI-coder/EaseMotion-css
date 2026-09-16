# Aurora Glow CSS Badge Component

A pure HTML + Vanilla CSS badge and action chip component featuring a soft, flowing "Aurora Glow" visual identity inspired by the northern lights.

## Features

- **Pure HTML + CSS**: 100% interactive without JavaScript, external fonts, external image assets, or build scripts. Works offline.
- **Aurora Glow Visual Identity**: Multi-layered pseudo-elements (`::before` & `::after`) using flowing linear/radial gradients (`#34d399` emerald, `#38bdf8` cyan, `#a855f7` violet) and `@keyframes aurora-flow` to create a soft, atmospheric northern-lights glow behind the badge while keeping text content crisp and stable.
- **Semantic & Accessible**: Supports both non-interactive status badges (`<span>`) and interactive action chips (`<button type="button">`) with clear `:focus-visible` ring indicators.
- **Hardware-Friendly Animations**: GPU-accelerated transitions on `opacity` and `transform`.
- **Responsive & Dark Mode**: Adapts across mobile viewports (down to 320px), `@media (prefers-color-scheme)`, and `@media (prefers-reduced-motion: reduce)`.

## Usage

Include `style.css` and use semantic HTML:

```html
<!-- Non-Interactive Status Badge -->
<span class="aurora-badge">
  <span class="aurora-dot" aria-hidden="true"></span>
  <span>Active</span>
</span>

<!-- Interactive Action Chip -->
<button type="button" class="aurora-badge-btn">
  <span class="aurora-dot" aria-hidden="true"></span>
  <span>Explore System</span>
</button>
```

### Customization Variables

```css
:root {
  --aurora-bg: #0f172a;
  --aurora-surface: #1e293b;
  --aurora-border: rgba(56, 189, 248, 0.35);
  --aurora-text: #f8fafc;
  --aurora-green: #34d399;
  --aurora-cyan: #38bdf8;
  --aurora-violet: #a855f7;
}
```
