# Animated Modal Component (`ease-modal-xyz`)

A zero-dependency, CSS-only animated modal/dialog component designed for the **EaseMotion CSS** framework. Perfect for overlays, confirmations, forms, and content display with smooth scale/fade animations.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using checkbox hack for toggle functionality.
- **Animation-First**: Smooth scale/fade animations, backdrop blur, icon bounce, and slide-in transitions using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-normal`, `--ease-out`, and color tokens for seamless theming.
- **Multiple Types**: Basic modal, confirmation, image viewer, form modal, success message, and slide-in modal.
- **Backdrop Blur**: Frosted glass effect behind the modal for better focus.
- **Size Variants**: Default and small modal sizes.
- **Icon Support**: Animated icon containers with color-coded backgrounds.
- **Form Integration**: Built-in form styling with focus states.
- **Image Display**: Full-width image modal with caption support.
- **Slide-in Variant**: Bottom slide-in animation for mobile-friendly bottom sheets.
- **Accessible**: Proper label associations and keyboard navigation support.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Toggle Button
```html
<input type="checkbox" id="modal-1" class="ease-modal-xyz-toggle">
<label for="modal-1" class="ease-btn-xyz ease-btn-xyz-primary">
  Open Modal
</label>
<div class="ease-modal-xyz">
  <label for="modal-1" class="ease-modal-xyz-backdrop"></label>
  <div class="ease-modal-xyz-content">
    <div class="ease-modal-xyz-header">
      <h3 class="ease-modal-xyz-title">Modal Title</h3>
      <label for="modal-1" class="ease-modal-xyz-close">×</label>
    </div>
    <div class="ease-modal-xyz-body">
      <p>Modal content goes here.</p>
    </div>
    <div class="ease-modal-xyz-footer">
      <label for="modal-1" class="ease-btn-xyz ease-btn-xyz-secondary">Cancel</label>
      <button class="ease-btn-xyz ease-btn-xyz-primary">Confirm</button>
    </div>
  </div>
</div>

<div class="ease-modal-xyz"> <label for="modal-confirm" class="ease-modal-xyz-backdrop"></label> <div class="ease-modal-xyz-content ease-modal-xyz-sm"> <div class="ease-modal-xyz-icon-container ease-modal-xyz-icon-error"> <span class="ease-modal-xyz-icon">⚠️</span> </div> <div class="ease-modal-xyz-body" style="text-align: center;"> <h3 class="ease-modal-xyz-title">Are you sure?</h3> <p>This action cannot be undone.</p> </div> <div class="ease-modal-xyz-footer"> <label for="modal-confirm" class="ease-btn-xyz ease-btn-xyz-secondary">Cancel</label> <button class="ease-btn-xyz ease-btn-xyz-error">Delete</button> </div> </div> </div>

<div class="ease-modal-xyz">
  <label for="modal-image" class="ease-modal-xyz-backdrop"></label>
  <div class="ease-modal-xyz-content ease-modal-xyz-image">
    <label for="modal-image" class="ease-modal-xyz-close">×</label>
    <img src="image.jpg" alt="Description">
    <div class="ease-modal-xyz-caption">
      <h4>Image Title</h4>
      <p>Image description</p>
    </div>
  </div>
</div>

<div class="ease-modal-xyz">
  <label for="modal-form" class="ease-modal-xyz-backdrop"></label>
  <div class="ease-modal-xyz-content">
    <div class="ease-modal-xyz-header">
      <h3 class="ease-modal-xyz-title">Form Title</h3>
      <label for="modal-form" class="ease-modal-xyz-close">×</label>
    </div>
    <div class="ease-modal-xyz-body">
      <form class="ease-modal-xyz-form">
        <div class="ease-modal-xyz-form-field">
          <label class="ease-modal-xyz-label">Field Name</label>
          <input type="text" class="ease-modal-xyz-input" placeholder="Enter value">
        </div>
      </form>
    </div>
    <div class="ease-modal-xyz-footer">
      <label for="modal-form" class="ease-btn-xyz ease-btn-xyz-secondary">Cancel</label>
      <button class="ease-btn-xyz ease-btn-xyz-primary">Submit</button>
    </div>
  </div>
</div>