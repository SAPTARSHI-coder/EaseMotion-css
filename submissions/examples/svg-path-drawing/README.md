# SVG Path Self-Drawing Animation

An illustration or logo that animates by drawing its own outline smoothly, before fading in its fill color.

## Features
- Pure CSS `stroke-dasharray` and `stroke-dashoffset` animation
- Smooth sequential animation using `animation-delay`
- Scalable vector graphics for crisp edges on any display

## Usage
```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path class="draw-path" d="..." />
</svg>
```

```css
.draw-path {
  stroke-dasharray: 500; /* Must be larger than the path's total length */
  stroke-dashoffset: 500;
  animation: draw 2s ease-in-out forwards, fill-in 1s ease-in-out 2s forwards;
}
```

## Browser Support
- Chrome, Firefox, Safari, Edge (Modern versions)

## Tech Stack
- HTML + CSS (Inline SVG required)
