# Text Selection Styling

A submission demonstrating CSS `::selection` and `::-moz-selection` pseudo-elements with per-element-type selection colors, dark mode support, and scoped card-level overrides using the EaseMotion design system tokens.

## Features

- Per-element-type selection colors: heading, paragraph, list item, link, code, span, strong
- Component-scoped overrides via `.card::selection` with 5 semantic variants
- Six semantic color variants (primary, secondary, success, danger, warning, info)
- Full `-moz-` prefix support for Firefox compatibility
- Badge component with preserved selection semantics
- Uses `--ease-color-primary`, `--ease-color-secondary`, `--ease-color-info`, `--ease-color-warning`, `--ease-color-success`, `--ease-color-danger`, `--ease-color-success-alpha`
- Dark mode via `prefers-color-scheme: dark`
- Reduced motion support via `prefers-reduced-motion: reduce`

## Usage

```css
/* Global element selection */
p::selection { background: var(--ease-color-secondary); color: #fff; }

/* Component-level override */
.card-success::selection { background: var(--ease-color-success); color: #fff; }
```

## Why is it useful?

The `::selection` pseudo-element provides fine-grained control over text highlighting without JavaScript. Mapping selection colors to semantic design tokens creates a cohesive, branded feel across the UI — primary for general content, secondary for rich media, success for confirmations, danger for warnings. The component override pattern demonstrates design-system-level specificity where global defaults need localized exceptions.
