# Toast Notification

A notification component with slide-in/out animations for displaying temporary messages (success, error, warning, info) to users.

## What does this do?

This creates toast notification components with slide-in/out animations using CSS `@keyframes`, different type variants (success, error, warning, info), multiple size options, and position variants for flexible placement.

## How is it used?

```html
<div class="toast-notification toast-success">
  <span class="toast-icon">✓</span>
  <div class="toast-content">
    <h4 class="toast-title">Success</h4>
    <p class="toast-message">Your changes have been saved.</p>
  </div>
  <button class="toast-close">✕</button>
</div>

<!-- Type variants -->
<div class="toast-notification toast-error">...</div>
<div class="toast-notification toast-warning">...</div>
<div class="toast-notification toast-info">...</div>

<!-- Size variants -->
<div class="toast-notification toast-sm">...</div>
<div class="toast-notification toast-md">...</div>
<div class="toast-notification toast-lg">...</div>

<!-- Position variants -->
<div class="toast-container toast-top-right">...</div>
<div class="toast-container toast-top-left">...</div>
<div class="toast-container toast-bottom-right">...</div>
<div class="toast-container toast-bottom-left">...</div>
```

The slide-in/out animation uses CSS `@keyframes`:

```css
@keyframes toast-slide-in {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes toast-slide-out {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
}
```

## Why is it useful?

Toast notifications are essential for providing feedback without interrupting the user's workflow. The slide-in/out animations provide smooth visual feedback, while different type variants (success, error, warning, info) clearly communicate the nature of the message. Multiple position variants allow flexible placement in different UI contexts. The CSS-first approach for animations keeps the implementation lightweight, with minimal JavaScript only for triggering and dismissing toasts. This component demonstrates practical notification patterns used in modern web applications for user feedback and status updates.
