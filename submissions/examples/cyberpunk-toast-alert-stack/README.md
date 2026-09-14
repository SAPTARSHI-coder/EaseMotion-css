# Cyberpunk Toast Alert Stack

A responsive and accessible documentation example for a Cyberpunk Toast Alert Stack.

The component provides compact system notifications with cyberpunk-inspired styling,
responsive breakpoints, modifier classes, and customizable CSS properties.

## Files

- `demo.html` - HTML demonstration of the toast stack.
- `style.css` - Component styling, responsive breakpoints, and accessibility styles.

## Basic HTML

```html
<section class="toast-stack" aria-label="Notifications">

  <article class="toast toast--success" role="status">
    <div class="toast__icon" aria-hidden="true">✓</div>

    <div class="toast__content">
      <strong class="toast__title">SYSTEM ONLINE</strong>
      <p class="toast__message">
        Network connection established successfully.
      </p>
    </div>

    <button
      class="toast__close"
      type="button"
      aria-label="Dismiss system online notification">
      ×
    </button>
  </article>

</section>
