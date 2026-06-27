# [SCSS] Implement dark mode token overrides using SCSS color maps

## What does this do?
Implements a clean, map-driven theme override system for light and dark modes in Sass. It generates CSS custom property overrides automatically inside both the `prefers-color-scheme: dark` media query and a manual `.dark-mode` body class.

## How is it used?
Style elements utilizing the compiled CSS properties:

```css
.card {
  background-color: var(--ease-color-surface);
  color: var(--ease-color-text);
  border-color: var(--ease-color-muted);
}
```

### SCSS Map Implementation
Define two maps containing identical keys and loop over them to output the property declarations:

```scss
$light-theme: (
  'color-bg': #f8fafc,
  'color-surface': #ffffff,
  'color-text': #1e293b,
  'color-muted': #64748b,
  'color-primary': #6c63ff
);

$dark-theme: (
  'color-bg': #0f172a,
  'color-surface': #1e293b,
  'color-text': #f8fafc,
  'color-muted': #94a3b8,
  'color-primary': #8b5cf6
);

:root {
  @each $name, $value in $light-theme {
    --ease-#{$name}: #{$value};
  }
}

body.dark-mode {
  @each $name, $value in $dark-theme {
    --ease-#{$name}: #{$value};
  }
}
```

## Why is it useful?
Using SCSS maps prevents duplicate token keys and manually declared styles for dark mode. If a new color token needs to be added, simply add it to the light and dark maps, and Sass handles writing all CSS overrides automatically.
