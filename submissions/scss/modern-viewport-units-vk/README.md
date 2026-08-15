# SCSS Modern Viewport Units Helper Mixins

A collection of responsive SCSS helper mixins for working with modern viewport units such as `svh`, `lvh`, `dvh`, and `svw`, with practical fallbacks for browsers that do not support them.

## Features

- Small viewport height (`svh`) helper
- Large viewport height (`lvh`) helper
- Dynamic viewport height (`dvh`) helper
- Small viewport width (`svw`) helper
- Combined viewport size helper
- Dynamic viewport size helper
- Browser fallbacks using `vh` and `vw`
- Responsive layout support
- CSS custom-property-friendly architecture
- No JavaScript required
- Lightweight and reusable

## Available Mixins

### `ease-viewport-height-small`

Applies a height based on the small viewport height unit.

    @use "mixins";

    .hero {
      @include mixins.ease-viewport-height-small(100);
    }

This generates a height using `svh` with a `vh` fallback when `svh` is unavailable.

### `ease-viewport-height-large`

Applies a height based on the large viewport height unit.

    @use "mixins";

    .hero {
      @include mixins.ease-viewport-height-large(100);
    }

This is useful when the layout should account for the largest available viewport.

### `ease-viewport-height-dynamic`

Applies a height based on the dynamic viewport height unit.

    @use "mixins";

    .hero {
      @include mixins.ease-viewport-height-dynamic(100);
    }

The `dvh` unit adapts as the browser viewport changes dynamically.

### `ease-viewport-width-small`

Applies a width based on the small viewport width unit.

    @use "mixins";

    .section {
      @include mixins.ease-viewport-width-small(100);
    }

A `vw` fallback is provided when `svw` is unavailable.

### `ease-viewport-size`

Sets both width and height using small viewport units.

    @use "mixins";

    .panel {
      @include mixins.ease-viewport-size(100, 100);
    }

The mixin uses `svw` and `svh` and provides `vw` and `vh` fallbacks.

### `ease-viewport-dynamic`

Sets width and height using dynamic viewport units.

    @use "mixins";

    .app {
      @include mixins.ease-viewport-dynamic(100, 100);
    }

This is useful for layouts that need to adapt to changes in the visible browser viewport.

## Custom Values

The mixins accept numeric values so they can be adapted to different layouts.

    @use "mixins";

    .hero {
      @include mixins.ease-viewport-height-small(80);
    }

    .content {
      @include mixins.ease-viewport-height-dynamic(90);
    }

    .panel {
      @include mixins.ease-viewport-size(90, 80);
    }

## Browser Fallbacks

Modern viewport units are used when supported.

The mixins provide traditional `vh` and `vw` fallbacks through CSS `@supports` rules.

For example:

    @supports not (height: 1svh) {
      .hero {
        height: 100vh;
      }
    }

This allows the same utility to remain usable in browsers without modern viewport unit support.

## Responsive Design

Modern viewport units are particularly useful for responsive layouts where browser interface changes can affect the visible viewport.

The dynamic viewport helper can be used for full-height application layouts:

    @use "mixins";

    .application {
      @include mixins.ease-viewport-dynamic(100, 100);
    }

## Demo

Open `demo.html` directly in a browser to view examples of:

- `svh` small viewport height
- `lvh` large viewport height
- `dvh` dynamic viewport height
- `svw` small viewport width
- Dynamic viewport width and height

No server or JavaScript is required.

## Why It Fits EaseMotion CSS

These helpers provide a lightweight and human-readable SCSS abstraction for modern responsive viewport units.

They keep viewport sizing reusable and composable while providing practical fallbacks for environments where newer viewport units are unavailable.

## Accessibility

The mixins only control layout dimensions and do not introduce interactive behavior.

When using viewport-based layouts, content should remain accessible and should not be clipped or hidden when the viewport changes.

## Files

    _mixins.scss   SCSS viewport utility mixins
    demo.html      Standalone usage examples
    style.css      Demo page styling
    README.md      Documentation and usage examples

## License

This contribution is part of EaseMotion CSS and follows the repository's existing license and contribution guidelines.