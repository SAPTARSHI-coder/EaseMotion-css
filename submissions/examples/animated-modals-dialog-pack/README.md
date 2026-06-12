# Animated Modals & Dialogs Pack

A premium, pure-CSS Modal and Dialog component system supporting various entry transitions and responsive overlays.

## Features

- Fully interactive modal states using the CSS checkbox hack (zero Javascript needed).
- Glassmorphism backdrop-blur overlay styled under `.em-modal-overlay`.
- 4 built-in animation presets applied to `.em-modal`:
  - `.em-modal-scale-up` (springy scale transition)
  - `.em-modal-slide-up` (bottom slide-in)
  - `.em-modal-slide-down` (top slide-in)
  - `.em-modal-bounce-in` (playful bounce keyframes)

## Usage

Structure your HTML using a hidden checkbox matching the overlay trigger labels:

```html
<!-- Trigger label -->
<label for="modal-toggle" class="btn">Open Modal</label>

<!-- Hidden checkbox state -->
<input type="checkbox" id="modal-toggle" class="em-modal-state" />

<!-- Modal overlay and modal body -->
<div class="em-modal-overlay">
  <div class="em-modal em-modal-scale-up">
    <!-- Close trigger -->
    <label for="modal-toggle" class="em-modal-close-label">✕</label>
    <h3>Modal Title</h3>
    <p>Modal body content...</p>
  </div>
</div>
```
