# Animated Modal Component (ease-modal)

CSS-only modal that scales in from center with backdrop — no JavaScript required.

## Files

| File                        | Description      |
| --------------------------- | ---------------- |
| 📄 [demo.html](./demo.html) | Interactive demo |
| 🎨 [style.css](./style.css) | Modal styles     |
| 📖 [README.md](./README.md) | Documentation    |

## Classes

| Class                | Description           |
| -------------------- | --------------------- |
| `ease-modal`         | Modal container       |
| `ease-modal-content` | Modal content wrapper |
| `ease-modal-header`  | Modal header section  |
| `ease-modal-body`    | Modal body content    |
| `ease-modal-footer`  | Modal footer actions  |
| `ease-modal-close`   | Close button          |

## How It Works

Uses `:target` CSS selector:

- Link to `#modal-id` opens the modal
- Link to `#` or `#empty` closes it
- Backdrop fades in, modal scales up

## Usage

```html
<!-- Trigger to open modal -->
<a href="#myModal" class="modal-trigger">Open Modal</a>

<!-- Modal structure -->
<div id="myModal" class="ease-modal">
  <div class="ease-modal-content">
    <div class="ease-modal-header">
      <h2>Modal Title</h2>
      <a href="#" class="ease-modal-close">&times;</a>
    </div>
    <div class="ease-modal-body">
      <p>Modal content here</p>
    </div>
    <div class="ease-modal-footer">
      <a href="#" class="modal-btn">Close</a>
    </div>
  </div>
</div>
```
