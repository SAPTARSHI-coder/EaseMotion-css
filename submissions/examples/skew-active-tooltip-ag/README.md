# Skew-Active Tooltip

A pure CSS/HTML tooltip for creative portfolio layouts. The tooltip
skews in from an angled, scaled-down resting state to its upright
active state on hover or keyboard focus — no JavaScript required.

## Files

- `demo.html` — Standalone showcase page with a 4-item portfolio grid,
  each card wired to a skew-active tooltip.
- `style.css` — All styling and animation, driven by CSS custom
  properties.
- `README.md` — This file.

## Usage

Wrap any element with `.ease-skew-tooltip`, make it focusable
(`tabindex="0"` if it isn't naturally interactive), and add a
`.tooltip-bubble` child with your tooltip text:

```html
<div class="portfolio-card ease-skew-tooltip" tabindex="0">
  <h2 class="card-title">Project Name</h2>
  <span class="tooltip-bubble" role="tooltip">Short description</span>
</div>
```

The tooltip activates on `:hover`, `:focus-visible`, and
`:focus-within`, so it works with mouse, keyboard, and touch (via tap
+ focus on supporting browsers).

## Customization

All visuals are controlled through CSS custom properties on `:root`
(override per-instance by redeclaring them on `.ease-skew-tooltip`):

| Property              | Default                          | Purpose                          |
|-----------------------|-----------------------------------|-----------------------------------|
| `--tooltip-bg`         | `#1b1b1f`                        | Tooltip background color         |
| `--tooltip-color`      | `#f5f5f7`                        | Tooltip text color                |
| `--tooltip-accent`     | `#7c5cff`                        | Border / arrow accent color      |
| `--skew-angle`         | `-10deg`                         | Resting skew angle               |
| `--tooltip-offset`     | `14px`                           | Gap between trigger and tooltip  |
| `--tooltip-duration`   | `320ms`                          | Transition duration              |
| `--tooltip-easing`     | `cubic-bezier(0.22, 1, 0.36, 1)` | Transition easing                |
| `--card-radius`        | `14px`                           | Portfolio card corner radius     |

## Accessibility

- Tooltip trigger elements are keyboard-focusable and respond to
  `:focus-visible` / `:focus-within`, not just `:hover`.
- `role="tooltip"` is set on the bubble for assistive technology.
- Respects `prefers-reduced-motion`: transitions collapse to
  near-instant and the tooltip appears in its final (unskewed) state
  rather than animating.
- Tooltip text wraps and constrains width on small viewports instead
  of overflowing the screen.

## Notes on scope

None — hover/focus is sufficient to meet the issue's interactivity
requirement in pure CSS, so no features were reduced or simplified.