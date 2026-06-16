# .ease-toast Toast Notification Component

Adds a toast/notification component for user feedback — form submission success, errors, info messages.

## Problem

No toast notification component exists in EaseMotion CSS. Users must build from scratch or copy from examples.

## Proposed CSS to Add to `components/toast.css`

```css
/* Base toast container */
.ease-toast {
  display: flex;
  align-items: flex-start;
  gap: var(--ease-space-3, 0.75rem);
  padding: var(--ease-space-4, 1rem) var(--ease-space-5, 1.25rem);
  background: var(--ease-color-surface, #ffffff);
  border-left: 4px solid var(--ease-color-primary, #6c63ff);
  border-radius: var(--ease-radius-md, 0.5rem);
  box-shadow: var(--ease-shadow-lg, 0 10px 25px rgba(0,0,0,0.1));
  max-width: 24rem;
  font-size: 0.9rem;
  line-height: 1.5;
}

/* Color variants */
.ease-toast-success { border-left-color: var(--ease-color-success, #22c55e); }
.ease-toast-danger  { border-left-color: var(--ease-color-danger, #ef4444); }
.ease-toast-warning { border-left-color: var(--ease-color-warning, #f59e0b); }
.ease-toast-info    { border-left-color: var(--ease-color-info, #3b82f6); }

/* Icon */
.ease-toast-icon {
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
  margin-top: 1px;
}

.ease-toast-success .ease-toast-icon { color: var(--ease-color-success, #22c55e); }
.ease-toast-danger .ease-toast-icon  { color: var(--ease-color-danger, #ef4444); }
.ease-toast-warning .ease-toast-icon { color: var(--ease-color-warning, #f59e0b); }
.ease-toast-info .ease-toast-icon    { color: var(--ease-color-info, #3b82f6); }

/* Body */
.ease-toast-body strong {
  display: block;
  margin-bottom: 2px;
}

.ease-toast-body p {
  margin: 0;
  color: #6b7280;
  font-size: 0.85rem;
}

/* Size variants */
.ease-toast-sm { padding: var(--ease-space-3, 0.75rem) var(--ease-space-4, 1rem); font-size: 0.85rem; max-width: 20rem; }
.ease-toast-lg { padding: var(--ease-space-5, 1.25rem) var(--ease-space-6, 1.5rem); font-size: 1rem; max-width: 28rem; }

/* Enter/leave animations */
.ease-toast-enter {
  animation: ease-kf-slide-in-right 300ms ease-out both;
}
.ease-toast-leave {
  animation: ease-kf-slide-out-right 300ms ease-in both;
}

/* Fixed positioning helper */
.ease-toast-fixed-bottom-right {
  position: fixed;
  bottom: var(--ease-space-6, 1.5rem);
  right: var(--ease-space-6, 1.5rem);
  z-index: 1000;
}
```

## Usage

```html
<!-- Success toast -->
<div role="alert" class="ease-toast ease-toast-success">
  <svg class="ease-toast-icon" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
  </svg>
  <div class="ease-toast-body">
    <strong>Success</strong>
    <p>Your changes have been saved.</p>
  </div>
</div>

<!-- Error toast with fixed positioning -->
<div role="alert" class="ease-toast ease-toast-danger ease-toast-fixed-bottom-right ease-toast-enter">
  <svg class="ease-toast-icon" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"/>
  </svg>
  <div class="ease-toast-body">
    <strong>Error</strong>
    <p>Something went wrong. Please try again.</p>
  </div>
</div>
```

## Accessibility
- `role="alert"` on the toast container
- `aria-live="assertive"` for screen reader announcements

## Files
- `README.md` — this file
- `demo.html` — toast demo page
- `style.css` — toast component CSS
