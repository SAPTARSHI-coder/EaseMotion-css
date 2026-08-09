# Zoom-In Carousel Example

A pure CSS Zoom-In Carousel designed for modern e-commerce checkout layouts. The focused or hovered product card smoothly scales to create visual emphasis while maintaining an accessible, responsive interface.

## Features

- Pure CSS implementation
- Smooth zoom-in interaction
- Responsive horizontal layout
- Keyboard accessible with `:focus-visible`
- Uses CSS custom properties for easy customization
- Supports `prefers-reduced-motion`
- No JavaScript required

## Files

```
zoom-in-carousel-vk/
├── demo.html
├── style.css
└── README.md
```

## Customization

The component exposes the following CSS custom properties:

| Property | Description |
|----------|-------------|
| `--carousel-duration` | Animation duration |
| `--carousel-easing` | Animation timing function |
| `--carousel-scale` | Zoom scale on hover/focus |
| `--carousel-gap` | Space between cards |
| `--card-width` | Width of each carousel card |
| `--card-radius` | Card border radius |

## Accessibility

- Keyboard focus support using `:focus-visible`
- Semantic HTML structure
- Responsive design
- Honors the user's `prefers-reduced-motion` setting

## Browser Support

Works in all modern browsers that support CSS custom properties, Flexbox, and `:focus-visible`.