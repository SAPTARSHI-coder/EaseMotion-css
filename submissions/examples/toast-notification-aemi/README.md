# Glassmorphism Animated Toast Notification Component

**What does this do?**
A fully animated, CSS-only toast notification system using glassmorphism (frosted glass) design, triggered entirely via CSS without any JavaScript.

**How is it used?**
Include the hidden checkbox trick to trigger the toast. Use the `.ease-toast-aemi` container with `.ease-toast-success-aemi` or `.ease-toast-error-aemi` variants for different states.

```html
<input type="checkbox" id="toast-toggle" class="toast-trigger-aemi" />
<label for="toast-toggle">Show Toast</label>

<div class="ease-toast-container-aemi">
  <div class="ease-toast-aemi ease-toast-success-aemi" id="toast-success">
    <div class="toast-content-aemi">
      <strong>Success!</strong>
      <span>Action completed.</span>
    </div>
    <label class="toast-close-aemi" for="toast-toggle">✕</label>
  </div>
</div>
```

**Why is it useful?**
It provides a premium, real-world UI pattern required in modern web apps, composed purely of CSS and HTML, ensuring high performance. It features fluid animations while respecting `prefers-reduced-motion` for accessibility.
