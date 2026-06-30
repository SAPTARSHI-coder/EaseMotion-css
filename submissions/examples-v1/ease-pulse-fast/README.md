# ease-pulse-fast — Rapid Pulse Utility

**Fixes:** Issue #11906

## Overview

A pure CSS animation designed for urgent notifications, critical alerts, and high-priority states. It is a faster, more intense version of the standard `ease-pulse` utility, featuring a **0.5s cycle** (instead of 2s) and built-in support for custom alert colors.

## Usage

```html
<!-- Critical Alert Dot -->
<span class="dot ease-pulse-fast"></span>

<!-- Urgent Notification Button -->
<button class="ease-pulse-fast">Action Required!</button>

<!-- Custom Color Alert -->
<div class="alert ease-pulse-fast" style="--ease-pulse-fast-color: #f59e0b;">
  Warning: Connection unstable
</div>
```

## Variants

| Class                     | Description                          |
| ------------------------- | ------------------------------------ |
| `.ease-pulse-fast`        | Rapid scale and opacity pulse (0.5s) |
| `.ease-pulse-fast-border` | Rapid outward "ringing" border pulse |

## Customization

You can easily change the pulse glow color using the dedicated CSS variable:

```css
.my-urgent-item {
  --ease-pulse-fast-color: #9333ea; /* Purple alert */
}
```

## Accessibility

```css
@media (prefers-reduced-motion: reduce) {
  .ease-pulse-fast {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
```

The rapid movement is automatically disabled for users who prefer reduced motion to prevent triggering photosensitive reactions or discomfort.

## Acceptance Criteria

- [x] Faster version of `ease-pulse` (0.5s cycle)
- [x] Includes `--ease-pulse-fast-color` variable
- [x] Ideal for critical alerts and urgent states
- [x] `prefers-reduced-motion` support included
- [x] Zero JavaScript
- [x] No `core/` or `components/` files modified
