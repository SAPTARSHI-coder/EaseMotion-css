# Zoom-Out Tooltip for E-Commerce Checkout Layouts

A responsive tooltip component with a smooth Zoom-Out interaction transition, designed for modern e-commerce checkout interfaces.

## Features

- Pure HTML & CSS (no JavaScript)
- Responsive layout
- Keyboard accessible (`:focus` / `:focus-visible`)
- Uses CSS custom properties for timing, easing, and scale
- E-commerce checkout themed design
- Smooth Zoom-Out animation

## Files

- `demo.html`
- `style.css`
- `README.md`

## Customization

You can easily adjust the animation by editing the CSS variables:

```css
:root {
  --ease-tooltip-duration: 0.35s;
  --ease-tooltip-easing: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-tooltip-scale-start: 1;
  --ease-tooltip-scale-end: 0.8;
}
```

## Accessibility

- Tooltip is attached to the trigger using `aria-describedby`
- Tooltip uses `role="tooltip"`
- Fully accessible via keyboard navigation