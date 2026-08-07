# CSS Responsive Card with Container Queries

**Issue:** [#64062](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/64062)

Responsive card component using CSS Container Queries (`@container`) to adapt
layout based on the card's own width rather than the viewport width.

## Design Tokens

| Token | Value | Description |
|-------|-------|-------------|
| `--rcard-bg` | `#0c0f18` | Page background |
| `--rcard-surface` | `#141827` | Card fill |
| `--rcard-border` | `#1e2640` | Card border |
| `--rcard-primary` | `#818cf8` | Primary accent |
| `--rcard-secondary` | `#c084fc` | Secondary accent |
| `--rcard-radius` | `16px` | Border radius |

## Container Query Behavior

At container width >= 300px, cards switch from column to row layout
with image on the left and content on the right.

## Variants

| Variant | Description |
|---------|-------------|
| Default | Column layout with top image |
| `featured` | Featured badge with gradient overlay |
| `horizontal` | Row layout (viewport-triggered) |

## Usage

```html
<link rel="stylesheet" href="style.css">
```

## Browser Support

Container queries require Chrome 105+, Safari 16+, Firefox 110+.

## Accessibility

- `prefers-reduced-motion`: Removes hover transitions
- Semantic HTML with proper heading hierarchy
- Keyboard-accessible link elements
