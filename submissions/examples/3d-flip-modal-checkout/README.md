# CSS 3D-Flip Modal Checkout

A modern, responsive e-commerce checkout layout featuring a CSS-only 3D Flip Modal for an engaging user experience, built entirely with pure HTML5 and CSS3. 

## Features
- Pure HTML5 & CSS3
- CSS-only 3D Flip animation (No JavaScript)
- Glassmorphism UI modal design
- Fully responsive for mobile, tablet, and desktop
- CSS custom properties (variables) for easy theming
- Smooth transitions and keyframe animations
- Accessible focus states for keyboard navigation
- Supports `prefers-reduced-motion`

## Folder Structure
```
3d-flip-modal-checkout/
├── demo.html
├── style.css
└── README.md
```

## Installation
No installation required. Simply clone the repository or download the files.

## Usage
Open `demo.html` in any modern web browser to view the interactive modal. 
The flip action is handled purely through a hidden CSS checkbox and adjacent sibling selectors (`:checked ~ .flip-container .flipper`), requiring zero JavaScript.

## CSS Variables
You can easily customize the modal's theme by modifying the CSS variables located in the `:root` pseudo-class in `style.css`:
- `--primary`: Main action button color
- `--secondary`: Success state color
- `--bg-gradient-start` / `--bg-gradient-end`: Background colors
- `--card-bg`: Glassmorphism background transparency
- `--transition-speed`: Flip animation duration

## Customization
- **Flip Speed:** Adjust the `--transition-speed` variable.
- **Glassmorphism:** Modify `backdrop-filter: blur(...)` and `--card-bg` to increase or decrease the frosted glass effect.
- **Shadows:** Adjust `--shadow-float` for depth perception.

## Responsive Design
The layout uses a flexible wrapper with max-width limits and media queries for mobile devices (max-width: 480px) to ensure padding and font sizes scale appropriately on smaller screens.

## Accessibility
- Semantic HTML tags are used (`<header>`, `<main>`, `<footer>`, `<section>`).
- Custom focus rings are provided for interactive elements using `focus-visible`.
- Includes `@media (prefers-reduced-motion: reduce)` to disable transitions and animations for users who prefer reduced motion.

## Browser Support
- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
*(Note: `backdrop-filter` requires vendor prefixes in some older Safari versions, which are included).*

## License
MIT
