# EaseMotion Modal Component

A modern, highly customizable responsive Modal and Dialog Component for EaseMotion CSS. This component provides a robust overlay system for alerts, confirmations, forms, and interactive dialogs without requiring the user to navigate away from the current page.

## Overview

The Modal Component is designed with accessibility and smooth animations in mind. It separates the backdrop overlay from the modal container, allowing complex entry and exit animations (like scaling and sliding) while the backdrop smoothly fades in and out.

## Features

- **Smooth Animations**: Hardware-accelerated CSS transitions for scaling, sliding, and fading.
- **Multiple Entry Points**: Center scale, bottom slide-up, side slide-in, and fullscreen modes.
- **Interaction Behaviors**: Closes when clicking on the backdrop overlay, or by pressing the `Escape` key.
- **Scroll Lock**: Automatically prevents the background page from scrolling while the modal is open.
- **Glassmorphism**: Optional `.ease-modal-glass` class for a blurred backdrop effect.
- **Accessible Structure**: Implements `role="dialog"` and `aria-modal="true"`.

## Variants & Positioning

The component uses utility classes on the overlay container to dictate how the modal behaves and animates:

1. **Center Modal** (`ease-modal-center`): Scales and fades into the center of the screen.
2. **Bottom Sheet** (`ease-modal-bottom`): Slides up from the bottom, perfect for mobile sharing menus or actions.
3. **Side Drawer** (`ease-modal-right`): Slides in from the right side, ideal for settings or filters.
4. **Fullscreen Modal** (`ease-modal-fullscreen`): Takes up the entire viewport, used for galleries or complex workflows.

## Usage Example

### HTML Structure

```html
<!-- The Overlay Wrapper -->
<div class="ease-modal-overlay ease-modal-center" id="my-modal" onclick="closeModal(event, 'my-modal')">
  
  <!-- The Modal Box -->
  <div class="ease-modal" role="dialog" aria-modal="true">
    
    <div class="ease-modal-header">
      <h3 class="ease-modal-title">Modal Title</h3>
      <button class="ease-modal-close" onclick="forceClose('my-modal')">✕</button>
    </div>
    
    <div class="ease-modal-body">
      <p>Modal content goes here...</p>
    </div>
    
    <div class="ease-modal-footer">
      <button class="ease-btn ease-btn-secondary" onclick="forceClose('my-modal')">Cancel</button>
      <button class="ease-btn ease-btn-primary">Save</button>
    </div>
    
  </div>
</div>
```

### JavaScript Implementation

A tiny bit of JS is required to trigger the CSS classes and handle the body overflow. Refer to `demo.html` for the full implementation of `openModal()`, `closeModal()`, and `forceClose()`.

## Customization

You can easily adjust colors, widths, and animation speeds by overriding the variables in your CSS `:root`:

```css
:root {
  --ease-modal-bg: #ffffff;
  --ease-modal-text: #111827;
  --ease-modal-radius: 12px;
  --ease-modal-width: 500px;
  --ease-modal-transition: 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  /* Add overrides here */
}
```
