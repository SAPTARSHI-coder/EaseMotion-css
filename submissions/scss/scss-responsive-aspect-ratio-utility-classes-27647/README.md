# Responsive Aspect Ratio Utility Classes

A lightweight, modular SCSS utility for the EaseMotion CSS ecosystem. This module provides a reusable mixin for creating responsive aspect-ratio wrappers and a set of ready-to-use utility classes for common ratios.

## Overview

The module uses the native CSS `aspect-ratio` property for modern browsers and includes a lightweight fallback using a padding-based technique for environments that do not support it yet. Everything is written in pure SCSS and does not rely on any external libraries.

## Files

- `_responsive-aspect-ratio-utility-classes.scss` — the reusable mixin and generated utilities
- `main.scss` — example entry point used to compile `style.css`
- `demo.html` — a simple browser demo
- `style.css` — compiled CSS output

## Mixin Parameters

### `@mixin ease-aspect-ratio($width, $height, $display: block)`

| Parameter | Type | Default | Description |
|---|---|---|---|
| `$width` | number | `16` | The width value in the ratio |
| `$height` | number | `9` | The height value in the ratio |
| `$display` | string | `block` | The display mode applied to the element |

### Example

```scss
@import "responsive-aspect-ratio-utility-classes";

.hero-media {
  @include ease-aspect-ratio(16, 9);
}
```

## Utility Classes

The module generates the following classes automatically:

- `.ease-aspect-1x1`
- `.ease-aspect-4x3`
- `.ease-aspect-3x2`
- `.ease-aspect-16x9`
- `.ease-aspect-9x16`
- `.ease-aspect-21x9`

## Usage Examples

```scss
@import "responsive-aspect-ratio-utility-classes";

.card-media {
  @include ease-aspect-ratio(4, 3);
}

.portrait-media {
  @include ease-aspect-ratio(9, 16);
}
```

## Compiled CSS Example

```css
.ease-aspect-16x9 {
  display: block;
  max-width: 100%;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
}
```

## Compile Instructions

```bash
npx sass main.scss style.css
```

## Demo

Open `demo.html` in a browser to explore the generated classes visually.
