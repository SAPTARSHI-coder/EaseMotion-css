# Accessible Animated Modal Dialog

## 1. What does this do?

This is a premium, fully keyboard-accessible modal dialog example that demonstrates smooth, native entrance and exit animation lifecycles synced with clean focus-trapping JavaScript.

## 2. How is it used?

Apply the structural overlay and window classes to your semantic elements, and trigger lifecycle states with active helper classes:

```html
<!-- Modal Trigger Button -->
<button
  type="button"
  id="modal-trigger"
  aria-haspopup="dialog"
  aria-controls="subscribe-modal"
>
  Open Modal
</button>

<!-- Backdrop Overlay -->
<div id="subscribe-modal-overlay" class="modal-overlay">
  <!-- Dialog Window -->
  <div
    id="subscribe-modal"
    class="modal-window"
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
    aria-describedby="modal-desc"
  >
    <header class="modal-header">
      <h2 id="modal-title" class="modal-title">Title</h2>
      <button type="button" id="modal-close" aria-label="Close dialog">
        ×
      </button>
    </header>
    <div id="modal-desc" class="modal-body">
      Description and form content...
    </div>
  </div>
</div>
```

To control animations:

- Add `.is-opening` class to trigger the entrance transition (`modal-zoom-up`).
- Once complete, replace with `.is-open` to hold the state.
- Add `.is-closing` to trigger the exit transition (`modal-blur-expand-exit`) before hiding the dialog.

## 3. Why is it useful?

It fits EaseMotion CSS's animation-first and zero-dependency philosophy by showing how developers can leverage custom CSS animation curves (like elastic entrance scaling and progressive exit blurring) on complex UI components while adhering to strict WCAG accessibility guidelines.

---

## Accessibility Details

- **Focus Trap:** Tab and Shift+Tab key bindings trap keyboard focus inside the modal dialog while it is active, preventing accidental focus on background elements.
- **Focus Restoration:** Focus is automatically restored to the triggering button once the exit animation completes and the modal closes.
- **Escape to Close:** Pressing the `Escape` key immediately closes the dialog.
- **Click Outside to Close:** Clicking the overlay backdrop triggers the exit transition.
- **ARIA Standards:** Utilizes `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, and `aria-describedby` to provide screen readers with context.
- **Reduced Motion:** Gracefully falls back to instant visibility shifts (using `0.01ms` animation durations) when `prefers-reduced-motion: reduce` is detected in the operating system.
