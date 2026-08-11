# Bounce-Pulse Dropdown for Creative Portfolios

## Overview
This submission showcases a premium, CSS-only dropdown menu tailored for creative portfolio navigation. The component uses a soft bounce entrance followed by a subtle pulse finish to create a refined micro-interaction that feels polished without becoming overbuilt.

## Features
- Semantic HTML5 structure with a keyboard-friendly disclosure menu
- Responsive header, dropdown layout, and footer preview
- CSS custom properties for animation tuning and visual styling
- Accessible focus states and reduced-motion support
- Reusable styling that stays lightweight and self-contained

## Folder structure
```text
bounce-pulse-dropdown-portfolio-nb/
├── demo.html
├── style.css
└── README.md
```

## Installation / Usage
Open the demo file directly in a browser:

```text
submissions/examples/bounce-pulse-dropdown-portfolio-nb/demo.html
```

No build step or JavaScript is required.

## Responsive behavior
The layout adapts gracefully across mobile, tablet, and desktop sizes. The navigation wraps neatly, the dropdown shifts into a single-column layout on smaller screens, and spacing remains balanced without overflow.

## Accessibility notes
- Uses semantic navigation and disclosure patterns
- Includes visible focus styling for keyboard users
- Maintains strong contrast for text and interactive elements
- Respects the reduced-motion preference to minimize or disable animation

## CSS custom properties
The component exposes the following configurable values in the stylesheet:

- `--dropdown-duration`
- `--dropdown-easing`
- `--dropdown-scale`
- `--dropdown-distance`
- `--dropdown-shadow`
- `--dropdown-radius`
- `--dropdown-background`
- `--pulse-scale`

## EaseMotion CSS classes demonstrated
The demo includes existing EaseMotion CSS utilities where appropriate, including:

- `ease-fade-in`
- `ease-hover-grow`
- `ease-card-lift`

## Browser compatibility
The example is designed for modern evergreen browsers and uses standard HTML and CSS features such as:

- `details` and `summary`
- CSS custom properties
- Flexible layout with grid and flexbox
- Media queries for responsiveness and reduced motion

## Customization guide
To tailor the experience, update the root variables in the stylesheet for motion timing, color, or panel shape. You can also change the navigation copy, featured project card, and footer links to match a specific portfolio brand.
