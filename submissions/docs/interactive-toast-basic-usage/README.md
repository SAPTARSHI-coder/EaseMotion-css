# Interactive Toast - Basic Usage

This guide demonstrates the basic usage of the Interactive Toast component.

## Features

- Simple toast notification
- Success, error, warning, and info states
- Close button
- Responsive design
- Keyboard accessible
- CSS custom properties
- No external dependencies

## Basic Markup

```html
<div
  class="toast toast--success"
  role="status"
  aria-live="polite"
  aria-atomic="true"
>
  <span class="toast__icon" aria-hidden="true">✓</span>

  <div class="toast__content">
    <strong class="toast__title">Success</strong>
    <p class="toast__message">
      Your changes were saved successfully.
    </p>
  </div>

  <button
    class="toast__close"
    type="button"
    aria-label="Close notification"
  >
    &times;
  </button>
</div>