# Fix ease-toast Multiple Stacking

## What does this do?
Introduces `.ease-toast-container` — a `position: fixed` flex-column wrapper
— so multiple toasts stack automatically with a gap instead of overlapping.

## How is it used?
```html
<div class="ease-toast-container" aria-live="polite">
  <!-- Toasts appended dynamically -->
  <div class="ease-toast ease-toast--success">…</div>
</div>
```

## Why is it useful?
Without a stacking container, all toasts share the same screen position
and overlap, making only the last one visible. Fixes: #35826
