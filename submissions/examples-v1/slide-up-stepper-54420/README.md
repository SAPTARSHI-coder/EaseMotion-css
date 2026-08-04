# Slide-Up Stepper

A lightweight responsive stepper component built with pure HTML and CSS. The active step uses a subtle slide-up animation to indicate the current stage while maintaining accessibility.

## Features

- Pure HTML5 & CSS3
- Smooth slide-up animation
- Responsive layout
- CSS custom properties
- No JavaScript required
- Supports `prefers-reduced-motion`

## CSS Custom Properties

```css
--primary
--completed
--inactive
--background
--text
--step-size
--animation-speed
```

## Folder Structure

```
slide-up-stepper/
├── demo.html
├── style.css
└── README.md
```

## Accessibility

The component respects the user's **prefers-reduced-motion** preference by disabling animations while keeping the layout fully functional.

## Browser Support

Compatible with all modern browsers supporting CSS animations, custom properties, and media queries.

## License

MIT