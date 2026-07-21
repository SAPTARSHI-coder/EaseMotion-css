# Text Reveal Calendar

A beautiful, production-ready calendar component with elegant text reveal animations, designed with a Health & Fitness theme for the EaseMotion CSS library.

## Features

- **No JavaScript Required**: 100% CSS-only implementation
- **Health & Fitness Theme**: Green/purple accent colors perfect for wellness apps
- **Smooth Animations**:
  - Month title slides/fades in first
  - Weekdays reveal with staggered delays
  - Dates appear sequentially
- **Modern Design**: White card with rounded corners and soft shadows
- **Responsive Layout**: Works perfectly on mobile and desktop
- **Semantic HTML**: Proper accessibility with ARIA labels
- **Customizable**: Built with CSS variables for easy theming
- **Interactive**:
  - Navigation arrows (visual only)
  - Today's date highlighted
  - Subtle hover effects on dates

## What does this do?

This calendar component creates a visually stunning user experience with sequential text reveal animations when loaded. Every element appears with smooth transitions, making your calendar interface feel polished and modern.

## How is it used?

### Basic Usage

1. Copy the HTML structure from `demo.html` into your project
2. Include the styles from `style.css`
3. Customize the dates, month, and colors as needed

### Customization

Modify the CSS variables in `:root` to customize the look and feel:

```css
:root {
  --em-calendar-bg: #ffffff;
  --em-calendar-accent-primary: #22c55e; /* Green */
  --em-calendar-accent-secondary: #7c3aed; /* Purple */
  --em-calendar-text-primary: #1f2937;
  /* ... and more! */
}
```

## Why is it useful?

- **User Engagement**: Smooth animations keep users interested
- **Accessibility**: Semantic HTML and proper ARIA labels ensure it works for everyone
- **Reusable**: Clean CSS variables make it easy to adapt to any design
- **Performance**: No JavaScript means fast load times
- **Modern Aesthetic**: Perfect for fitness, health, and wellness applications

## Browser Support

Works on all modern browsers that support CSS Grid, CSS Variables, and CSS Animations.
