# Accessible Toast Alerts (Live Regions & ARIA Labels)

This submission demonstrates how to implement a fully accessible Toast Notification system that complies with WCAG 2.1 AA standards. Toast alerts (or "snackbars") are notoriously inaccessible if screen readers are not instructed to monitor them, or if their dismissal buttons lack accessible names.

## Core Accessibility Features

### 1. ARIA Live Regions

When a toast appears on the screen, sighted users notice the animation. Screen reader users, however, will completely miss the notification unless the toast container is marked as a "live region".

```html
<!-- The container must exist in the HTML on initial page load -->
<div id="toast-container" role="status" aria-live="polite" aria-atomic="true">
    <!-- Toasts injected here will be announced automatically -->
</div>
```

- `role="status"` / `aria-live="polite"`: Instructs the screen reader to announce the injected content at the next available pause (without interrupting what the user is currently reading). Use `role="alert"` / `aria-live="assertive"` ONLY for highly critical errors (e.g., "Your session has expired").
- `aria-atomic="true"`: Ensures the screen reader reads the entire notification, rather than just the specific word that changed.

### 2. The Close Button `aria-label` (The Most Common Failure)

Most toast designs use a small "X" icon for the close button. Because SVGs have no inherent semantic text, a screen reader will simply announce "Button". This is a critical WCAG failure.

You **must** explicitly label icon-only buttons using `aria-label`.

```javascript
// Inside your JavaScript toast creation logic:
const closeBtn = document.createElement('button');
closeBtn.className = 'toast-close';

// CRITICAL: Provide an accessible name
closeBtn.setAttribute('aria-label', 'Close notification'); 

// Hide the decorative SVG
closeBtn.innerHTML = `<svg aria-hidden="true">...</svg>`;
```

### 3. Focus Visibility

If a keyboard user decides they want to manually close the toast, they must be able to hit `Tab` to reach the close button, and they must clearly see that they have focused it.

```css
.toast-close:focus-visible {
    outline: 2px solid var(--focus-ring);
    outline-offset: 2px;
}
```

### 4. High Contrast (Forced Colors) Support

In Windows High Contrast Mode, standard `box-shadows` are stripped away. To prevent the toast from visually blending into the background page content, we must use the `forced-colors` media query to apply a solid border using system colors.

```css
@media (forced-colors: active) {
    .toast {
        border: 2px solid CanvasText;
    }
}
```
