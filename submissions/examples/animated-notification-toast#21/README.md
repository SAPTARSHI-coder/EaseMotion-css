# Animated Notification Toast

A modern animated notification toast component built with pure HTML and CSS. It includes success, error, warning, and info toast variants with icons, close buttons, and animated progress bars.

## Features

- Pure HTML and CSS implementation.
- Four toast variants: success, error, warning, info.
- Smooth entrance and dismiss animations.
- Animated progress bar.
- Pure CSS close behavior using checkbox hack.
- Responsive layout.
- Supports `prefers-reduced-motion`.

## Usage

Copy the HTML structure from `demo.html` and link `style.css`.

```html
<div class="toast-item">
  <input type="checkbox" id="toast-close-1" class="toast-close-state" />

  <article class="toast success">
    <div class="toast-icon">✓</div>

    <div class="toast-content">
      <h3>Success</h3>
      <p>Your changes have been saved successfully.</p>
    </div>

    <label for="toast-close-1" class="toast-close">×</label>

    <span class="toast-progress"></span>
  </article>
</div>