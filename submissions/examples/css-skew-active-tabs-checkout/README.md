# CSS Skew-Active Tabs Checkout

A modern, responsive e-commerce checkout layout featuring CSS-only Skew-Active Tabs for intuitive step-by-step navigation, built entirely with pure HTML5 and CSS3. 

## Features
- Pure HTML5 & CSS3 (No JavaScript)
- Skew-Active Tab animation using CSS `transform: skew()`
- Hidden Radio input technique (`:checked`) for tab switching logic
- Glassmorphism UI cards
- Fully responsive layout for mobile, tablet, and desktop
- CSS custom properties (variables) for easy theming
- Smooth transitions and bouncy highlight effects
- Accessible focus states for forms and buttons
- Supports `prefers-reduced-motion`

## Folder Structure
```
css-skew-active-tabs-checkout/
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
- `--primary-color`: The active highlight color (Rose-500)
- `--bg-gradient-start` / `--bg-gradient-end`: Background gradient
- `--card-bg`: Transparency for glassmorphism panels
- `--transition-bounce`: Timing function for the tab highlight animation

## Customization
- **Skew Angle:** Modify `transform: skewX(-15deg)` in `.skew-bg` and the counter-skew `transform: skewX(15deg)` in `.tab-text` to change the angle of the tabs.
- **Glassmorphism:** Adjust `backdrop-filter: blur(...)` to increase or decrease the frosted glass effect.

## Responsive Design
The layout uses CSS Grid. It stacks into a single column on smaller screens, and expands to a two-column layout (`2fr 1fr`) on screens wider than `900px`, placing the Order Summary alongside the Tab Panels.

## Accessibility
- Uses hidden radio buttons which maintain native keyboard navigability.
- Provides clear focus rings (`focus-visible`) for all form inputs and buttons.
- Implements `@media (prefers-reduced-motion: reduce)` to disable transitions and animations for users who prefer reduced motion.

## Browser Support
- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)

## License
MIT
