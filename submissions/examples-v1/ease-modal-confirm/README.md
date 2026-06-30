# Confirm Modal (`ease-modal-confirm`)

A highly polished confirmation dialog pattern featuring a scale-in entry animation, frosted backdrop, and a pulsing primary action button designed to draw user focus.

## 🚀 Features

- **Fluid Entry Animation**: The modal leverages a `cubic-bezier` timing curve on its `transform: scale()` property to bounce smoothly into view while the backdrop fades in simultaneously.
- **Attention-Drawing Pulse**: The primary confirm/delete button utilizes an infinite `@keyframes` animation that scales a `box-shadow` to create a subtle "breathing" or pulsing effect, inherently guiding the user's eye to the primary action.
- **De-emphasized Secondary Action**: The cancel button is intentionally stripped of borders and backgrounds to establish a clear visual hierarchy.
- **A11y Compliant**: Includes `role="dialog"` and `aria-modal="true"`.

## 🛠️ Usage

To use this component, place the `.ease-modal-backdrop` anywhere in your HTML document (it is `position: fixed`). Use JavaScript to toggle the `.open` class on the backdrop element.

```html
<div class="ease-modal-backdrop" id="my-modal">
  <div class="ease-modal-confirm">
    <div class="ease-modal-header">
      <!-- Icon & Title -->
    </div>

    <div class="ease-modal-body">
      <!-- Description text -->
    </div>

    <div class="ease-modal-actions">
      <button class="ease-btn-cancel">Cancel</button>
      <button class="ease-btn-confirm">Delete</button>
    </div>
  </div>
</div>
```
