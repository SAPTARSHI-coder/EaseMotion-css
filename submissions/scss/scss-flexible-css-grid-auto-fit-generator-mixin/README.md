# _flexible-css-grid-auto-fit-generator-mixin.scss

A responsive CSS Grid mixin for EaseMotion CSS.

## What it does

Provides `ease-grid-auto-fit`, a mixin that generates a responsive grid layout using `repeat(auto-fit, minmax(...))` — items wrap automatically based on a minimum width, with no media queries needed. Optionally caps the maximum number of columns using `min()`, so grids don't sprawl too wide on large viewports.

## Parameters

### `ease-grid-auto-fit($min-item-width, $gap, $max-columns, $fit)`

| Parameter        | Type          | Default                              | Description                                                        |
| ----------------- | ------------- | ---------------------------------------| ---------------------------------------------------------------------- |
| `$min-item-width`| Length        | `$ease-grid-min-item-width` (`200px`)| Minimum width of each grid item before it wraps to a new row.        |
| `$gap`           | Length        | `$ease-grid-gap` (`1rem`)            | Gap between grid items.                                              |
| `$max-columns`   | Number \| Null| `null`                               | Optional cap on column count, even on very wide viewports.           |
| `$fit`           | String        | `"auto-fit"`                         | `"auto-fit"` or `"auto-fill"`.                                       |

### Configuration variables

| Variable                    | Default | Description                     |
| ------------------------------| ------- | ------------------------------------ |
| `$ease-grid-min-item-width`   | `200px` | Default minimum item width.          |
| `$ease-grid-gap`              | `1rem`  | Default gap between items.           |

## Usage

```scss
@use "flexible-css-grid-auto-fit-generator-mixin" as *;

// Basic auto-fit grid
.card-grid {
  @include ease-grid-auto-fit;
}

// Custom min width and gap
.gallery {
  @include ease-grid-auto-fit($min-item-width: 150px, $gap: 0.5rem);
}

// Capped at 4 columns max
.product-grid {
  @include ease-grid-auto-fit($min-item-width: 220px, $max-columns: 4);
}
```

## CSS compilation results

`@include ease-grid-auto-fit;` with all defaults compiles to:

```css
.card-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
```

`@include ease-grid-auto-fit($min-item-width: 220px, $max-columns: 4);` compiles to:

```css
.product-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(min(220px, 100% / 4), 1fr));
}
```

## Why this fits EaseMotion CSS

Auto-fit/auto-fill grids are one of the most common layout needs, but hand-writing `minmax()` expressions (especially with a column cap) is easy to get wrong. This mixin wraps the pattern into a single, well-documented include with sane defaults, consistent with EaseMotion's utility-first, zero-JS approach.
