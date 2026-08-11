# Floating stacked toast notifications

## What does this do?

This submission provides a CSS-only stacked toast notification demo that expands from a compact deck into readable individual notifications on hover or keyboard focus.

## How is it used?

Place the toast cards inside a `toast-stack-ag` container and use `toast-card-ag` for each notification:

```html
<section class="toast-stack-ag" aria-label="Notifications" aria-live="polite">
  <article class="toast-card-ag toast-card-success-ag">
    <span class="toast-icon-ag" aria-hidden="true">✓</span>
    <div class="toast-copy-ag">
      <h2>Changes saved</h2>
      <p>Your profile settings have been updated.</p>
    </div>
    <button class="toast-dismiss-ag" type="button" aria-label="Dismiss notification">×</button>
  </article>
</section>
```

## Why is it useful?

The stacked layout keeps multiple notifications unobtrusive while still making them easy to inspect. It uses semantic notification cards, labelled dismiss buttons, keyboard-triggered expansion through `:focus-within`, and a reduced-motion fallback for a polished, accessible interface.
