# Shimmer Sweep Modal (SaaS style)

A modal dialog with a one-time shimmer light sweep on open, styled for modern SaaS product UIs.

## Usage
Include the markup and script from `demo.html`. The open/close logic is minimal vanilla JS; the shimmer sweep and modal entrance transition are pure CSS.

## Customization (CSS variables)
| Variable | Purpose | Default |
|---|---|---|
| --modal-duration | Modal open/close transition speed | 280ms |
| --modal-easing | Transition easing | cubic-bezier(0.16, 1, 0.3, 1) |
| --modal-scale-from | Starting scale before entrance | 0.92 |
| --shimmer-color | Color of the light sweep | rgba(255,255,255,0.6) |
| --accent | Brand/button accent color | #6366f1 |

## Accessibility
- `role="dialog"`, `aria-modal="true"`, `aria-labelledby`
- Focus moves to modal on open, returns to trigger on close
- Closes on `Escape` key or clicking the overlay
- Visible focus rings via `:focus-visible`