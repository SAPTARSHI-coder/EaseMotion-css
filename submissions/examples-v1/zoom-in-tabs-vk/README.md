# Zoom-In Tabs

A pure CSS Zoom-In Tabs component featuring a smooth scaling transition for the active tab. Designed for creative portfolio layouts with responsive behavior, keyboard accessibility, and customizable animation using CSS custom properties.

## Features

- Pure HTML & CSS (No JavaScript)
- Smooth zoom-in transition for active and hovered tabs
- Responsive layout
- Keyboard accessible with visible focus styles
- CSS custom properties for easy customization
- Supports `prefers-reduced-motion`

## File Structure

```
zoom-in-tabs-vk/
├── demo.html
├── style.css
└── README.md
```

## Customization

Modify the following CSS custom properties in `style.css`:

```css
:root {
    --zoom-duration: 0.35s;
    --zoom-easing: ease;
    --zoom-scale: 1.08;
}
```

You can also customize colors, spacing, border radius, and typography to match your project.

## Accessibility

- Keyboard focus indicators using `:focus-visible`
- Semantic HTML structure
- Responsive across different screen sizes
- Respects `prefers-reduced-motion`

## Browser Support

Compatible with all modern browsers that support:

- CSS Custom Properties
- CSS Transforms
- CSS Transitions
- Media Queries

## License

This example follows the licensing terms of the EaseMotion project.