# Container Query Cards

This submission demonstrates CSS Container Queries (`@container`) for creating truly responsive components that adapt based on their parent container's width, not the viewport. Uses EaseMotion's `--ease-*` design tokens throughout.

## Features

- `container-type: inline-size` on parent wrappers creates a containment context
- `@container` breakpoints switch cards from vertical to horizontal layout
- Card grid that goes from 1 → 2 → 3 columns based on container width
- Hover effects with `--ease-speed-medium` and `--ease-shadow-*` tokens
- Tag badges, buttons, and text using `--ease-color-*` palette
- Dark mode support via `prefers-color-scheme: dark`
- Reduced motion fallback via `prefers-reduced-motion: reduce`

## Usage

```html
<div class="card-wrapper" style="container-type: inline-size;">
  <article class="cq-card">
    <div class="cq-card-image">CQ</div>
    <div class="cq-card-body">...</div>
  </article>
</div>
```

## Why is it useful?

Container Queries solve the fundamental limitation of media queries: components can't know their context. With `@container`, the same card component adapts to a sidebar, a main column, or a full-width layout — all without writing component-specific CSS. Powered by EaseMotion's `--ease-space-*` spacing scale and `--ease-color-*` tokens.
