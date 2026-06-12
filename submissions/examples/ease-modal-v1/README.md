# Modal Component (#251)

### What does this do?

Adds a pristine, highly-performant zero-JavaScript `ease-modal` component to the framework. It handles open states, close states, and backdrop-click-to-close entirely natively using the browser's URL hash and the CSS `:target` pseudo-class.

### How is it used?

1. Give the `.ease-modal-overlay` a unique `id`.
2. Use an `<a>` tag pointing to that ID to open the modal.
3. Use `href="#"` on the close buttons (and the backdrop) to clear the URL hash and close the modal.

```html
<!-- Trigger -->
<a href="#my-modal" class="ease-btn ease-btn-primary">Open Modal</a>

<!-- Modal Structure -->
<div id="my-modal" class="ease-modal-overlay">
  <a href="#" class="ease-modal-backdrop-close"></a>
  <div class="ease-modal-box">
    <a href="#" class="ease-modal-close">&times;</a>
    <h2>Hello World</h2>
  </div>
</div>
```

### Why is it useful?

Modals are typically one of the most JS-heavy components in UI libraries, requiring event listeners for backdrop clicks, escape keys, and close buttons. This CSS-only implementation drastically reduces bundle size and JS execution time. It also features a gorgeous hardware-accelerated slide-and-scale entrance animation that gracefully falls back to a pure opacity fade when `prefers-reduced-motion` is active.
