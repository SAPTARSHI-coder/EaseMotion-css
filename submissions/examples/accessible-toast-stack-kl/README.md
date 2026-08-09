# Screen Reader Accessible Live Notification Toast Stack

A WCAG 2.1 AA compliant, screen reader accessible toast notification stack component system featuring `aria-live` announcements, visual 3D card depth scaling, countdown progress bar timers, pause-on-hover logic, and actionable keyboard navigation callbacks.

## Features

- ♿ **WCAG 2.1 AA Screen Reader Accessibility**:
  - Uses dedicated off-screen `aria-live="polite"` region for standard updates (Success, Info, Warning).
  - Uses `aria-live="assertive"` for critical alerts (Error) so screen readers interrupt immediately.
- ⏸️ **Pause Countdown Timer on Hover/Focus**: Pauses the auto-dismiss timer and progress bar animation (`animation-play-state: paused`) when hovered or keyboard focused, satisfying WCAG 2.2.1 timing requirements.
- 📚 **3D Card Stack Physics**: Multiple active toasts arrange cleanly into an overlapping card stack deck with scale and offset transforms computed using CSS custom property `--stack-index`.
- ⌨️ **Keyboard Focus & Action Buttons**: Actionable buttons ("View File", "Retry", "Upgrade") and dismiss triggers are fully navigable via <kbd>Tab</kbd> key with visible focus rings.
- 📐 **Multiple Placements**: Supports `bottom-right`, `bottom-left`, `top-right`, and `top-left` viewport placement positions.

## File Structure

```text
submissions/examples/accessible-toast-stack-kl/
├── demo.html    # Interactive testing console & showcase
├── index.html   # Main entry demo page
├── style.css    # Toast variant colors, stack offsets, progress bar animation
├── script.js    # ToastManager class, ARIA live region dispatcher, timer handlers
└── README.md    # API documentation and accessibility guide
```

## API Usage

### Initializing ToastManager

```javascript
const toastManager = new ToastManager();

// Show Toast
toastManager.show({
  title: 'File Uploaded',
  message: 'design-spec.pdf was saved to cloud storage.',
  type: 'success', // 'success' | 'info' | 'warning' | 'error'
  duration: 6000,  // ms (0 for persistent)
  actionLabel: 'View File',
  onAction: () => console.log('Action clicked!')
});

// Clear All Toasts
toastManager.clearAll();
```

## Accessibility Implementation Details

| Accessibility Requirement | Implementation |
| :--- | :--- |
| **Live Region Announcements** | `aria-live="polite"` / `aria-live="assertive"` regions update screen readers without forcing visual focus shifts. |
| **Timing Adjustable (WCAG 2.2.1)** | Auto-dismiss countdown pauses on mouse enter or keyboard focus enter. |
| **Focus Outlines** | Prominent outline focus rings (`:focus-visible`) for all action and dismiss controls. |
| **Dismiss Control** | Each toast includes an explicit `aria-label="Dismiss notification..."` close button. |
| **Reduced Motion** | `@media (prefers-reduced-motion: reduce)` disables slide and stack scaling transforms, converting animations into subtle opacity fades. |
