# EaseMotion SCSS Mixins

A set of SCSS mixins for developers who prefer to compile their own CSS and want more control over EaseMotion animations.

## Usage

Import the mixins into your main SCSS file:

```scss
@import 'path/to/easemotion/submissions/scss/mixins';

.my-custom-card {
  // Apply a bounce animation lasting 1.2 seconds with a delay of 0.5s
  @include ease-motion('bounce', 1.2s, ease-out, 0.5s);
  
  // Make child items stagger their animations
  .list-item {
    @include ease-motion('fade-in');
    @include ease-stagger(5, 0.2s); // 5 items, 0.2s stagger delay
  }
}

.my-button {
  // Apply a pop animation only on hover
  @include ease-hover('pop', 0.3s);
}
```

## Available Mixins

- `@mixin ease-motion($name, $duration, $timing, $delay, $fill-mode, $iteration)`: Applies the base animation.
- `@mixin ease-hover($name, $duration)`: Applies an animation triggered on hover.
- `@mixin ease-stagger($children-count, $delay-increment)`: Generates `nth-child` selectors with incremental delays for staggered lists.
