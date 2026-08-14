# Animated Modal

A modern animated modal popup component built with pure HTML and CSS. It uses a checkbox hack to open and close the modal without JavaScript.

## Features

- Pure HTML and CSS modal.
- Smooth open/close animation.
- Blurred background overlay.
- Close on backdrop click.
- Close button and action buttons.
- Responsive layout.
- Supports `prefers-reduced-motion`.

## Usage

Copy the HTML structure from `demo.html` and link `style.css`.

```html
<input type="checkbox" id="modal-state" class="modal-state" />

<label for="modal-state" class="open-modal-btn">
  Open Modal
</label>

<div class="modal-overlay">
  <label for="modal-state" class="modal-backdrop"></label>

  <section class="modal-card">
    <label for="modal-state" class="modal-close">×</label>

    <h2>Modal Title</h2>
    <p>Modal content goes here.</p>
  </section>
</div>