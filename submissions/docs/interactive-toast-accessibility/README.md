# Interactive Toast - Accessibility Integration

An accessible and interactive toast notification component built with HTML and CSS.

## Features

- Accessible toast notification
- Screen-reader friendly
- Keyboard accessible close button
- Visible focus states
- Responsive design
- Customizable CSS variables
- Reduced-motion support
- No external dependencies

## Basic Usage

Add the following HTML:

```html
<section
  class="toast"
  role="status"
  aria-live="polite"
  aria-atomic="true"
>
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
</section>