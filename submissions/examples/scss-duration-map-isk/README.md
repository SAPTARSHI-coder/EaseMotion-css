# [SCSS] Generate ease-duration-* utility classes from SCSS map

## What does this do?
Generates standard transition and animation duration helper classes (`.ease-duration-fast`, `.ease-duration-medium`, `.ease-duration-slow`) dynamically using a Sass map and an `@each` loop block.

## How is it used?
Apply the duration modifier classes alongside a transition:

```html
<div class="card ease-duration-fast">Fast Card (150ms)</div>
<div class="card ease-duration-slow">Slow Card (600ms)</div>
```

### SCSS Loop Source
```scss
$durations: (
  'fast': var(--ease-speed-fast, 150ms),
  'medium': var(--ease-speed-medium, 300ms),
  'slow': var(--ease-speed-slow, 600ms)
);

@each $name, $value in $durations {
  .ease-duration-#{$name} {
    transition-duration: #{$value};
    animation-duration: #{$value};
  }
}
```

## Why is it useful?
Using SCSS maps centralizes speed variables and dynamically writes rules for both transitions and animations, ensuring all speed configurations are consistently applied and easily extended with a single config map change.
