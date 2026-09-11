# Interactive Toast - Advanced Styling

This guide demonstrates how to customize the Interactive Toast component using CSS variables, modifier classes, responsive styles, and accessibility-friendly interactions.

## Features

- Advanced visual customization
- CSS custom properties
- Modifier classes
- Responsive layout
- Interactive close button
- Keyboard accessibility
- Reduced-motion support
- No external dependencies

## Basic HTML

```html
<div
  class="toast toast--success"
  role="status"
  aria-live="polite"
  aria-atomic="true"
>
  <div class="toast__icon" aria-hidden="true">✓</div>

  <div class="toast__content">
    <strong class="toast__title">Success</strong>
    <p class="toast__message">
      Your changes have been saved successfully.
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