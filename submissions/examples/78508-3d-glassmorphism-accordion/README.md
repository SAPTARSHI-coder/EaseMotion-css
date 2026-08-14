# 3D Accordion with Glassmorphism Styling

A responsive accordion component featuring layered 3D depth,
translucent glassmorphism surfaces, smooth transitions, and native HTML
interaction.

## Features

- 3D-inspired accordion design
- Glassmorphism surfaces
- Backdrop blur
- Layered shadows and gradients
- Native `<details>` and `<summary>` interaction
- Multiple accordion sections
- Expand/collapse icon animation
- Additional visual tags
- Responsive layout
- Semantic HTML
- Keyboard-accessible interaction
- Visible `:focus-visible` states
- `prefers-reduced-motion` support
- Pure HTML and Vanilla CSS
- No JavaScript or external dependencies

## Files

- `demo.html`
- `style.css`

## Usage

Open `demo.html` directly in a browser.

A basic accordion can be created with:

```html
<details class="accordion">
  <summary class="accordion__summary">
    <span class="accordion__title">
      Accordion title
    </span>

    <span class="accordion__icon" aria-hidden="true">
      +
    </span>
  </summary>

  <div class="accordion__body">
    <p>
      Accordion content goes here.
    </p>
  </div>
</details>