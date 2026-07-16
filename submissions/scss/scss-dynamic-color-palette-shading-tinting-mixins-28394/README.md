# SCSS Utility: Dynamic Color Palette Shading & Tinting Mixins (#28394)

A suite of clean, reusable SCSS functions and mixins for generating dynamic color scales by tinting (mixing with white) and shading (mixing with black) any base color. Outputs harmonious CSS custom property palettes. Zero external dependencies.

## 📦 What's included?

- `_dynamic-color-palette-shading-tinting-mixins.scss`: The SCSS partial with 2 functions and 4 mixins.
- `style.css`: Compiled CSS showing example palette custom properties and swatch utility classes.
- `demo.html`: A static demo page showing colored swatches for blue and emerald palettes.

## 🛠 API Reference

### Functions

| Function | Description |
|----------|-------------|
| `ease-tint($color, $amount)` | Mixes a color with white by `$amount` percent |
| `ease-shade($color, $amount)` | Mixes a color with black by `$amount` percent |

### Mixins

| Mixin | Description |
|-------|-------------|
| `ease-tint-scale($base-color, $prefix, $steps)` | Outputs `--{prefix}-100` through `--{prefix}-900` CSS variables (tints) |
| `ease-shade-scale($base-color, $prefix, $steps)` | Outputs `--{prefix}-shade-100` through `--{prefix}-shade-900` CSS variables |
| `ease-palette($base-color, $prefix, $steps)` | Outputs both tint + shade scale plus `--{prefix}-base` |
| `ease-palette-bg($prefix, $level, $text)` | Applies `background-color` + `color` from the palette variables |

## 🚀 How to use

```scss
@import 'dynamic-color-palette-shading-tinting-mixins';

// 1. Generate the full palette on :root
:root {
  @include ease-palette(#3b82f6, 'blue');
  @include ease-palette(#10b981, 'emerald');
}

// 2. Use the generated CSS variables directly
.card {
  background-color: var(--blue-100); // Very light tint
  border-color: var(--blue-300);
  color: var(--blue-shade-700);       // Dark shade for text
}

// 3. Or use the utility mixin to apply color classes
.badge-success {
  @include ease-palette-bg('emerald', '500');
  // Compiles to: background-color: var(--emerald-500); color: #ffffff;
}

// 4. Use functions directly for one-off values
.highlight {
  background-color: ease-tint(#f43f5e, 85%);  // Very light rose
  border-left: 3px solid ease-shade(#f43f5e, 20%);
}
```

## 🎨 Why this fits EaseMotion

**EaseMotion** is about making UI development predictable, fluid, and human-readable.

Hard-coded hex colors scattered across a stylesheet are fragile — changing a brand color requires a tedious find-and-replace. By generating a full 9-step palette of tints and shades as CSS custom properties from a single base color, any theming change propagates automatically. The `ease-tint()` and `ease-shade()` functions use SCSS's battle-tested `mix()` function for perceptually consistent results, while the mixin API keeps the developer's intent perfectly readable.
