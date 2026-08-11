# SCSS Fluid Typography (`clamp()`) Mixin

Writing responsive typography typically involves a messy stack of media queries. Modern CSS allows us to use the `clamp()` function to scale text smoothly across all screen sizes based on the viewport width (`vw`). However, calculating the exact mathematical slope and intersection required for a perfectly smooth scale is extremely tedious. 

This SCSS mixin handles the complex math for you.

## Features
- Generates a mathematically perfect CSS `clamp()` function.
- Converts all output to `rem` for accessibility (assumes 16px base font).
- Fully customizable viewport bounds (where the scaling starts and stops).
- Dependency-free.

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `$min-size` | `Number` | Required | Minimum font size in pixels (e.g., `16` or `16px`). |
| `$max-size` | `Number` | Required | Maximum font size in pixels (e.g., `32` or `32px`). |
| `$min-viewport` | `Number` | `320` | Viewport width (px) where the font *stops* shrinking. |
| `$max-viewport` | `Number` | `1200` | Viewport width (px) where the font *stops* growing. |

## Usage

Import the mixin and use it in your typographical elements.

```scss
@import 'ease-fluid-type';

// A heading that is 32px on mobile, scaling up to 64px on desktop (1200px screens)
h1 {
  @include ease-fluid-type(32, 64);
}

// A paragraph that scales from 14px to 18px, but only between 768px and 1440px viewports
p {
  @include ease-fluid-type(14, 18, 768, 1440);
}
```

## Why it fits EaseMotion CSS
Fluid, responsive interfaces are core to good animation and motion design. When elements snap violently between sizes at media query breakpoints, it breaks immersion. Using `clamp()` ensures layout changes happen smoothly as the user resizes their window, complementing EaseMotion's fluid animation utilities.
