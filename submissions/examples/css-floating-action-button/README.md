# CSS Floating Action Button

A pure CSS Floating Action Button (FAB) with a Material-inspired design, ripple interaction, and expandable quick-action menu.

## Features

- Pure CSS implementation
- No JavaScript required
- No external dependencies
- Material-inspired floating action button
- CSS ripple effect
- Expandable action menu
- Smooth transitions and micro-interactions
- CSS custom properties for easy theming
- Automatic light and dark mode support
- Responsive layout
- Keyboard-accessible toggle
- Reduced-motion support

## Files

- `demo.html` — standalone demonstration
- `style.css` — complete component styling

## Usage

Add the following structure to your HTML:

```html
<div class="fab-container">
  <input
    class="fab-toggle"
    type="checkbox"
    id="fab-toggle"
    aria-label="Toggle quick action menu"
  >

  <div class="fab-menu">
    <a href="#" class="fab-action" aria-label="Create">
      <span aria-hidden="true">＋</span>
    </a>

    <a href="#" class="fab-action" aria-label="Share">
      <span aria-hidden="true">↗</span>
    </a>
  </div>

  <label class="fab" for="fab-toggle" aria-label="Toggle quick action menu">
    <span class="fab-ripple"></span>
    <span class="fab-icon fab-icon-open">+</span>
    <span class="fab-icon fab-icon-close">×</span>
  </label>
</div>