# Zoom-In Stepper

A lightweight, responsive stepper component built with pure HTML and CSS. The active step is emphasized using a smooth zoom-in animation, making progress easy to follow while remaining accessible.

## Features

- Pure HTML5 & CSS3
- Smooth zoom-in keyframe animation
- Responsive layout for desktop, tablet, and mobile
- CSS custom properties for easy customization
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
zoom-in-stepper/
├── demo.html
├── style.css
└── README.md
```

## Accessibility

The component respects the user's **prefers-reduced-motion** setting by disabling animations while preserving the layout and functionality.

## Browser Support

Compatible with all modern browsers supporting CSS animations, custom properties, and media queries.

## License

MIT