# Pulse Ring Accent

## What does this do?

It creates a status dot indicator that continuously emits expanding concentric rings to draw attention to live events.

## How is it used?

Apply the `pulse-ring-indicator-uj` class to your badge indicator nodes:

```html
<span class="pulse-ring-indicator-uj" style="--pulse-color: #10b981; --pulse-dot-size: 8px;"></span>
```

Customize the indicator parameters using CSS variables:
- `--pulse-color`: Main color of the central dot and pulse ring (defaults to `#10b981`).
- `--pulse-dot-size`: Diameter of the status dot (defaults to `10px`).
- `--pulse-duration`: Loop duration of the expanding pulse (defaults to `1.5s`).

## Why is this useful?

This micro-interaction provides a lightweight visual indicator for live status feeds, alerts, and system tracking tables without JavaScript timers. Running on compositor-friendly properties (`transform: scale` and `opacity`), it minimizes GPU paint cycles and automatically disables all motion when the user requests a reduced motion environment.
