# CSS Infinity Symbol Loader

A pure CSS loading animation that displays an animated infinity (∞) symbol. The component uses CSS borders, transforms, and keyframe animations to create a smooth looping loader without JavaScript.

## Features

- Pure CSS implementation
- Animated infinity symbol loader
- Responsive sizing using CSS custom properties
- Light and dark mode support
- Accessibility-friendly markup
- Supports reduced motion preferences
- Easy customization through CSS variables

## Usage

### HTML

```html
<div
  class="infinity-loader"
  role="status"
  aria-label="Loading"
>
  <span></span>
  <span></span>
</div>
```

### CSS

```css
.infinity-loader {
  width: 120px;
  height: 60px;
}
```

## Customization

```css
:root {
  --loader-color: #4f46e5;
  --loader-size: 120px;
}
```

## Accessibility

- Uses `role="status"`
- Includes descriptive `aria-label`
- Supports `prefers-reduced-motion`

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

## File Structure

```text
css-infinity-symbol-loader/
├── demo.html
├── style.css
└── README.md
```