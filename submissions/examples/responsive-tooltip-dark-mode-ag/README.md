# Responsive Tooltip with Dark Mode

A sleek, accessible, pure CSS tooltip component that automatically adapts to the user's system color scheme preferences.

## Features
- **Pure CSS / HTML**: Built entirely without JavaScript. Leverages CSS pseudo-classes (`:hover`, `:focus-within`) for state management.
- **Native Dark Mode**: Fully supports `@media (prefers-color-scheme: dark)`. The tooltip elegantly inverts its colors depending on the active system theme to ensure high contrast and readability.
- **Hardware-Accelerated Transitions**: Uses `opacity` and `transform: translateY` for a buttery-smooth, hardware-accelerated slide-and-fade reveal animation.
- **CSS Drawn Arrows**: The tooltip's directional arrow is drawn entirely using CSS border hacks on the `::before` and `::after` pseudo-elements, allowing it to seamlessly match the border and background colors of the active theme without using SVG assets.
- **Accessible & Responsive**: Built with semantic `aria-describedby` and `role="tooltip"` attributes. Explicitly respects user preferences by gracefully disabling the slide transitions via `@media (prefers-reduced-motion: reduce)`. The tooltip uses `width: max-content` and `max-width` to elegantly wrap long text on small mobile screens.

## Usage

Drop the HTML structure directly into your application layout.

```html
<div class="tooltip-container">
  <button class="tooltip-trigger" aria-describedby="my-tooltip">
    Hover me
  </button>
  <div id="my-tooltip" class="tooltip-content" role="tooltip">
    Tooltip content goes here
  </div>
</div>
```

## CSS Custom Properties
Easily customize the theme colors using the root variables in `style.css`:
- `--bg-color`: The outer page background color.
- `--tooltip-bg`: The background color of the tooltip bubble.
- `--tooltip-text`: The text color inside the tooltip bubble.
- `--button-bg` & `--button-hover`: The trigger button styles.

## Browser Support
Works flawlessly in all modern browsers (Chrome, Firefox, Safari, Edge).
