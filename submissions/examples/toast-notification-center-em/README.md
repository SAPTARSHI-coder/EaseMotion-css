# Interactive Toast Notification Stacking Drawer

> A floating, stacked Toast Notification Center component that manages multiple simultaneous alerts (success, warning, error, info) with auto-dismiss progress bars and slide animations.

## Features

- **Queue Management** — Safely handles multiple overlapping toasts simultaneously, capping the visual stack limit to prevent UI clutter.
- **Auto-Dismiss Timers** — Each toast features a shrinking CSS progress bar that reflects its lifecycle before disappearing.
- **Manual Dismissal** — Includes an accessible close button that triggers a smooth fade-and-shrink exit animation.
- **Alert Themes** — Includes predefined stylistic themes for Success (Emerald), Error (Red), Warning (Amber), and Info (Blue).
- **Accessible ARIA Regions** — The toast drawer uses `aria-live="polite"` or `assertive` to announce updates to screen readers.
- **Motion Safe** — Honors OS-level `prefers-reduced-motion` settings by bypassing keyframe animations.

## Files

```
submissions/examples/toast-notification-center-em/
├── demo.html    — HTML structure defining the fixed wrapper, trigger controls, and inline SVG sprites
├── style.css    — Toast CSS, layout stacking, color tokens, and `@keyframes` slide/fade transitions
├── script.js    — DOM logic for injecting toasts, managing the dismissal timeout queue, and cleanup
└── README.md    — Component documentation
```

## Design Tokens

| Variable | Default Value | Purpose |
|---|---|---|
| `--toast-bg` | `#1e293b` | Background color of toast |
| `--toast-success` | `#10b981` | Success theme color |
| `--toast-width` | `380px` | Base width of a desktop toast |
| `--toast-speed` | `0.35s` | Timing for slide-in animations |

## Usage

Include the container somewhere near the bottom of your `<body>`:

```html
<div class="toast-container" id="toast-container" aria-live="polite" role="region" aria-label="Notifications">
  <!-- JavaScript appends elements here -->
</div>
```

Triggering a notification via JavaScript:

```javascript
// Assuming logic exists in script.js
createToast('success'); // 'success', 'error', 'warning', or 'info'
```

## Acceptance Criteria ✅

- [x] Toast messages animate smoothly into view from the screen edge.
- [x] Each toast includes a shrink timer progress bar reflecting auto-dismiss duration.
- [x] Manual close button removes individual toast instantly with a fade-out effect.
- [x] Supports multiple concurrent stacked toasts without visual overlap glitches.
- [x] ARIA live region (`aria-live="polite"`) configured correctly.
- [x] Adheres to repository component file structure rules.
