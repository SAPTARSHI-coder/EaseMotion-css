# CSS Fade-Out Popover — Issue #46610

## What does it do?

A pure CSS animated popover component with a smooth fade-out transition, designed for marketing landing pages. The popover appears on focus/click with a scale + fade animation and disappears with a reverse fade-out — zero JavaScript required.

## How is it used?

Wrap a trigger button and popover panel in a `.popover-wrapper`:

```html
<div class="popover-wrapper">
  <button class="popover-trigger" aria-describedby="popover-1">
    Open popover
  </button>
  <div id="popover-1" class="popover" role="tooltip">
    <div class="popover-arrow"></div>
    <h3>Title</h3>
    <p>Content goes here.</p>
    <button class="popover-close" aria-label="Close">&times;</button>
  </div>
</div>
```

### CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--popover-duration` | `250ms` | Animation duration |
| `--popover-easing` | `cubic-bezier(0.16, 1, 0.3, 1)` | Timing function |
| `--popover-scale` | `0.95` | Initial scale (lower = more dramatic) |
| `--popover-bg` | `#1e293b` | Background color |
| `--popover-radius` | `10px` | Border radius |

### Variants

- `.popover` — default fade + scale
- `.popover-scale` — larger scale difference
- `.popover-slide` — slides up from below

## Why is it useful?

Marketing landing pages benefit from polished, zero-dependency UI patterns. This popover uses only CSS transitions triggered by `:focus-within`, making it accessible (keyboard navigable), lightweight, and easy to customize via CSS custom properties.
