# Ripple Wave Stepper

A lightweight, responsive multi-step progress indicator built with pure HTML and CSS. The active step displays a smooth expanding ripple animation to highlight the current stage.

## Features

- Pure HTML5 & CSS3
- Smooth ripple-wave keyframe animation
- Fully responsive for desktop, tablet, and mobile
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

## Project Structure

```
ripple-wave-stepper/
├── demo.html
├── style.css
└── README.md
```

## Accessibility

Animations are automatically disabled for users who enable **Reduce Motion** in their operating system, improving accessibility and reducing motion sensitivity.

## Browser Support

Compatible with all modern browsers supporting CSS animations, custom properties, and media queries.

## License

MIT