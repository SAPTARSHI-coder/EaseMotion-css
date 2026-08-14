# Retro 3D Hero

## Overview
A polished, responsive 3D Hero Section featuring a retro-futuristic aesthetic inspired by classic sci-fi interfaces. It uses modern CSS transforms and pseudo-elements to achieve depth and animation without relying on JavaScript or WebGL.

## Features
- Fully responsive hero layout (two columns on desktop, single column on mobile)
- Pure HTML and CSS implementation (No JS, No external libraries)
- CSS-based 3D perspective cube and animated retro floor grid
- Sci-fi angled button designs with interactive hover states
- `prefers-reduced-motion` support
- Accessible semantic HTML with decorative 3D elements hidden from screen readers

## File Structure
```
retro-3d-hero/
├── demo.html
├── style.css
└── README.md
```

## Usage
Simply copy the HTML structure from `demo.html` into your project and include `style.css`. The component relies on CSS custom properties (variables) for easy theming.

## HTML Structure
- `.ease-retro-hero`: The main container that handles grid layout and the animated floor grid pseudo-element.
- `.ease-retro-hero-content`: Contains the typography (eyebrow, heading, description) and action buttons.
- `.ease-retro-actions`: Wrapper for the CTA buttons.
- `.ease-retro-visual`: The 3D scene wrapper with perspective applied.
- `.ease-retro-3d-scene` & `.ease-retro-3d-object`: Wrappers to maintain the 3D transforms and perform the rotation animation.
- `.ease-retro-face`: Individual faces of the CSS 3D cube.

## Customization

| Variable | Purpose |
|----------|---------|
| `--retro-bg` | Background color for the hero container |
| `--retro-grid` | Color of the animated perspective floor grid |
| `--retro-accent-1` | Primary neon accent color (used in text gradients and buttons) |
| `--retro-accent-2` | Secondary neon accent color (used in 3D object borders and text) |
| `--retro-text-main` | Primary text color |
| `--retro-text-muted` | Secondary description text color |
| `--retro-font-family` | Base font family |

## Responsive Behavior
- **Desktop (1024px+)**: Two-column layout with typography on the left and the rotating 3D visual on the right.
- **Tablet (768px - 1024px)**: Gap and padding are reduced to accommodate medium screens while retaining the two-column structure.
- **Mobile (< 768px)**: Stacks into a single column. The 3D visual is moved to the top and scaled down to prevent horizontal overflow. The buttons span full width on very small screens (480px).

## Accessibility
The component utilizes semantic HTML tags (`<section>`, `<h1>`, `<p>`, `<a>`). The rotating 3D cube and floor grid are decorative, so the `.ease-retro-visual` container utilizes `aria-hidden="true"` to prevent screen readers from announcing fragmented text. Keyboard navigation is supported with clear visible focus rings on the action buttons.

## Browser Support
Supported in modern browsers that support CSS Grid, Flexbox, and CSS 3D Transforms (Chrome, Edge, Firefox, Safari).
