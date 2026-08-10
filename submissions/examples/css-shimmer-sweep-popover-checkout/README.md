# CSS Shimmer-Sweep Popover Checkout

A modern, responsive e-commerce checkout layout featuring a CSS-only Shimmer-Sweep Popover for displaying secondary information, built entirely with pure HTML5 and CSS3. 

## Features
- Pure HTML5 & CSS3 (No JavaScript)
- CSS-only Shimmer-Sweep Animation (`@keyframes` + `::before` pseudo-element)
- Hidden Checkbox hack (`:checked`) to seamlessly open and close the popover
- Glassmorphism UI for both the checkout card and popover container
- Fully responsive layout for mobile, tablet, and desktop
- CSS custom properties (variables) for effortless theming
- Smooth transitions and a custom keyframe sweep animation
- Accessible focus states for buttons and interactive elements
- Supports `prefers-reduced-motion`

## Folder Structure
```
css-shimmer-sweep-popover-checkout/
├── demo.html
├── style.css
└── README.md
```

## Installation
No installation required. Clone the repository or download the files.

## Usage
Open `demo.html` in any modern web browser to view the checkout layout. 
Clicking the "More Info" button checks a hidden CSS checkbox (`#popover-toggle`). Sibling selectors (`:checked ~ .popover-content`) then trigger the popover's visibility and start the continuous shimmer-sweep keyframe animation over the popover's surface. No JS logic is required.

## CSS Variables
Customize the theme by modifying the CSS variables located in the `:root` pseudo-class in `style.css`:
- `--primary-color`: The primary action button color (Blue 500)
- `--bg-gradient-start` / `--bg-gradient-end`: Background gradient
- `--card-bg` / `--popover-bg`: Transparency for glassmorphism panels
- `--transition-normal`: Timing function for hover and popover reveal animations

## Customization
- **Shimmer Sweep Speed:** Modify the `animation: sweep 2s ...` duration in `.popover-toggle:checked ~ .shimmer-sweep::before` to make the shimmer faster or slower.
- **Sweep Angle:** Adjust the `transform: skewX(-25deg)` in the `.shimmer-sweep::before` block to change the angle of the light beam.
- **Glassmorphism:** Adjust `backdrop-filter: blur(...)` on `.card` to modify the frosted glass effect.

## Responsive Design
The layout is optimized for all screen sizes using a `max-width` container. On mobile screens (`max-width: 480px`), the popover width and positional offset are slightly adjusted to ensure it remains entirely within the viewport.

## Accessibility
- Uses hidden checkboxes linked via standard `<label for="...">` which maintains semantic structure for click toggling.
- Provides clear focus rings (`focus-visible`) for all clickable buttons.
- Implements `@media (prefers-reduced-motion: reduce)` to automatically disable the pop-up transition and continuous shimmer animation for users who prefer reduced motion.

## Browser Support
- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)

## License
MIT
