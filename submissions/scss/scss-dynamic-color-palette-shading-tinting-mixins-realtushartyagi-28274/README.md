# SCSS Utility: Dynamic Color Palette Shading & Tinting Mixins

A set of reusable SCSS mixins to programmatically generate 9-step (100–900) color palettes and utility classes from a single base color.

## Files
- `_dynamic-color-palette-shading-tinting-mixins.scss` – Core SCSS mixins and functions.
- `style.css` – Sample compiled CSS showing output for "primary" and "accent" palettes.
- `demo.html` – Visual demonstration of the generated classes.

## Features
- **`ease-tint($color, $percentage)`**: Mixes white into a color.
- **`ease-shade($color, $percentage)`**: Mixes black into a color.
- **`ease-generate-palette($prefix, $base-color)`**: Generates CSS variables (e.g. `--ease-primary-500`) for a 9-step scale (100 to 900). 500 is the base color.
- **`ease-generate-bg-classes($prefix)`**: Generates background color utility classes (e.g., `.ease-bg-primary-500`).
- **`ease-generate-text-classes($prefix)`**: Generates text color utility classes (e.g., `.ease-text-primary-500`).

## Usage

In your main SCSS file:

```scss
@import 'dynamic-color-palette-shading-tinting-mixins';

:root {
  // Generate CSS variables for a blue primary palette
  @include ease-generate-palette('primary', #3b82f6);
  // Generate CSS variables for a teal accent palette
  @include ease-generate-palette('accent', #14b8a6);
}

// Generate the utility classes
@include ease-generate-bg-classes('primary');
@include ease-generate-text-classes('primary');

@include ease-generate-bg-classes('accent');
@include ease-generate-text-classes('accent');
```

## CSS Compilation Result
The above SCSS compiles to CSS variables and utility classes:
```css
:root {
  --ease-primary-100: #d8e6fd; /* ... up to 900 */
}
.ease-bg-primary-500 { background-color: var(--ease-primary-500); }
.ease-text-primary-500 { color: var(--ease-primary-500); }
```

## Why it fits EaseMotion CSS
While EaseMotion is an animation-first library, robust and dynamic color palettes are fundamental to creating accessible, high-quality UIs. Exposing CSS variables allows developers to smoothly transition background and text colors at runtime without compiling new CSS.

---

> **Note:** PR modifies only files inside `submissions/scss/scss-dynamic-color-palette-shading-tinting-mixins-realtushartyagi-28274/`.
