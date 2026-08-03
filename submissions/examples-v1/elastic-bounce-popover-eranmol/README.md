# CSS Elastic Bounce Popover — Issue #46499

## What does it do?

A pure CSS animated popover with an elastic bounce transition, styled with glassmorphism (frosted-glass) aesthetics. The popover overshoots its target scale on open, then settles — creating a playful, springy feel. Zero JavaScript required.

## How is it used?

Wrap a trigger button and popover panel in a `.popover-wrapper`:

```html
<div class="popover-wrapper">
  <button class="popover-trigger" aria-describedby="pop-1">
    Open popover
  </button>
  <div id="pop-1" class="popover" role="tooltip">
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
| `--popover-duration` | `400ms` | Animation duration |
| `--popover-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Elastic bounce timing |
| `--popover-scale` | `0.85` | Initial scale (lower = more overshoot) |
| `--popover-bg` | `rgba(30, 41, 59, 0.75)` | Glassmorphism background |
| `--popover-radius` | `16px` | Border radius |

### Variants

- `.popover` — default elastic bounce
- `.popover-intense` — larger overshoot, springier
- `.popover-subtle` — gentler bounce, faster

### Glassmorphism Classes

- `.glass-header` — frosted-glass header bar
- `.glass-btn` — frosted-glass button
- `.glass-card` — frosted-glass card

## Why is it useful?

Glassmorphism is a popular modern UI trend. This popover combines the elastic bounce animation (which feels playful and responsive) with the frosted-glass aesthetic, giving developers a ready-to-use component for landing pages, dashboards, and marketing sites — all in pure CSS.
