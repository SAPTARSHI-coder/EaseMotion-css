# Responsive Pastel Modal

## What does this do?
A lightweight, responsive modal dialog with a soft pastel theme, smooth fade/scale transitions, and no external dependencies.

## How is it used?
Add the markup below and toggle the `is-open` class on the overlay to show or hide the modal:

```html
<button class="modal-trigger-aan" onclick="document.getElementById('pastelModal').classList.add('is-open')">
  Open Modal
</button>

<div class="modal-overlay-aan" id="pastelModal">
  <div class="modal-box-aan" role="dialog" aria-modal="true">
    <button class="modal-close-aan" onclick="document.getElementById('pastelModal').classList.remove('is-open')">&times;</button>
    <h2 class="modal-title-aan">Welcome!</h2>
    <p class="modal-body-aan">Your content here.</p>
  </div>
</div>
```

The modal can be closed three ways: clicking the close button, clicking the overlay background, or pressing `Esc`.

## Why is it useful?
EaseMotion CSS favors expressive, low-friction UI primitives. This modal fits that philosophy: no JS framework required, keyboard-accessible (`Esc` to close, `aria-modal` for screen readers), mobile-first responsive breakpoints, and a soft pastel aesthetic that matches EaseMotion's animation-forward design language. It also doubles as a reference `docs` submission showing the full `demo.html` / `style.css` / `README.md` pattern in one component.
