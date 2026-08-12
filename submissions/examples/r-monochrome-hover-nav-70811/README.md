# CSS Monochrome Hover Nav

A minimalist navigation component where the selected navigation
item becomes visually prominent while neighboring items are
softly desaturated.

## Features

- Pure HTML and CSS
- Monochrome visual design
- Neighbor desaturation on hover
- Keyboard focus interaction
- Smooth hover transitions
- Animated arrow indicator
- Responsive layout
- Semantic navigation markup
- Reduced-motion support
- No JavaScript required

## Files

- `demo.html` — Navigation markup and demonstration
- `style.css` — Complete component styling

## How It Works

The navigation uses the CSS `:has()` selector together with
sibling selectors to detect when a navigation item is hovered
or focused.

```css
.mono-nav:has(.nav-item:hover) .nav-item:not(:hover) {
  opacity: 0.32;
  filter: grayscale(1);
}