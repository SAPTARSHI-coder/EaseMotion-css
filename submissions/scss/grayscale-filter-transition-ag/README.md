# Grayscale Filter Transition SCSS Mixins

## What does this do?
Adds comprehensive SCSS mixins to create smooth, responsive CSS filter transitions (grayscale, sepia, and hue-rotate) with CSS variables, vendor prefixes, and accessibility (reduced motion) fallbacks.

## How is it used?

Include the mixin in your SCSS file:

```scss
@import 'grayscale-filter-transition';

// Standard grayscale transition on hover
.image-gallery img {
  @include grayscale-transition(100%, 0.4s, ease-out);
}

// Vintage sepia effect
.card-vintage {
  @include sepia-transition(80%, 0.3s, ease-in-out);
}

// Color cycling effect
.dynamic-logo {
  @include hue-rotate-transition(180deg, 0.5s);
}

// Custom filter base mixin
.custom-element {
  @include filter-transition(invert, 100%, 0.2s, linear);
}
```

## Why is it useful?
It seamlessly integrates complex CSS filter transitions with minimal SCSS boilerplate, while adhering to EaseMotion's standards for accessibility (honoring `prefers-reduced-motion`) and CSS variables integration, ensuring the effects degrade gracefully and can be easily customized dynamically.
