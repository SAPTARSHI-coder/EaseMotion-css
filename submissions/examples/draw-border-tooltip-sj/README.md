# Draw-Border Line Tooltip

A pure CSS tooltip component featuring a smooth draw-border line animation with a minimalist tech-inspired design. The component is lightweight, responsive, keyboard accessible, and requires no JavaScript.

## Features

-  Pure CSS implementation
-  Smooth draw-border line animation
-  Minimalist tech-inspired design
-  Fully responsive layout
-  Keyboard accessible using `:focus-visible`
-  Easily customizable with CSS custom properties
-  No JavaScript required

## Files

- `demo.html` – Demonstrates the tooltip component
- `style.css` – Contains the styling, animation, and CSS variables
- `README.md` – Documentation for the component

## CSS Custom Properties

You can customize the component by modifying these variables:

```css
--tooltip-bg
--tooltip-text
--border-color
--button-bg
--button-text
--radius
--duration
--easing
--shadow
```

## Usage

1. Open `demo.html` in any modern web browser.
2. Hover over the button or focus it using the **Tab** key to display the tooltip.
3. Customize the appearance by editing the CSS variables in `style.css`.

## Accessibility

- Supports keyboard navigation using `:focus-visible`
- Uses semantic HTML elements
- Includes ARIA attributes (`aria-describedby` and `role="tooltip"`) for improved accessibility

## Browser Support

Compatible with all modern browsers that support CSS custom properties, transitions, and pseudo-elements.