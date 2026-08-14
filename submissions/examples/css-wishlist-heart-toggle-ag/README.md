# CSS Wishlist Heart Toggle

A highly satisfying, interactive wishlist heart toggle built entirely with CSS. It features a "pop" animation and an exploding particle ring when activated.

## Features
- **Pure CSS / HTML**: Built entirely without JavaScript. State management is handled through the classic hidden `<input type="checkbox">` and `<label>` sibling selector pattern.
- **Complex Animation Orchestration**: When checked, the heart rapidly scales down and springs back up (`cubic-bezier` pop effect). Simultaneously, CSS pseudo-elements `::before` and `::after` expand to create an expanding ring and a splash of radial-gradient particles.
- **Micro-Interactions**: Features subtle background hover states and stroke color transitions before interaction.
- **Accessible & Responsive**: Fully supports keyboard navigation. Focus states are clearly indicated via a visible outline when navigating with the `Tab` key. It respects user preferences by gracefully disabling the pop animations and jumping straight to the filled state via `@media (prefers-reduced-motion: reduce)`.

## Usage

Drop the HTML structure into your product card or layout. Ensure the `<input>` and `<label>` are adjacent siblings in the DOM.

```html
<input type="checkbox" id="wishlist-1" class="heart-checkbox" aria-label="Add to wishlist" />
<label for="wishlist-1" class="heart-label">
  <svg class="heart-icon" viewBox="0 0 24 24">...</svg>
</label>
```

## CSS Custom Properties
Easily customize the color and timing using the root variables in `style.css`:
- `--heart-color`: The active fill color and particle color (default: `#ef4444`)
- `--heart-outline`: The inactive stroke color (default: `#94a3b8`)
- `--animation-duration`: The speed of the pop and particle animations (default: `0.4s`)

## Browser Support
Works in all modern browsers (Chrome, Firefox, Safari, Edge).
