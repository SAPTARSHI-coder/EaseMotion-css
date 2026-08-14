# CSS Confirmation Dialog

A minimal, pure CSS confirmation dialog featuring a subtle shake animation on the cancel button and responsive design layout.

## Usage

```html
<!-- Trigger checkbox -->
<input type="checkbox" id="ease-dialog-toggle" class="ease-dialog-toggle" hidden>

<!-- The dialog structure -->
<div class="ease-confirm-overlay">
  <div class="ease-confirm-dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title" aria-describedby="dialog-desc">
    
    <div class="ease-confirm-icon">
      <!-- Icon SVG here -->
    </div>

    <div class="ease-confirm-content">
      <h3 id="dialog-title" class="ease-confirm-title">Deactivate account</h3>
      <p id="dialog-desc" class="ease-confirm-desc">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
    </div>

    <div class="ease-confirm-actions">
      <!-- Wrapping the label triggers the checkbox to close the dialog -->
      <label for="ease-dialog-toggle" class="ease-btn ease-btn-cancel" tabindex="0">Cancel</label>
      <button class="ease-btn ease-btn-danger">Deactivate</button>
    </div>

  </div>
</div>
```

## Why is this useful for EaseMotion CSS

This component expands the library's collection of ready-to-use CSS components, helping developers implement essential UI patterns like confirmation dialogs without relying on JavaScript. It includes a playful `ease-shake` animation to draw attention or indicate rejection on the cancel button, fully responsive layout using CSS Grid and Flexbox, and accessible attributes (`role="dialog"`, `aria-modal="true"`).
