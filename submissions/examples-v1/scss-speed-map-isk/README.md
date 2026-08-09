# [SCSS] SCSS Design Token Map for all Animation Speeds

## What does this do?
Generates standard transition and animation duration helper classes (`.ease-speed-fast`, `.ease-speed-medium`, `.ease-speed-slow`, `.ease-speed-very-slow`) dynamically using a Sass map and an `@each` loop block.

## How is it used?
Assign the speed modifier classes alongside an animation or transition trigger:

```html
<div class="card ease-speed-fast">Fast Card (150ms)</div>
<div class="card ease-speed-very-slow">Very Slow Card (1000ms)</div>
```

### SCSS Loop Source
```scss
$speed-tokens: (
  'fast': 150ms,
  'medium': 300ms,
  'slow': 600ms,
  'very-slow': 1000ms
);

@each $name, $value in $speed-tokens {
  .ease-speed-#{$name} {
    animation-duration: #{$value};
    transition-duration: #{$value};
  }
}
```

## Why is it useful?
Using SCSS maps centralizes speed variable definitions and writes utility classes programmatically. This guarantees consistent timings for both animation keyframes and transitions.
