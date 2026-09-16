# CSS Scale-Hover Navbar

A modern, fintech-inspired navigation bar built with pure HTML and CSS. It features a sleek "scale-hover" interaction where navigation items seamlessly expand and reveal a soft highlight background when hovered over, providing excellent tactile feedback.

## Features

- **Pure CSS:** Entirely CSS-driven animations; no JavaScript needed for hover effects.
- **Scale-Hover Effect:** Utilizing a bouncy `cubic-bezier` timing function, navigation links scale up dynamically (`transform: scale()`) to emphasize interactivity.
- **Responsive Layout:** Automatically adapts for mobile screens (hides standard nav, reveals hamburger toggle).
- **Fintech Aesthetics:** Clean spacing, soft shadows, sharp typography (Inter), and subtle active states suited for financial dashboards.
- **Accessibility:** Fully supports `prefers-reduced-motion` media queries to strip away scaling animations for users with motion sensitivities.

## File Structure

- `demo.html` - The showcase page demonstrating the navbar layout and dummy dashboard content.
- `style.css` - The stylesheet containing all layout logic, typography, colors, and keyframe/transition animations.

## Usage

1. Copy the HTML `.fintech-navbar` structure from `demo.html` into your project.
2. Include the CSS from `style.css`.
3. Ensure the 'Inter' font is loaded from Google Fonts (or replace it with your preferred font).
4. *Note: Mobile toggle functionality (hamburger menu) requires custom JavaScript in production to manage the opened/closed state.*

## CSS Custom Properties

The stylesheet makes heavy use of CSS Custom Properties for easy theme configuration:

```css
:root {
    /* Color Palette */
    --bg-main: #f8fafc;
    --nav-bg: #ffffff;
    --text-primary: #0f172a;
    --text-secondary: #64748b;
    --border-color: #e2e8f0;
    
    --primary-blue: #3b82f6;
    --primary-blue-hover: #eff6ff;
    
    /* Animation Tokens */
    --transition-speed: 0.3s;
    --transition-timing: cubic-bezier(0.34, 1.56, 0.64, 1); /* Bouncy spring-like curve */
    --scale-amount: 1.08;
}
```

## Customization

- To change the scale magnitude, adjust `--scale-amount`.
- To alter the "bounce" or timing of the hover effect, modify `--transition-timing`.
- Ensure SVGs used for icons are set to `currentColor` so they correctly adapt to hover color changes.
