# CSS Fade-In Toast for Creative Portfolio Layouts (#54599)

A lightweight, pure CSS/HTML Toast Notification system featuring smooth spring keyframe fade-in animations, customizable status themes, progress countdown lines, and glassmorphic aesthetics crafted specifically for Creative Portfolio layouts.

## What does this do?
Provides non-intrusive, pure CSS-animated toast notifications that fade in gracefully with scale-and-slide motion when triggered in modern web interfaces.

## How is it used?
Add the toast element inside your toast stack container:

```html
<div class="toast-stack" role="status" aria-live="polite">
  <div class="toast-card toast-card--success">
    <div class="toast-icon-wrapper">
      <!-- Icon SVG -->
    </div>
    <div class="toast-body">
      <strong class="toast-title">Message Sent!</strong>
      <p class="toast-message">Your message has been delivered.</p>
    </div>
    <label for="toast-success" class="toast-close" aria-label="Dismiss notification">✕</label>
    <div class="toast-progress toast-progress--success"></div>
  </div>
</div>
```

## Why is it useful?
- **Zero JavaScript Dependencies**: Uses HTML input checkbox state control for pure CSS interactivity without relying on JS bundles.
- **Performant Keyframe Motion**: Uses GPU-accelerated `transform` and `opacity` properties for 60FPS animations.
- **Glassmorphic Portfolio Theme**: Designed with dark theme tokens, subtle backdrop filters, and vibrant status indicators ideal for creative portfolio sites.
- **Accessible & Screen Reader Ready**: Includes proper ARIA roles (`role="status"`, `role="alert"`, `aria-live="polite"`), focusable controls, and `prefers-reduced-motion` support.

## CSS Custom Properties (Design Tokens)

| Property | Default Value | Description |
|---|---|---|
| `--toast-success-bg` | `rgba(16, 185, 129, 0.12)` | Background tint for success toast |
| `--toast-success-border` | `rgba(16, 185, 129, 0.35)` | Border color for success toast |
| `--toast-success-color` | `#34d399` | Accent text/icon color for success |
| `--toast-info-color` | `#38bdf8` | Accent text/icon color for info |
| `--toast-warning-color` | `#fbbf24` | Accent text/icon color for warning |
| `--toast-action-color` | `#c084fc` | Accent text/icon color for action toast |
| `--duration-normal` | `400ms` | Entrance animation duration |
| `--ease-spring` | `cubic-bezier(0.16, 1, 0.3, 1)` | Easing curve for spring entrance |

## Features & Variants Included
1. **Success Toast**: Feedback for form submissions or email sends.
2. **Info Toast**: Confirmation for link copying or status updates.
3. **Warning Toast**: Alerts for storage limits or threshold warnings.
4. **Action Toast**: Interactive notifications with "Undo Action" buttons.

## Accessibility Details
- Respects `@media (prefers-reduced-motion: reduce)` by disabling spring transforms and defaulting to instant opacity transitions.
- Supports keyboard navigation with visible focus states (`:focus-visible`).
- Provides semantic HTML5 structure with ARIA attributes.
