# 📋 SCSS Accordion Mixin

A reusable SCSS mixin for creating smooth, accessible accordion components.

## Features
- Reusable SCSS mixin with configurable parameters
- Smooth expand/collapse animations
- Keyboard accessible (Enter/Space to toggle)
- Responsive across all devices
- Respects `prefers-reduced-motion`
- Multiple accordion variants (FAQ, Settings, Pricing)

## Mixin Parameters
- `$duration: .35s` – Animation duration
- `$timing: ease` – Timing function
- `$max-height: 500px` – Maximum height of expanded panel

## Usage (SCSS)
```scss
@mixin ease-accordion(
  $duration: .35s,
  $timing: ease,
  $max-height: 500px
) {
  overflow: hidden;
  transition:
    max-height $duration $timing,
    opacity $duration $timing;

  max-height: 0;
  opacity: 0;

  &.is-open {
    max-height: $max-height;
    opacity: 1;
  }
}