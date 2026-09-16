# Bounce Pulse Progress Bar

A lightweight progress bar component built with pure HTML and CSS. The filled section uses a subtle bounce-and-pulse animation to indicate ongoing progress while remaining responsive and accessible.

## Features

- Pure HTML5 & CSS3
- Smooth bounce-pulse animation
- Fully responsive layout
- CSS custom properties
- Accessible with ARIA progressbar attributes
- No JavaScript required
- Supports `prefers-reduced-motion`

## CSS Custom Properties

```css
--primary
--background
--track
--text
--height
--radius
--progress
--animation-speed
```

## Folder Structure

```
bounce-pulse-progress-bar/
├── demo.html
├── style.css
└── README.md
```

## Accessibility

- Uses semantic `role="progressbar"`
- Includes `aria-valuemin`, `aria-valuemax`, and `aria-valuenow`
- Automatically disables animations when `prefers-reduced-motion` is enabled

## Browser Support

Compatible with all modern browsers supporting CSS animations, custom properties, Flexbox, and media queries.

## License

MIT