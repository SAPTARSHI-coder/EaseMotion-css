# Elastic-Slide Checkout Modal

A multi-step e-commerce checkout modal with a left-slide elastic spring entrance animation. Pure CSS transitions handle all motion — no animation libraries required.

## Files

| File | Description |
|---|---|
| `demo.html` | Interactive three-step checkout demo |
| `style.css` | Component styles with CSS custom properties |
| `README.md` | This file |

## What it does

- Modal panel slides in from the left using `translateX` + a `cubic-bezier(0.34, 1.56, 0.64, 1)` spring ease
- Three-step form: Contact → Payment → Order Review
- Step indicator strip with active/done state transitions
- Top progress bar fills proportionally to the current step
- Each step pane re-animates with a smaller elastic slide-in as users progress
- Success state with a scale-pop icon animation on order confirm
- Overlay closes with a reverse right-slide on dismiss

## Usage

```html
<!-- Trigger -->
<button onclick="openModal('modal-checkout')">Open Checkout</button>

<!-- Modal markup -->
<div class="modal-overlay" id="modal-checkout" role="dialog" aria-modal="true">
    <div class="modal-panel" data-step="1">
        <div class="modal-progress-strip"></div>
        <!-- header, steps, body, footer -->
    </div>
</div>
```

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--modal-width` | `480px` | Max panel width |
| `--modal-radius` | `16px` | Panel border radius |
| `--modal-slide-distance` | `60px` | Horizontal slide travel distance |
| `--modal-duration` | `0.42s` | Entrance/exit duration |
| `--modal-ease` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Spring timing function |
| `--modal-accent` | `#6366f1` | Accent colour (progress, buttons, focus) |
| `--modal-overlay-bg` | `rgba(0,0,0,0.55)` | Backdrop colour |

## Accessibility

- `role="dialog"` and `aria-modal="true"` on overlay
- `aria-labelledby` points to modal title
- Closes on `Escape` key
- `prefers-reduced-motion`: all transitions and animations are disabled; modal appears instantly
- Trap focus managed via `tabindex`

## Related issue

Implements [#62493](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/62493) — Enhancement: Add CSS Elastic-Slide Modal for E-Commerce Checkout Layouts.

Part of GSSoC-26.
