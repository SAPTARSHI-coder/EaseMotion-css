# Responsive Avatar with Neumorphism Styling

A responsive avatar component built with pure HTML and Vanilla CSS,
featuring soft Neumorphic surfaces, layered shadows, subtle depth,
and a responsive profile layout.

## Features

- Responsive avatar component
- Neumorphic visual styling
- Soft raised and inset shadows
- CSS-generated avatar illustration
- Subtle 3D perspective
- Hover lift interaction
- Responsive desktop and mobile layouts
- Profile status and statistics
- Supporting component details
- Keyboard-accessible controls
- Visible focus states
- `prefers-reduced-motion` support
- No JavaScript
- No external images
- No external dependencies

## Files

- `demo.html`
- `style.css`

## Usage

Open `demo.html` directly in a browser.

The avatar can be placed inside a profile card:

```html
<div class="avatar-stage">
  <div class="avatar">
    <div class="avatar__back"></div>

    <div class="avatar__head">
      <div class="avatar__hair"></div>

      <div class="avatar__face">
        <span class="avatar__brow avatar__brow--left"></span>
        <span class="avatar__brow avatar__brow--right"></span>

        <span class="avatar__eye avatar__eye--left"></span>
        <span class="avatar__eye avatar__eye--right"></span>

        <span class="avatar__nose"></span>
        <span class="avatar__mouth"></span>
      </div>
    </div>

    <div class="avatar__neck"></div>

    <div class="avatar__body">
      <span class="avatar__collar"></span>
      <span class="avatar__body-highlight"></span>
    </div>
  </div>
</div>