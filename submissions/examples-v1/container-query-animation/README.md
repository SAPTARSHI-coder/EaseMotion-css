# @container Animation Demo

## What does this do?

Demonstrates container query animations using `@container` — where animation speed, layout direction, and content visibility change based on the container's width, not the viewport.

## How is it used?

```css
.container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .child {
    animation: fast-pulse 1.5s infinite;
  }
}

@container (max-width: 399px) {
  .child {
    animation: slow-pulse 3s infinite;
  }
}
```

## Why is it useful?

Container queries free animations from viewport-based breakpoints, allowing components to adapt their motion based on their own available space — critical for reusable design system components that appear in sidebars, modals, and full-width layouts. This fits EaseMotion CSS's component-oriented, human-readable approach by keeping animation context-aware and self-contained.
