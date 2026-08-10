# CSS Frosted Glass Modal

A modern glassmorphism-inspired modal component featuring a frosted glass blur effect, smooth entrance animation, responsive layout, and accessibility-friendly structure.

## Features

- Pure CSS implementation
- Frosted glass (glassmorphism) effect
- Backdrop blur overlay
- Smooth modal entrance animation
- Responsive design
- Keyboard-accessible button
- CSS custom properties for easy customization

## Files

- `demo.html`
- `style.css`
- `README.md`

## Usage

```html
<div class="modal-overlay">
  <div class="modal">
    <h2>Modal Title</h2>
    <p>Modal content goes here.</p>
    <button class="modal-btn">Continue</button>
  </div>
</div>
```

## Customization

```css
:root {
  --glass-bg: rgba(255,255,255,0.15);
  --glass-border: rgba(255,255,255,0.25);
}
```

## Accessibility

- Uses `role="dialog"`
- Includes `aria-modal="true"`
- Keyboard-focusable controls
- High-contrast text and focus states

## Why it fits EaseMotion CSS

This component adds a reusable modal design pattern with modern glassmorphism styling and smooth CSS-only animations while remaining lightweight and dependency-free.