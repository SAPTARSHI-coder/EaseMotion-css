# ease-magnetic — Magnetic Hover Button Component

## What does this do?

Creates a button that subtly follows the cursor on hover — a "magnetic" pull effect. The button shifts toward the mouse position within a radius, then snaps back on leave. Requires minimal JS for cursor tracking.

## How is it used?

```html
<button class="ease-magnetic">
  Hover me
  <span class="ease-magnetic-inner">Label</span>
</button>
```

### Classes

| Class                  | Description                            |
| ---------------------- | -------------------------------------- |
| `.ease-magnetic`       | Container that tracks mouse position   |
| `.ease-magnetic-inner` | Inner element that moves toward cursor |

## Custom Properties

| Property                   | Default | Description          |
| -------------------------- | ------- | -------------------- |
| `--ease-magnetic-strength` | `0.3`   | Pull strength (0–1)  |
| `--ease-magnetic-radius`   | `150px` | Activation radius    |
| `--ease-magnetic-duration` | `0.3s`  | Snap-back transition |
