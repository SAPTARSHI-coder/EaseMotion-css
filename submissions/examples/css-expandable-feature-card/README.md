# CSS Expandable Feature Card

A responsive CSS-only feature card that smoothly expands on hover and focus to reveal additional content.

## Features

- Pure CSS implementation
- Expands smoothly on hover and keyboard focus
- Reveals additional feature information
- Responsive across screen sizes
- Supports light and dark modes
- Uses CSS custom properties for easy theming
- Accessible keyboard interaction
- Respects `prefers-reduced-motion`
- No JavaScript or external dependencies

## Usage

Add the HTML structure to your page and include `style.css`.

```html
<article class="expandable-card">
  <div class="expandable-card__icon" aria-hidden="true">✦</div>

  <div class="expandable-card__content">
    <h2 class="expandable-card__title">Creative Design</h2>
    <p class="expandable-card__summary">
      Explore a modern feature card with a smooth CSS expansion effect.
    </p>

    <div class="expandable-card__details">
      <p>
        The card expands when hovered or focused, revealing additional
        information without requiring JavaScript.
      </p>
      <a href="#" class="expandable-card__link">Learn more</a>
    </div>
  </div>
</article>