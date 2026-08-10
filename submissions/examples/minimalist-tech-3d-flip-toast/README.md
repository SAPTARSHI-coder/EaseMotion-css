# CSS 3D-Flip Toast

A lightweight toast notification component featuring a smooth 3D flip entrance animation for minimalist tech interfaces.

## Features

- Pure HTML and CSS
- No JavaScript or external dependencies
- 3D rotate and scale entrance animation
- Success, information, and warning variants
- Responsive layout
- Keyboard-friendly controls
- Customizable CSS custom properties
- `prefers-reduced-motion` support

## Usage

Add the `flip-toast` class to the notification container and use a modifier for the desired variant.

```html
<article class="flip-toast flip-toast--success" role="status">
  <div class="flip-toast__inner">
    <div class="flip-toast__icon" aria-hidden="true">✓</div>

    <div class="flip-toast__content">
      <strong>Deployment complete</strong>
      <span>Your latest build is now live.</span>
    </div>

    <button
      class="flip-toast__close"
      type="button"
      aria-label="Close notification"
    >
      ×
    </button>
  </div>
</article>