# Z-Index Scale with Semantic Layer Aliases

## What does this do?

Adds a standardized z-index scale to EaseMotion CSS with numeric utility classes (`ease-z-0` through `ease-z-50`, `ease-z-max`) and semantic layer aliases (`ease-z-dropdown`, `ease-z-navbar`, `ease-z-modal`, `ease-z-tooltip`, `ease-z-toast`) that provide predictable stacking for every component in the framework.

## How is it used?

**Apply a z-index utility class directly:**

```html
<header class="ease-z-navbar">Fixed navigation header</header>
<div class="ease-z-modal">Modal dialog overlay</div>
<div class="ease-z-toast">Toast notification</div>
```

**Use the CSS variables in custom components:**

```css
.custom-fab {
  z-index: var(--ease-z-sticky);
}

.custom-backdrop {
  z-index: var(--ease-z-modal-backdrop);
}
```

## Why is it useful?

Without a standardized z-index system, every project inevitably hits stacking conflicts — a modal appears behind the navbar, a tooltip gets buried by a dropdown, a toast notification hides under the header. This proposal solves that by:

- Defining a single source of truth for all z-index values via CSS custom properties
- Providing semantic layer names that make stacking intent obvious at a glance
- Mapping every framework component (dropdown, sticky, navbar, modal-backdrop, modal, popover, tooltip, toast) to its own tier
- Offering numeric utility classes for custom use cases outside the semantic scale
