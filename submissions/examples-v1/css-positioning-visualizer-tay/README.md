# CSS Positioning Visualizer

Resolves #<issue-number>

A lightweight, CSS-only utility that visually compares all five CSS
`position` values — `static`, `relative`, `absolute`, `fixed`, and
`sticky` — side by side. Zero JavaScript, zero dependencies.

## Preview

Each card shows the same box under a different `position` value, with a
short description of the behavior and a faint grid background so offsets
(`top`, `left`, etc.) are easy to see visually.

| Mode | What it demonstrates |
|------|----------------------|
| Static | Default flow, offsets ignored |
| Relative | Offset from its own original spot, space preserved |
| Absolute | Removed from flow, positioned against nearest positioned ancestor |
| Fixed | Pinned to viewport (simulated within the card for side-by-side comparison — see note below) |
| Sticky | Relative until scrolled past a threshold, then sticks — scrollable inside its card |

## Usage

1. Include `style.css`.
2. Copy the markup structure from `demo.html`.
3. No build step or JavaScript required.

```html
<link rel="stylesheet" href="style.css">

<div class="ease-position-preview-tay">
  <div class="ease-position-card-tay ease-position-static-tay">
    ...
  </div>
</div>
```

## Implementation notes

- **Fixed**: true `position: fixed` positions relative to the browser
  viewport, not its parent card — so in a real page it would escape the
  demo grid entirely. To keep the side-by-side comparison meaningful,
  this card visually simulates the pinned-corner effect using `absolute`
  instead, with a caption clarifying the real-world behavior.
- **Sticky**: `position: sticky` only activates inside a scrollable
  container with enough content to overflow. The sticky card includes an
  inner scroll wrapper with extra height so the effect is actually
  visible, not just declared.
- All classes use the `ease-position-*-tay` naming convention with the `-tay` suffix to avoid naming collisions and follow the repository's submission guidelines.
- Fully responsive via `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))`.

## Files

```
css-positioning-visualizer-tay/
├── demo.html
├── style.css
└── README.md
```