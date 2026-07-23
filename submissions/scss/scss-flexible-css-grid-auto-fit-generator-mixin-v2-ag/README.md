# Flexible CSS Grid Auto-Fit Generator Mixin (SCSS)

A highly reusable SCSS mixin for the EaseMotion design system that generates infinitely responsive grids **without the need for media queries**. It leverages CSS Grid's `auto-fit` and `minmax()` functions, combined with a `min(100%)` trick, to prevent horizontal overflow on ultra-small screens.

## Features
- **Zero Media Queries:** The grid dynamically calculates when to wrap items based strictly on container width availability.
- **Overflow Protection:** Uses `minmax(min($min-width, 100%), 1fr)` ensuring that if the screen is narrower than the defined `$min-width` (e.g. mobile devices below 320px), the column shrinks to 100% instead of breaking out of the viewport.
- **Customizable Alignment:** Accepts parameters for min-width, gap spacing, and block/inline item alignment.
- **Pre-compiled Utilities:** Ships with `.ease-grid-sm`, `.ease-grid-md`, and `.ease-grid-lg` utility classes for instant layout scaffolding.

## Mixin Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `$min-width` | `Length` | `250px` | The minimum width a column must be before it is forced to wrap to the next row. |
| `$gap` | `Length` | `1rem` | The space between grid cells (applied to both rows and columns). |
| `$align-items` | `String` | `stretch` | Align items on the block axis (e.g., `center`, `start`). |
| `$justify-items` | `String` | `stretch` | Justify items on the inline axis. |

## Installation & Usage

1. Import `_flexible-css-grid-auto-fit-generator-mixin.scss` into your main SCSS architecture.

```scss
@import 'path/to/flexible-css-grid-auto-fit-generator-mixin';

// Basic Usage
.dashboard-widget-grid {
  @include ease-grid-auto-fit(); // Uses defaults (250px, 1rem)
}

// Advanced Usage
.product-gallery {
  @include ease-grid-auto-fit(320px, 2.5rem, center, center);
}
```

## Compilation Result Example

When compiling the following SCSS:
```scss
.product-gallery {
  @include ease-grid-auto-fit(320px, 2.5rem);
}
```

The resulting standard CSS output will look exactly like this:
```css
.product-gallery {
  display: grid;
  gap: 2.5rem;
  grid-template-columns: repeat(auto-fit, minmax(min(320px, 100%), 1fr));
}
```
