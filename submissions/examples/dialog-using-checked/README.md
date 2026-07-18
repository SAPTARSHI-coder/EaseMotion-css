# CSS-Only Modal Using `:checked`

## What does this do?

Demonstrates a fully functional modal/dialog component built entirely with CSS using the `:checked` pseudo-class and a hidden checkbox.

When the checkbox is checked, the modal overlay becomes visible and the modal content smoothly animates into view. Clicking the backdrop or close button unchecks the checkbox, hiding the modal again.

This creates an interactive modal experience without requiring any JavaScript.

---

## How is it used?

Create a hidden checkbox that controls the modal state, then use labels connected to that checkbox as the open and close triggers.

```html
<label for="modal-toggle" class="open-btn">Open Modal</label>

<input type="checkbox" id="modal-toggle" class="modal-checkbox" />

<div class="modal-overlay">
  <label for="modal-toggle" class="overlay-backdrop"></label>

  <div class="modal-content">
    <h3>Hello from the Modal!</h3>
    <p>
      This modal is powered entirely by CSS using the
      <code>:checked</code> pseudo-class.
    </p>

    <label for="modal-toggle" class="close-btn">&times;</label>
  </div>
</div>
```

The modal behavior is controlled using the `:checked` selector:

```css
.modal-checkbox {
  display: none;
}

.modal-overlay {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.modal-content {
  transform: translateY(-20px);
  transition: transform 0.3s ease;
}

.modal-checkbox:checked ~ .modal-overlay {
  opacity: 1;
  pointer-events: auto;
}

.modal-checkbox:checked ~ .modal-overlay .modal-content {
  transform: translateY(0);
}
```

---

## Why is it useful?

Modal dialogs are one of the most commonly used UI components, but they are often implemented with JavaScript even for simple use cases.

Using the `:checked` pseudo-class provides a lightweight alternative that:

- Requires no JavaScript
- Works with plain HTML and CSS
- Supports smooth open and close animations
- Keeps implementation simple and easy to understand
- Reduces dependencies and bundle size

This example demonstrates how CSS state management can be used to create interactive components while remaining human-readable and easy to customize.

It also serves as a practical reference for developers who want lightweight modal functionality that aligns with EaseMotion CSS's animation-first and composable design philosophy.
