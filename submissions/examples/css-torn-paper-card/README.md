# CSS Torn Paper Card

A responsive CSS-only card component with a torn-paper edge effect created using `clip-path`.

## Features

- Pure CSS implementation
- Torn paper edge using `clip-path: polygon()`
- Responsive layout
- Light and dark mode support
- CSS custom properties for easy theming
- No JavaScript required
- Works by opening `demo.html` directly in a browser
- Includes accessible semantic markup

## Files

- `demo.html` — Standalone demonstration of the component
- `style.css` — CSS styles and torn-paper effect
- `README.md` — Documentation and usage instructions

## Usage

Add the `torn-paper-card` class to a card element:

```html
<article class="torn-paper-card">
  <div class="torn-paper-card__content">
    <span class="torn-paper-card__tag">Featured</span>
    <h2 class="torn-paper-card__title">Creative Design</h2>
    <p class="torn-paper-card__text">
      A CSS-only card with a paper-inspired torn edge effect.
    </p>
  </div>
</article>