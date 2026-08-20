# SCSS Perspective Origin & Transform Origin Helpers (`#81289`)

A comprehensive suite of SCSS helper mixins for managing 3D spatial perspective origin and transform origin alignment in EaseMotion CSS.

## What does this do?

Provides modular SCSS mixins for controlling 3D `perspective-origin` and `transform-origin` with browser fallbacks, dynamic CSS custom property integration (`--ease-perspective-origin-*`), and preset spatial alignments.

## Parameters

| Mixin | Parameter | Type | Default | Description |
|-------|-----------|------|---------|-------------|
| `@mixin ease-perspective-origin` | `$x` | `Length / Keyword` | `center` | Horizontal perspective origin position |
| | `$y` | `Length / Keyword` | `center` | Vertical perspective origin position |
| | `$use-vars` | `Boolean` | `true` | Incorporates CSS variables for runtime configuration |
| `@mixin ease-transform-origin-3d` | `$x` | `Length / Keyword` | `center` | X-axis transform origin position |
| | `$y` | `Length / Keyword` | `center` | Y-axis transform origin position |
| | `$z` | `Length` | `0px` | Z-axis (depth) origin position |
| | `$use-vars` | `Boolean` | `true` | Enables CSS variable integration |
| `@mixin ease-spatial-stage` | `$perspective` | `Length` | `1000px` | 3D perspective viewport distance |
| | `$origin-x` | `Length / Keyword` | `center` | Horizontal perspective focal point |
| | `$origin-y` | `Length / Keyword` | `center` | Vertical perspective focal point |
| `@mixin ease-perspective-origin-preset` | `$preset` | `String` | `'center'` | Preset position (`top-left`, `top-right`, `bottom-left`, `bottom-right`, `center`, `top-center`, `bottom-center`) |

## Usage Examples

### 1. Basic 3D Perspective Stage Setup

```scss
@use 'perspective-origin-helper' as *;

.card-container {
  @include ease-spatial-stage(1200px, center, top);
}

.card-element {
  @include ease-transform-origin-3d(50%, 50%, -50px);
}
```

### 2. Using Preset Alignments

```scss
.hero-scene {
  @include ease-perspective-origin-preset('top-right');
}
```

### 3. Dynamic CSS Variable Overrides

```scss
.interactive-viewport {
  @include ease-set-perspective-vars(30%, 70%);
  @include ease-perspective-origin();
}
```

## Why is it useful?

Precise 3D spatial alignment requires syncing `perspective-origin` and `transform-origin` across multi-layer CSS 3D transforms. This helper suite simplifies dynamic 3D spatial positioning and fits directly into EaseMotion's modular CSS motion framework.
