# Floating Dropdown with Pastel Styling

A responsive floating dropdown component built with pure HTML and CSS.
It uses soft pastel colors, layered shadows, rounded surfaces, and
smooth transitions to create a lightweight floating UI.

## Features

- Fully responsive
- Pastel visual language
- Floating dropdown menu
- CSS-only interaction
- Hover and keyboard focus support
- Selected item state
- Soft shadows and depth
- Smooth open/close transition
- Touch-friendly controls
- No JavaScript
- No external dependencies
- Reduced-motion support

## Files

- `demo.html`
- `style.css`

## Usage

Open `demo.html` directly in a browser.

Basic markup:

```html
<div class="dropdown">
  <button class="dropdown__trigger" type="button">
    <span class="dropdown__trigger-content">
      <span class="dropdown__icon">✦</span>

      <span class="dropdown__text">
        <small>WORKSPACE</small>
        <strong>Creative Studio</strong>
      </span>
    </span>

    <span class="dropdown__chevron" aria-hidden="true">
      ↓
    </span>
  </button>

  <div class="dropdown__menu">
    <a class="dropdown__item dropdown__item--active" href="#">
      <span class="dropdown__item-icon dropdown__item-icon--purple">
        ✦
      </span>

      <span class="dropdown__item-copy">
        <strong>Creative Studio</strong>
        <small>Design & branding</small>
      </span>

      <span class="dropdown__check">✓</span>
    </a>
  </div>
</div>