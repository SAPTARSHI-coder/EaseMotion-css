# CSS 3D-Flip Badge

A pure CSS, JavaScript-free 3D flip badge designed for minimalist tech layouts. It elegantly reveals secondary information when hovered or focused.

## Features

- **Pure HTML/CSS**: No JavaScript or external dependencies.
- **3D Transforms**: Uses `perspective`, `transform-style: preserve-3d`, and `backface-visibility` to create a realistic 3D flipping card.
- **Accessibility**: Includes `.badge-container[tabindex="0"]` for keyboard focus, `:focus-visible` styling, and appropriate `aria-label` tags for screen readers.
- **Responsive**: Adapts neatly on mobile and desktop viewports.
- **Reduced Motion**: Disables the animation duration when `prefers-reduced-motion` is enabled, falling back to instant state changes.

## How It Works

The component uses a wrapper with `perspective` to give the 3D space depth. Inside, the `.badge-flipper` element handles the actual rotation using `transform: rotateY(180deg)` on hover or focus. The two faces (front and back) are absolutely positioned on top of each other, but the back face is pre-rotated 180 degrees. The `backface-visibility: hidden` property ensures that only the side currently facing the user is rendered.

## Usage

Include the HTML structure and link the `style.css` file.

```html
<div class="badge-container" tabindex="0" aria-label="Your Accessible Label">
  <div class="badge-flipper">
    <!-- Front Face -->
    <div class="badge-face badge-front">
      <span class="icon">✨</span>
      <span class="title">Front Title</span>
    </div>
    <!-- Back Face -->
    <div class="badge-face badge-back">
      <span class="subtitle">Back Title</span>
      <span class="detail">Additional Details</span>
    </div>
  </div>
</div>
```

## Why it fits EaseMotion CSS

This component aligns completely with the EaseMotion CSS philosophy by focusing on animation-first, performant UI elements driven purely by CSS. It delivers a modern, high-quality interaction without the overhead of JavaScript, relying solely on CSS key features like 3D transforms.
