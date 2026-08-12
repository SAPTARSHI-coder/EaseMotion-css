## What

A CSS-only accordion component demonstrating `interpolate-size: allow-keywords`, which enables smooth CSS transitions between numeric lengths (like `0`) and keyword values (like `auto`). Three clickable sections expand and collapse with a fluid height animation.

## How

Set `interpolate-size: allow-keywords` on the accordion body element, then toggle `height` between `0` and `auto` via JavaScript (or a CSS class). The browser interpolates the keyword value as if it were a numeric length. A `@supports (interpolate-size: allow-keywords)` guard provides progressive enhancement, and a `prefers-reduced-motion` media query disables all animation for accessibility.

## Why

Historically, animating to `height: auto` required brittle JavaScript that measured pixel offsets. `interpolate-size: allow-keywords` delegates this to the browser, producing smoother, more accessible, and more maintainable expand/collapse interactions without hacks or external dependencies.
