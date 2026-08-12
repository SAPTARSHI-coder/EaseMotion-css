# CSS Elastic Scale Button

## What it does
Creates a button that elastically scales up and then slightly bounces back when the user hovers over or focuses it via keyboard. When actively clicked, it slightly scales down.

## Why it is useful
This adds a smooth, responsive, and slightly playful interactive feel to buttons without relying on JavaScript or heavy animation libraries. The elastic spring motion draws the user's attention and provides high-quality feedback.

## Usage

```html
<button class="elastic-btn">Submit</button>
```

## CSS

The primary technique uses a custom cubic-bezier timing function (`cubic-bezier(0.34, 1.56, 0.64, 1)`) applied to the `transform` property on hover.

```css
.elastic-btn {
  /* ...other styles... */
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease;
}

.elastic-btn:hover,
.elastic-btn:focus-visible {
  transform: scale(1.1);
}

.elastic-btn:active {
  transform: scale(0.95);
  transition: transform 0.1s ease;
}
```

## Customization
The effect can be easily themed by overriding CSS custom properties globally or on specific elements:
- `--elastic-btn-bg`: Background color of the button
- `--elastic-btn-color`: Text color
- `--elastic-btn-radius`: Border radius
- `--elastic-btn-scale-hover`: The target scale on hover/focus
- `--elastic-btn-scale-active`: The target scale when actively pressed
- `--elastic-btn-shadow`: Box shadow in normal state
- `--elastic-btn-shadow-hover`: Box shadow on hover

## Accessibility
- Uses native semantic `<button>` elements for built-in keyboard accessibility.
- Implements `:focus-visible` to ensure a clear focus indicator is shown for keyboard users.
- Honors `prefers-reduced-motion: reduce` by disabling the `transform` animation for users sensitive to motion.

## Browser support
Works across all modern browsers. `prefers-reduced-motion` and `focus-visible` are widely supported. `will-change: transform` is used sparingly to prevent repaints during the animation.
