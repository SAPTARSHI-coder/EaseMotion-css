# CSS Scale-Hover Pricing Table

A modern, fintech-inspired pricing table built with pure HTML and CSS. It features smooth scale-hover transitions, dynamic shadows, and a clean, trustworthy dark theme layout perfect for SaaS and fintech dashboards.

## Features

- **Pure CSS:** No JavaScript or external libraries required.
- **Scale-Hover Effect:** Cards scale up and elevate with a glow effect on hover using smooth CSS transitions.
- **Responsive Design:** Uses CSS Grid to perfectly adapt to mobile, tablet, and desktop viewports.
- **Accessibility:** Includes `prefers-reduced-motion` media queries to disable animations for users who prefer it.
- **Fintech Aesthetics:** Clean typography (Inter), deep blue/dark slate backgrounds, and vibrant gradients.

## File Structure

- `demo.html` - The showcase page demonstrating the pricing table layout.
- `style.css` - The stylesheet containing all layout, typography, and animation logic.

## Usage

1. Copy the HTML structure from `demo.html` into your project.
2. Include the CSS from `style.css`.
3. Ensure you have the 'Inter' font loaded from Google Fonts (or replace it with your preferred sans-serif font).

## CSS Custom Properties

The stylesheet uses CSS Variables (Custom Properties) for easy theme customization:

```css
:root {
    /* Color Palette */
    --bg-color: #0f172a;
    --text-primary: #f8fafc;
    --text-secondary: #94a3b8;
    --card-bg: #1e293b;
    --card-border: #334155;
    --primary-color: #3b82f6;
    --primary-hover: #2563eb;
    --accent-color: #10b981;
    --disabled-color: #475569;
    
    /* Animation Tokens */
    --transition-speed: 0.4s;
    --transition-timing: cubic-bezier(0.4, 0, 0.2, 1);
    --hover-scale: 1.05;
    --hover-shadow: 0 20px 40px -10px rgba(59, 130, 246, 0.2), 0 0 20px rgba(59, 130, 246, 0.1);
}
```

## Customization

- To change the scale effect, adjust the `--hover-scale` variable.
- To modify the hover shadow/glow, adjust the `--hover-shadow` variable.
- Replace `.icon` text content (✓ and ✕) with SVG icons for a more polished look in production.
