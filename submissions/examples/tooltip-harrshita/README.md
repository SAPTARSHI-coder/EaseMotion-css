# CSS-Only Tooltip

Four-directional tooltip component using CSS pseudo-elements and transitions.
No JavaScript required.

## Usage

```html
<link rel="stylesheet" href="style.css" />

<span class="ease-tooltip ease-tooltip--top" aria-label="Tooltip description">
  <button>Hover me</button>
  <span class="ease-tooltip__content">Tooltip text</span>
</span>
```

## CSS Classes

| Class | Description |
|-------|-------------|
| `.ease-tooltip` | Wrapper (inline-block) |
| `.ease-tooltip__content` | Tooltip bubble |
| `.ease-tooltip--top` | Appears above trigger |
| `.ease-tooltip--bottom` | Appears below trigger |
| `.ease-tooltip--left` | Appears to the left |
| `.ease-tooltip--right` | Appears to the right |
| `.ease-tooltip--dark` | Dark theme (default) |
| `.ease-tooltip--light` | Light theme variant |

## CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--ease-tt-bg` | `#2d2d44` | Tooltip background |
| `--ease-tt-text` | `#ffffff` | Tooltip text color |
| `--ease-tt-radius` | `7px` | Border radius |
| `--ease-tt-gap` | `10px` | Distance from trigger |
| `--ease-tt-transition` | `0.2s ease` | Show/hide speed |

## Accessibility

- Add `aria-label` on the wrapper for screen readers
- Tooltip shows on `:focus-within` for keyboard navigation
- Animation disabled via `prefers-reduced-motion`

Closes #67721
