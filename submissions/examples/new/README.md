# SCSS Scroll Snap Alignment v2 Mixin

An advanced, modular utility mixin for the EaseMotion SCSS suite designed to streamline the creation of fluid, high-performance horizontal or vertical scroll-snap containers.

## Features
- **Flexible Axis Control:** Instantly configure for horizontal (`x`) or vertical (`y`) scrolling flows.
- **Token Integration:** Native support for CSS custom properties/design tokens for gap and padding scales.
- **Clean Aesthetics:** Automatically suppresses default browser scrollbars while retaining native touch momentum physics.
- **Cross-Browser Verified:** Fully equipped with standard prefixes and legacy webkit touch properties.

## Usage Guide
Import your `_mixins.scss` file and apply the mixin inside any container selector:

```scss
@use 'mixins' as *;

.my-carousel {
  @include scroll-snap-align-v2(
    $container-type: mandatory,
    $axis: x,$alignment: center,
    $gap: var(--space-md, 1rem),$padding: var(--space-lg, 2rem)
  );
}
