# Morphing Floating Action Button (FAB) Overlay

A small FAB in the corner of the screen that, when clicked, organically morphs to cover the entire screen to reveal a navigation menu—all without JavaScript.

## Features
- Pure CSS state management using the "Checkbox Hack"
- Organic `scale` transition using `cubic-bezier`
- Staggered entrance animation for menu items
- Icon transformation (plus to close)

## Usage
```html
<div class="fab-wrapper">
  <input type="checkbox" id="fab-toggle" hidden>
  <label for="fab-toggle" class="fab">
    <span class="icon">+</span>
  </label>
  <div class="menu-overlay"></div>
  <div class="menu-content">
    <!-- Menu Items -->
  </div>
</div>
```

Ensure that the `for` attribute in the `<label>` matches the `id` of the `<input type="checkbox">` so the toggle works correctly.

## Browser Support
- Chrome, Firefox, Safari, Edge (Modern versions)

## Tech Stack
- HTML + CSS only, no JavaScript required
