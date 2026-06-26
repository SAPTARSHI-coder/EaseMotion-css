# SCSS-Based Theming Layer

A dynamic, scalable theme integration architecture built for EaseMotion CSS, bridging Sass map processing with native CSS Custom Properties runtime speed.

## What does this do?

This feature introduces `scss/_theme.scss`, which defines a central `$theme-colors` design token map. It includes a helper function (`color()`) to resolve color custom properties and a provider mixin (`theme-provider()`) to compile and declare custom property values dynamically inside selected elements.

## How is it used?

### Setting Up Themes in SCSS

Expose your color maps and inject them via the `theme-provider()` mixin:

```scss
// style.scss
@use '../../../scss/theme';

// Light mode defaults
:root {
  @include theme.theme-provider((
    "primary":    #6366f1,
    "background": #f8fafc,
    "text":       #1e293b
  ));
}

// Dark mode overrides
.theme-dark {
  @include theme.theme-provider((
    "primary":    #818cf8,
    "background": #0f172a,
    "text":       #cbd5e1
  ));
}

// styling components
.my-card {
  background-color: theme.color("surface");
  border: 1px solid theme.color("border");
  color: theme.color("text");
}
```

### HTML Implementation

Toggle the active theme class dynamically on body or container nodes:

```html
<body class="theme-dark">
  <div class="showcase-card">
    <h2 class="card-title">Dark Mode Panel</h2>
    <button class="theme-btn">Action</button>
  </div>
</body>
```

## Why is it useful?

1. **Design System Single-Source**: Simplifies palette definitions inside centralized maps rather than scattering hardcoded values across multiple stylesheets.
2. **Zero-Delay Theme Switches**: Swapping themes on the page requires no CSS rebuild or page refreshes — it instantly changes the underlying CSS custom properties inside the DOM runtime.
3. **No-Error Mapping**: The safe `color()` function checks the existence of requested keys, issuing compile-time alerts if a theme property is misspelt or missing.
