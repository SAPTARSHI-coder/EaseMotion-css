# Blur-Entrance Feature Grid

A modern, responsive feature grid component with a smooth blur-entrance animation designed for minimalist tech layouts. Built with pure CSS and HTML.

## Features

- **Pure CSS Animations**: Smooth `blur()` and `translate` entrance effects without any JavaScript.
- **Staggered Delays**: Feature cards animate in sequentially for a polished look.
- **Hover Effects**: Subtle lift and glow on hover to encourage interactivity.
- **Responsive Design**: Automatically adjusts columns based on screen size using CSS Grid.
- **Accessibility**: Includes `prefers-reduced-motion` media queries to disable animations for users who prefer it.
- **Custom Properties**: Easy to theme and adjust timing via CSS variables.

## Usage

1. Copy the HTML structure from `demo.html` into your project.
2. Include the `style.css` stylesheet.
3. (Optional) Customize the CSS variables in the `:root` selector to match your brand's color palette.

## CSS Variables

The component uses the following CSS variables for easy customization:

```css
:root {
  --bg-color: #0f172a;          /* Background color of the container */
  --card-bg: #1e293b;           /* Background color of the feature cards */
  --text-main: #f8fafc;         /* Primary text color */
  --text-muted: #94a3b8;        /* Secondary/muted text color */
  --accent: #38bdf8;            /* Accent color for icons and hover states */
  --border-radius: 16px;        /* Border radius for cards */
  --transition-speed: 0.6s;     /* Speed of the entrance animation */
  --transition-easing: cubic-bezier(0.25, 1, 0.5, 1); /* Animation easing function */
}
```

## Accessibility

This component fully supports the `prefers-reduced-motion` media query. Users who have enabled this setting in their OS will see the content instantly without the blur and translation animations, ensuring an accessible experience.
