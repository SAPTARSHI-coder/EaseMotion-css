# Ease Shimmer Sweep Popover

## Description

A pure CSS popover component that reveals additional information with a polished shimmer sweep effect. The panel appears on hover and keyboard focus, with no JavaScript required.

## Features

- CSS-only popover reveal using `:hover` and `:focus-within`
- Animated shimmer sweep overlay inside the popover panel
- Fully customizable through CSS custom properties
- Accessible trigger and content with `aria-describedby` and `role="tooltip"`
- Reduced-motion support disables the shimmer animation for users who prefer less motion

## Usage

```html
<div class="ease-shimmer-popover">
  <button class="popover-trigger" type="button" aria-describedby="popover-1">
    Show details
  </button>

  <div class="popover-panel" id="popover-1" role="tooltip">
    <strong>Why this works:</strong> the popover is revealed by CSS alone, and
    the sweeping highlight is rendered with a pseudo-element animation.
  </div>
</div>
```

## Customization

| Property                   | Default                  | Description                                |
| -------------------------- | ------------------------ | ------------------------------------------ |
| `--popover-bg`             | `#0f172a`                | Popover background color                   |
| `--popover-fg`             | `#f8fafc`                | Popover text color                         |
| `--popover-accent`         | `#38bdf8`                | Button accent and focus ring color         |
| `--popover-offset`         | `12px`                   | Distance between trigger and popover panel |
| `--popover-duration`       | `0.18s`                  | Reveal transition duration                 |
| `--popover-sweep-duration` | `2.2s`                   | Shimmer sweep animation duration           |
| `--popover-sweep-color`    | `rgba(255,255,255,0.22)` | Shimmer glow color                         |

## Accessibility

The popover supports keyboard users via `:focus-within`, and the panel uses `role="tooltip"` with `aria-describedby` on the trigger. Users who prefer reduced motion receive a simpler reveal without continuous shimmer animation.

## Files

- `demo.html` — working showcase for the popover component
- `style.css` — component styles and animation
- `README.md` — usage notes and customization guidance
