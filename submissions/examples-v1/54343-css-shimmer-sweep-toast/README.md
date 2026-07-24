# CSS Shimmer-Sweep Toast for Accessible Web Layouts

## What does this do?

A pure CSS toast notification system with a shimmer sweep animation effect. Toasts slide in from the right, display a shimmer gradient that sweeps across the surface, and auto-dismiss via a CSS progress bar. Built for accessible web layouts with full `prefers-reduced-motion` support and ARIA attributes.

## How is it used?

1. Include `style.css` in your HTML file.
2. Use the following HTML structure:

```html
<div class="toast-container" aria-live="polite" aria-label="Toast notifications">
  <input type="checkbox" id="dismiss-toast" class="toast-toggle">
  <div class="toast success" role="alert" aria-atomic="true">
    <div class="toast-icon" aria-hidden="true">&#10003;</div>
    <div class="toast-body">
      <div class="toast-title">Title</div>
      <div class="toast-message">Message goes here.</div>
    </div>
    <label for="dismiss-toast" class="toast-dismiss" aria-label="Dismiss notification">&#10005;</label>
  </div>
</div>
```

### Available toast types

- `.toast.success` — Green accent, success icon
- `.toast.error` — Red accent, error icon
- `.toast.warning` — Yellow accent, warning icon
- `.toast.info` — Blue accent, info icon

### CSS Custom Properties

```css
:root {
  --bg-primary: #0a0a0f;
  --bg-surface: #141420;
  --bg-toast: #1a1a2e;
  --text-primary: #e8e8f0;
  --text-secondary: #7a7a8a;
  --border-color: #2a2a3a;
  --shimmer-color: rgba(255, 255, 255, 0.08);
  --shimmer-width: 120px;
  --toast-radius: 12px;
  --toast-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  --accent-success: #22c55e;
  --accent-error: #ef4444;
  --accent-warning: #eab308;
  --accent-info: #3b82f6;
}
```

Override any of these variables to customize the theme.

## Features

- **Shimmer Sweep Effect**: A gradient pseudo-element sweeps across each toast
- **Auto-Dismiss Progress Bar**: CSS animation counts down and fades the toast
- **Pure CSS Dismiss**: Checkbox hack toggles slide-out animation on dismiss
- **Four Toast Types**: Success, error, warning, info with unique colors
- **Slide-In Animation**: Toasts slide in from the right with easing
- **Hover Dismiss**: Dismiss button appears on hover for quick removal
- **Responsive Design**: Toasts stack and resize on mobile viewports
- **Accessibility**: `role="alert"`, `aria-live="polite"`, full `prefers-reduced-motion` support
- **Semantic HTML**: Uses proper ARIA labels and roles
- **No JavaScript Required**: All interactivity powered by CSS

## Tech Stack

- HTML5
- CSS3 (Transitions, Keyframes, CSS Custom Properties, Checkbox Hack)
- No JavaScript required
