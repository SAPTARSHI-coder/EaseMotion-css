# CSS Zoom-In Tabs Checkout

A modern, responsive e-commerce checkout layout featuring CSS-only Zoom-In Tabs for step-by-step navigation, built entirely with pure HTML5 and CSS3. 

## Features
- Pure HTML5 & CSS3 (No JavaScript)
- Zoom-In Tab animation using CSS `transform: scale()`
- Hidden Radio input technique (`:checked`) for tab switching logic
- Glassmorphism UI cards and panels
- Fully responsive layout for mobile, tablet, and desktop
- CSS custom properties (variables) for effortless theming
- Bouncy zoom transitions for engaging interactivity
- Accessible focus states for forms and buttons
- Supports `prefers-reduced-motion`

## Folder Structure
```
css-zoom-in-tabs-checkout/
├── demo.html
├── style.css
└── README.md
```

## Installation
No installation required. Clone the repository or download the files.

## Usage
Open `demo.html` in any modern web browser to view the checkout layout. 
The tabs switch automatically based on CSS sibling selectors linking hidden radio inputs to their respective content panels. No JS logic is required.

## CSS Variables
You can customize the theme by modifying the CSS variables located in the `:root` pseudo-class in `style.css`:
- `--primary-color`: The active tab highlight color (Teal 500)
- `--bg-gradient-start` / `--bg-gradient-end`: Background gradient
- `--card-bg`: Transparency for glassmorphism panels
- `--transition-bounce`: Timing function for the zoom-in tab animation

## Customization
- **Zoom Scale:** Modify the `transform: scale(1.15)` in the active tab block to increase or decrease the zoom intensity.
- **Glassmorphism:** Adjust `backdrop-filter: blur(...)` to increase or decrease the frosted glass effect.

## Responsive Design
The layout uses CSS Grid. It stacks into a single column on smaller screens, and expands to a two-column layout (`2fr 1fr`) on screens wider than `900px`, placing the Order Summary alongside the Tab Panels. Additionally, tabs become scrollable horizontally if they exceed the viewport width on mobile devices.

## Accessibility
- Uses hidden radio buttons which maintain native keyboard navigability.
- Provides clear focus rings (`focus-visible`) for all form inputs and buttons.
- Implements `@media (prefers-reduced-motion: reduce)` to automatically disable the bouncy zoom and fade transitions for users who prefer reduced motion.

## Browser Support
- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)

## License
MIT
