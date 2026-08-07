# CSS Scale-Hover Modal for SaaS Showcase

A purely CSS-driven interactive modal component tailored for SaaS dashboard showcases and data previews.

## Features

- **Pure CSS/HTML**: Relies entirely on the `:target` pseudo-class for modal state management. Zero JavaScript required.
- **Scale & Hover Animations**: Smooth CSS `transform` animations for both the showcase cards (scale up on hover) and the modals (spring-like scale effect on open).
- **Responsive**: Adapts gracefully to all viewport sizes using CSS Grid.
- **Accessible**: Includes `prefers-reduced-motion` media queries to disable animations for users who prefer it.
- **Modern Design**: Utilizes CSS variables for easy theming, backdrop-filters for a polished look, and clean shadows.

## Usage

1. Open `demo.html` in your web browser.
2. Hover over the analytics cards to see the scale effect.
3. Click "View Details" to open the respective modal, utilizing the CSS `:target` hack for opening.
4. Click the close ('x') icon to dismiss the modal.

## Customization

You can easily adjust the theme by modifying the CSS custom properties in `style.css`:

```css
:root {
  --primary-color: #5c6bc0;
  --primary-hover: #3f51b5;
  --bg-color: #f4f7f6;
  --card-bg: #fff;
  /* ... */
}
```

## Structure

- `demo.html`: The showcase layout and modal markup.
- `style.css`: The styling and animation definitions.
