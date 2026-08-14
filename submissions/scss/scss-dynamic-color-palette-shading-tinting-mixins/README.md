# SCSS Utility: Dynamic Color Palette Shading & Tinting Mixins (#28334)

A fundamental design system module for the EaseMotion CSS framework that provides pure SCSS functions (`ease-tint`, `ease-shade`) to programmatically calculate lighter and darker variants of any given base hex color. 

## 📦 What's included?

- `_dynamic-color-palette-shading-tinting-mixins.scss`: The core math functions for color mixing, alongside a powerful `@mixin generate-color-palette` to instantly build a 10-step CSS variable scale (50-900) from a single color.
- `style.css`: The compiled output of two sample palettes (Blue & Emerald) and button hover states.
- `demo.html`: A visual representation of the generated palettes and interactive hover-state buttons.

## 🛠 Usage via SCSS Functions

Use the core `ease-tint()` and `ease-shade()` functions anywhere in your SCSS to calculate mathematically correct color steps by mixing your base color with white or black respectively.

```scss
@import 'dynamic-color-palette-shading-tinting-mixins';

.my-card {
  background-color: #3b82f6;
  border-color: ease-shade(#3b82f6, 20%);
}
```

## 🛠 Generating a Design System Palette

Instead of manually picking 10 different colors for your primary brand, provide one color and let the math do the work.

```scss
:root {
  // Pass a prefix string and your core brand color.
  // This instantly generates --primary-50 through --primary-900
  @include generate-color-palette('primary', #8b5cf6); // Purple
  @include generate-color-palette('danger', #ef4444);  // Red
}

.alert-danger {
  background: var(--danger-50);
  color: var(--danger-900);
}
```

## 🛠 Automating Hover States

Never hardcode a hover color again.

```scss
.btn-primary {
  // Automatically sets the background, applies a transition, 
  // and darkens the color by 15% on hover.
  @include ease-hover-shade(#3b82f6);
}
```

## 🚀 Why this fits EaseMotion

**EaseMotion** is about fluid, predictable user interfaces. When you hover over a button, it shouldn't randomly change to an unrelated color. It should transition smoothly to a mathematically calculated shade (darker) or tint (lighter) of its original self. 

Hardcoding every single hover state color in a large CSS codebase is tedious and error-prone. By providing these dynamic SCSS functions, developers can build incredibly robust design systems and hover interactions based on mathematical color theory, resulting in a significantly more polished end product.
