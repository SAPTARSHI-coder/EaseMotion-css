# Neon Spinner

A circular progress spinner featuring neon glow states and an orbiting indicator node.

## What does this do?

Displays loading states using concentric rotating borders and an orbiting indicator for learning progress dashboards.

## How is it used?

```html
<div
  class="neon-spinner-ns"
  role="status"
  aria-live="polite"
  aria-busy="true"
  aria-label="Loading progress"
>
  <div class="neon-spinner-ring-ns"></div>
  <div class="neon-spinner-orb-ns"></div>
</div>

<!-- Customize themes using: .neon-spinner-success-ns or .neon-spinner-spark-ns -->
```

## Why is it useful?

It maps directly to EaseMotion design variables (`--ease-color-*`, `--ease-radius-*`), operates on hardware-accelerated properties (`transform`), and includes native `aria` and `prefers-reduced-motion` fallbacks.
