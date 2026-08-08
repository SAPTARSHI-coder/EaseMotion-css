# Floating Orbit Popover

A modern pure CSS popover featuring a smooth Floating Orbit transition designed for dashboard interfaces.

## Features

- Pure HTML + CSS
- Zero JavaScript
- Responsive layout
- Keyboard accessible
- Floating Orbit animation
- Dashboard-inspired glassmorphism
- Fully customizable using CSS variables

## CSS Variables

```css
:root{

    --duration:.65s;

    --ease:cubic-bezier(.25,.8,.25,1);

    --orbit-distance:22px;

    --scale-start:.85;

    --scale-end:1;

    --popover-width:270px;

}
```

## Accessibility

- Keyboard navigation supported
- Uses `:focus-within`
- Visible focus styles
- Semantic button element
- Tooltip uses `role="tooltip"`

## Browser Support

- Chrome
- Firefox
- Safari
- Edge

## Customization

Adjust the CSS variables to control:

- animation duration
- easing
- floating distance
- popover size
- scaling
- colors
- radius
- shadow

No JavaScript required.