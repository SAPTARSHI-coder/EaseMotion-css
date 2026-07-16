# [SCSS] SCSS Design Token Map for all Delay Increments

## What does this do?
Generates standard transition and animation delay helper classes (`.ease-delay-100`, `.ease-delay-200`, `.ease-delay-300`, `.ease-delay-400`, `.ease-delay-500`, `.ease-delay-1000`) dynamically using a Sass map and an `@each` loop block.

## How is it used?
Assign the delay modifier classes alongside an animation or transition:

```html
<div class="card ease-delay-100">Delay 100ms</div>
<div class="card ease-delay-500">Delay 500ms</div>
```

### SCSS Loop Source
```scss
$delay-tokens: (
  100: 100ms,
  200: 200ms,
  300: 300ms,
  400: 400ms,
  500: 500ms,
  1000: 1000ms
);

@each $name, $value in $delay-tokens {
  .ease-delay-#{$name} {
    animation-delay: #{$value};
    transition-delay: #{$value};
  }
}
```

## Why is it useful?
Declaring all delays in an SCSS map centralizes design tokens and writes utility classes programmatically. This ensures consistent delay increments across all project files.
