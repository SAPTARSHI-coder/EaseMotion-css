# Animated Notification Toast Component

A pure CSS/HTML animated notification toast with **success**, **warning**, and **error** variants. No JavaScript required.

## Features

- 🎨 Three status variants: success, warning, error
- ✨ Smooth slide-in entrance and fade-out exit animation
- ⏳ Animated progress bar showing time remaining before auto-dismiss
- 📋 Click-to-copy — clicking a toast copies its message to the clipboard, with a "Copied!" badge confirmation
- 📱 Responsive and reusable — just duplicate a `.toast` block with the variant class you need
- ♿ Respects `prefers-reduced-motion` for accessibility
- 🧩 HTML + CSS drive all visuals and animation; a small optional JS snippet powers click-to-copy and manual dismiss

## Usage

Include `style.css` and add a toast block inside a container:

```html
<div class="toast toast--success">
  <div class="toast-icon">✓</div>
  <div class="toast-content">
    <p class="toast-title">Success</p>
    <p class="toast-message">Your changes have been saved successfully.</p>
  </div>
  <div class="toast-close">✕</div>
  <div class="toast-progress"></div>
</div>