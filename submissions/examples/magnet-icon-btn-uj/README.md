# Interactive Magnet Icon

## What does this do?

It moves an icon inside a button in a chosen direction when the parent button is hovered, providing a tactile micro-interaction that guides user attention.

## How is it used?

Add the trigger class to the **button** and `magnet-icon-uj` to the **icon span** inside it:

```html
<!-- Right arrow slide (default) -->
<button class="magnet-arrow-btn-uj">
  Get Started <span class="magnet-icon-uj" aria-hidden="true">→</span>
</button>
```

### Available trigger variants

| Trigger class | Icon movement |
|---|---|
| `magnet-arrow-btn-uj` | Slide right (`translateX`) |
| `magnet-up-btn-uj` | Slide up (`translateY`) |
| `magnet-diagonal-btn-uj` | Slide diagonally (`translate`) |
| `magnet-spin-btn-uj` | Rotate (`rotate`) |

### CSS variables

| Variable | Default | Purpose |
|---|---|---|
| `--magnet-duration` | `0.3s` | Transition speed |
| `--magnet-shift-x` | `6px` | Horizontal travel distance |
| `--magnet-shift-y` | `-5px` | Vertical travel distance |
| `--magnet-rotate` | `90deg` | Rotation angle for spin variant |

## Why is this useful?

Icon micro-interactions improve call-to-action clarity and make UI feel more responsive. Running entirely on compositor-optimised `transform` properties, this effect carries zero layout cost and is automatically disabled for users who prefer reduced motion.
