# Ripple-Wave Carousel Checkout Layout

A modern, responsive e-commerce checkout layout featuring a Ripple-Wave Carousel, built entirely with pure HTML5 and CSS3. 

## Features
- Pure HTML5 & CSS3 (No JavaScript, no frameworks)
- Semantic HTML tags
- CSS custom properties (variables)
- Glassmorphism UI cards
- Ripple-wave background animations
- Floating cards with smooth hover effects
- Mobile-first responsive design
- Accessible focus states
- Supports `prefers-reduced-motion`

## Folder Structure
```
ripple-wave-carousel/
├── demo.html
├── style.css
└── README.md
```

## Installation
No installation required. Clone the repository or download the files.

## Usage
Open `demo.html` in any modern web browser to view the component.
Link the `style.css` in your HTML file:
```html
<link rel="stylesheet" href="style.css">
```

## CSS Variables
You can easily customize the theme by modifying the CSS variables in the `:root` pseudo-class in `style.css`:
- `--primary-color`
- `--secondary-color`
- `--bg-color`
- `--card-bg`
- `--card-border`
- `--text-primary`

## Customization
- **Animations:** Adjust the duration or scaling inside the `@keyframes ripple-wave` section.
- **Glassmorphism:** Modify the `backdrop-filter: blur(...)` and `--card-bg` variables to achieve the desired frosted glass effect.

## Responsive Design
The layout uses CSS Grid and Flexbox for fluid adaptations:
- Mobile: 1 column layout
- Tablet (768px): Checkout details and order summary side-by-side
- Desktop (1024px): Expanded multi-column layout for shipping, payment, and coupon forms.

## Accessibility
- Uses semantic elements like `<main>`, `<section>`, `<aside>`, `<header>`.
- Includes custom focus rings for interactive elements.
- Implements `@media (prefers-reduced-motion: reduce)` to disable animations for users who prefer reduced motion.

## Browser Support
- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)

## License
MIT
