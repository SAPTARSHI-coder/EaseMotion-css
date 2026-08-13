# Interactive Dropdown with Material Design Styling

A responsive CSS-only dropdown component inspired by Material Design
principles, featuring elevation, layered shadows, clear hierarchy,
and smooth interaction states.

## Features

- CSS-only dropdown
- Native `<details>` and `<summary>` interaction
- Material-inspired elevation
- Layered shadows
- Responsive layout
- Hover states
- Keyboard-accessible interaction
- Visible `:focus-visible` states
- Multiple menu options
- Smooth opening animation
- Dark-mode compatible styling
- `prefers-reduced-motion` support
- Pure HTML and Vanilla CSS
- No JavaScript or external dependencies

## Files

- `demo.html`
- `style.css`

## Usage

Open `demo.html` directly in a browser.

A basic dropdown can be created with:

```html
<details class="dropdown">
  <summary class="dropdown__trigger">
    <span class="dropdown__selected">
      <span class="dropdown__avatar">
        A
      </span>

      <span>
        <strong>Analytics</strong>
        <small>Product insights</small>
      </span>
    </span>

    <span class="dropdown__chevron" aria-hidden="true">
      ⌄
    </span>
  </summary>

  <div class="dropdown__menu">
    <a class="dropdown__item" href="#">
      <span class="dropdown__item-icon">A</span>

      <span class="dropdown__item-text">
        <strong>Analytics</strong>
        <small>Product insights</small>
      </span>
    </a>
  </div>
</details>