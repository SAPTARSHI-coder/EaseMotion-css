# CSS Swipe-to-Delete Card

A responsive, CSS-only swipe-to-delete card component that reveals a delete action when the card is moved horizontally.

## Features

- Pure CSS implementation
- No JavaScript or external dependencies
- Swipe/reveal interaction using CSS
- Responsive layout
- CSS custom properties for easy theming
- Supports light and dark modes
- Keyboard-accessible delete action
- Reduced-motion support
- Self-contained demo

## Usage

Add the card structure to your HTML:

```html
<article class="swipe-card">
  <div class="swipe-card__action">
    <button type="button" aria-label="Delete item">
      Delete
    </button>
  </div>

  <div class="swipe-card__content">
    <div class="swipe-card__icon" aria-hidden="true">✓</div>

    <div class="swipe-card__details">
      <h2>Project Update</h2>
      <p>Your project has been updated successfully.</p>
    </div>
  </div>
</article>