# Dynamic Color Palette Shading & Tinting Mixins (SCSS)

A powerful SCSS utility module for the EaseMotion design system. It allows developers to generate entire, cohesive 9-step color palettes (from 100 to 900) dynamically using just a single base hex code. 

## Features
- **Perfect Color Scales:** Uses the SCSS `mix()` function (blending with pure white or pure black) to calculate precise tints and shades, maintaining the core hue without muddying the colors.
- **CSS Variable Generation:** The `@mixin ease-generate-palette` automatically maps these calculated colors to modern CSS custom properties on your `:root`, ready for dynamic theming in the browser.
- **Utility Generation:** Optionally generate Tailwind-style utility classes (`.bg-primary-500`, `.text-primary-900`) using the `@mixin ease-generate-color-utilities`.
- **Zero External Dependencies:** Built entirely with native SCSS functions.

## Mixins & Functions

| Name | Type | Parameters | Description |
|------|------|------------|-------------|
| `ease-tint` | `@function` | `$color`, `$percentage` | Mixes white into the base color. |
| `ease-shade`| `@function` | `$color`, `$percentage` | Mixes black into the base color. |
| `ease-generate-palette` | `@mixin` | `$name`, `$base-color` | Generates a 100-900 scale of CSS variables on the element. |
| `ease-generate-color-utilities` | `@mixin` | `$name` | Generates `.bg-*` and `.text-*` utility classes. |

## Installation & Usage

1. Import `_dynamic-color-palette-shading-tinting-mixins.scss` into your main styles.

```scss
@import 'path/to/dynamic-color-palette-shading-tinting-mixins';

// 1. Generate the CSS Variables on the root
:root {
  // Just pass a name and your brand color!
  @include ease-generate-palette('brand', #3b82f6);
  @include ease-generate-palette('accent', #10b981);
}

// 2. (Optional) Generate the utility classes
@include ease-generate-color-utilities('brand');
@include ease-generate-color-utilities('accent');
```

## Compilation Result Example

When compiling the SCSS setup above, the resulting standard CSS output will look exactly like this:

```css
:root {
  /* Brand Palette (Calculated from #3b82f6) */
  --brand-100: #d8e6fd;
  --brand-200: #b1ccfa;
  --brand-300: #8ab3f8;
  --brand-400: #6299f7;
  --brand-500: #3b82f6;
  --brand-600: #2f68c5;
  --brand-700: #234e94;
  --brand-800: #183462;
  --brand-900: #0c1a31;
}

/* Generated Utilities */
.bg-brand-100 { background-color: var(--brand-100); }
.text-brand-100 { color: var(--brand-100); }
.bg-brand-200 { background-color: var(--brand-200); }
.text-brand-200 { color: var(--brand-200); }
/* ... and so on up to 900 */
```
