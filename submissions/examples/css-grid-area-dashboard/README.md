# CSS Grid Area Dashboard

A responsive dashboard layout built using CSS Grid named areas.

## Features

- Pure HTML and CSS
- CSS Grid named-area layout
- Responsive desktop, tablet and mobile views
- Dashboard header, sidebar, main content and footer
- Responsive statistics cards
- Weekly activity chart
- Recent projects section
- Notifications section
- Hover and entrance animations
- Keyboard-friendly navigation
- Semantic HTML elements
- Reduced-motion support using `prefers-reduced-motion`
- No JavaScript required

## CSS Grid Structure

The dashboard uses CSS Grid named areas:

```css
grid-template-areas:
  "header header"
  "sidebar main"
  "sidebar footer";