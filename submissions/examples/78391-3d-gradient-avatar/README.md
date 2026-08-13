# 3D Avatar with Gradient Styling

A responsive 3D-inspired avatar component created entirely with HTML
and Vanilla CSS.

The component uses layered gradients, shadows, transforms, and depth
effects to create a polished visual avatar without external assets or
JavaScript.

## Features

- 3D-inspired avatar design
- Gradient-based body and clothing
- Layered facial elements
- Decorative orbit rings
- Gradient glow and halo
- Subtle hover elevation
- Responsive layout
- Dark interface styling
- CSS-only implementation
- No images or external dependencies
- Keyboard-friendly surrounding content
- `prefers-reduced-motion` support

## Files

- `demo.html`
- `style.css`

## Usage

Open `demo.html` directly in a browser.

The avatar can be placed inside any container:

```html
<div class="avatar-scene">
  <div class="avatar">
    <div class="avatar__head">
      <div class="avatar__hair"></div>

      <div class="avatar__face">
        <div class="avatar__brow avatar__brow--left"></div>
        <div class="avatar__brow avatar__brow--right"></div>

        <div class="avatar__eye avatar__eye--left"></div>
        <div class="avatar__eye avatar__eye--right"></div>

        <div class="avatar__nose"></div>
        <div class="avatar__mouth"></div>
      </div>
    </div>

    <div class="avatar__neck"></div>
    <div class="avatar__body"></div>
  </div>
</div>