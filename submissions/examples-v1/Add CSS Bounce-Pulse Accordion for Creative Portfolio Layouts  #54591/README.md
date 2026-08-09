# CSS Bounce-Pulse Accordion

A modern, pure CSS accordion designed for creative portfolio layouts. It features a bouncy expand/collapse animation and a pulsing indicator for the active state, providing an engaging and dynamic user experience without requiring JavaScript.

## Features

- **Pure CSS/HTML:** No JavaScript required, utilizing the hidden radio button hack.
- **Bounce Animation:** Smooth, bouncy transitions using custom `cubic-bezier` timing functions.
- **Pulse Effect:** Continuous pulsing animation on the active item's indicator using CSS keyframes.
- **Responsive:** Fluid design that adapts beautifully to any screen size.
- **Accessibility:** Includes `prefers-reduced-motion` media queries to disable animations for users with motion sensitivities.

## Usage

1. Include the `style.css` in your project.
2. Copy the HTML structure from `demo.html` into your project.
3. Ensure each `<input type="radio">` has a unique `id` and the corresponding `<label>` uses the matching `for` attribute. All radio buttons in the same accordion group must share the same `name` attribute.

## CSS Custom Properties

You can easily theme the accordion by modifying the CSS variables defined in the `:root` scope:

```css
:root {
    --bg-color: #0f172a;           /* Background color of the page */
    --text-color: #f8fafc;         /* Primary text color */
    --text-muted: #94a3b8;         /* Muted text color for content */
    --primary-color: #6366f1;      /* Accent color for active state */
    --primary-glow: rgba(99, 102, 241, 0.5); /* Glow color for pulse effect */
    --secondary-color: #8b5cf6;    /* Secondary accent for gradients */
    --item-bg: #1e293b;            /* Accordion item background */
    --item-bg-hover: #334155;      /* Accordion item hover background */
    --border-color: #334155;       /* Accordion item border color */
}
```

## Browser Support

This component uses modern CSS features like CSS Grid for transitions and the `:has()` pseudo-class for parent styling. It is supported in all modern browsers (Chrome 105+, Safari 15.4+, Firefox 121+).
