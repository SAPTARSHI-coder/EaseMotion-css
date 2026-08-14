# CSS-Only Noise Grain Glassmorphism Panel Component

A premium, tactile UI component `.ease-glass-panel` featuring frosted glass backdrop blur layered with an inline SVG grain noise texture generated purely in CSS.

## Features

- **Zero Asset Dependencies**: Built using an inline SVG `<feTurbulence>` filter inside `background-image: url("data:image/svg+xml,...")`.
- **Pure CSS**: Uses `::before` pseudo-element with `mix-blend-mode: overlay` and customizable opacity.
- **Dark Mode Support**: Seamlessly adjusts backdrop fill and borders via CSS variables or `[data-theme="dark"]`.
- **Fully Customizable**: All parameters (blur, background color, noise opacity, border highlight, box shadow) exposed via CSS variables (`--ease-glass-*`).
- **Interactive State**: Built-in `:hover` lift and backdrop blur enhancement.

## Class Reference

| Class Name | Description |
| --- | --- |
| `.ease-glass-panel` | Base glassmorphism panel with inline SVG noise grain overlay |
| `.ease-glass-panel-interactive` | Interactive variant with cursor pointer, hover lift & blur effect |
| `.ease-glass-panel-glow` | Panel variant with ambient glow backlight shadow |
| `.ease-glass-panel-dark` | Explicit dark theme panel fill variant |
| `.ease-glass-panel-light` | Explicit light theme panel fill variant |
| `.ease-glass-noise-subtle` | Reduces grain noise opacity to `0.04` |
| `.ease-glass-noise-heavy` | Increases grain noise opacity to `0.15` |

## Quick Start Example

```html
<!-- Basic Noise Glass Panel -->
<div class="ease-glass-panel">
  <h2>Tactile Glass Title</h2>
  <p>Content rendered cleanly over the noise grain glass panel.</p>
</div>

<!-- Interactive Hover Panel with Glow -->
<div class="ease-glass-panel ease-glass-panel-interactive ease-glass-panel-glow">
  <h2>Interactive Card</h2>
  <p>Lifts and enhances backdrop blur on hover.</p>
</div>
```

## CSS Customization Variables

```css
.custom-panel {
  --ease-glass-bg: rgba(255, 255, 255, 0.2);
  --ease-glass-blur: 16px;
  --ease-glass-border: rgba(255, 255, 255, 0.3);
  --ease-glass-noise-opacity: 0.1;
  --ease-glass-radius: 20px;
}
```
