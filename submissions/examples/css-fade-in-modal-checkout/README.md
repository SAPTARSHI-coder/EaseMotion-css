# CSS Fade-In Modal Checkout

A modern, responsive e-commerce checkout layout featuring a CSS-only Fade-In Modal for order confirmation, built entirely with pure HTML5 and CSS3. 

## Features
- Pure HTML5 & CSS3 (No JavaScript)
- CSS-only Fade-In Modal animation using `opacity` and `transform`
- Hidden Checkbox hack (`:checked`) to manage modal open/close states
- Glassmorphism UI for both the checkout card and modal container
- Fully responsive layout for mobile, tablet, and desktop
- CSS custom properties (variables) for effortless theming
- Smooth transitions and a custom keyframe pop-in animation
- Accessible focus states for buttons and interactive elements
- Supports `prefers-reduced-motion`

## Folder Structure
```
css-fade-in-modal-checkout/
├── demo.html
├── style.css
└── README.md
```

## Installation
No installation required. Clone the repository or download the files.

## Usage
Open `demo.html` in any modern web browser to view the checkout layout. 
Clicking the "Confirm & Pay" button checks a hidden CSS checkbox (`#modal-toggle`). Sibling selectors (`:checked ~ .modal-overlay`) then trigger the modal's visibility and fade-in animations. No JS logic is required.

## CSS Variables
You can customize the theme by modifying the CSS variables located in the `:root` pseudo-class in `style.css`:
- `--primary-color`: The primary action button and highlight color (Violet)
- `--secondary-color`: The success icon and title color (Emerald)
- `--bg-gradient-start` / `--bg-gradient-end`: Background gradient
- `--card-bg` / `--modal-bg`: Transparency for glassmorphism panels
- `--transition-normal`: Timing function for the modal fade and slide animation

## Customization
- **Fade Animation:** Modify the `transition` properties in `.modal-overlay` and `.modal-container` to change the speed and easing of the modal appearance.
- **Glassmorphism:** Adjust `backdrop-filter: blur(...)` on `.modal-overlay` and `.card` to increase or decrease the frosted glass effect.

## Responsive Design
The layout uses flexible sizing with `max-width`. On screens smaller than `480px`, paddings are reduced and the modal's order details layout switches from a row to a stacked column design for better readability.

## Accessibility
- Uses hidden checkboxes linked via standard `<label for="...">` which maintains semantic structure.
- Provides clear focus rings (`focus-visible`) for buttons.
- Includes `role="dialog"` and `aria-modal="true"` on the modal container for screen readers.
- Implements `@media (prefers-reduced-motion: reduce)` to disable transitions and animations for users who prefer reduced motion.

## Browser Support
- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)

## License
MIT
