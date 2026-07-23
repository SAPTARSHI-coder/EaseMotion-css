# Floating Orbit Popover

## Overview
This submission showcases a premium e-commerce checkout confirmation experience built with pure HTML and CSS. The popover glides into view with a soft orbiting motion and settles into a polished, trustworthy layout that feels at home in a modern storefront.

## Features
- Realistic checkout layout with cart summary, product preview, totals, and delivery details
- Floating orbit entrance and exit animation driven by CSS transforms and opacity
- Accessible details-based trigger for open and close behavior without JavaScript
- Responsive layout for mobile, tablet, and desktop screens
- Custom CSS properties for tuning duration, easing, scale, distance, shadow, radius, and surface colors

## Folder structure
```text
submissions/examples/floating-orbit-popover-nb/
├── demo.html
├── style.css
└── README.md
```

## How to use
Open the demo.html file directly in a browser to view the experience. The layout is self-contained, and the included stylesheet provides all visuals and motion.

## Responsive behavior
The interface collapses into a single-column layout on smaller screens, maintains comfortable spacing, and keeps the popover width constrained so it never overflows the viewport.

## Accessibility notes
The popover is opened through a semantic details/summary pattern, supports keyboard navigation, keeps visible focus styles, and uses sufficient contrast for text and action elements. Reduced-motion preferences are respected.

## CSS custom properties
The styling is driven by configurable variables such as:
- --popover-duration
- --popover-easing
- --popover-scale
- --popover-distance
- --popover-shadow
- --popover-radius
- --popover-background

## EaseMotion CSS classes demonstrated
The demo uses existing EaseMotion-inspired utility classes in the markup to show how the component can blend with the library ecosystem, including:
- ease-card
- ease-card-glass
- ease-fade-in
- ease-hover-grow
- ease-hover-lift

## Browser compatibility
This demo is designed to work well in modern evergreen browsers that support CSS transforms, backdrop filters, and the details/summary pattern.

## Customization guide
To personalize the experience, adjust the CSS custom properties in style.css for motion, surface tones, and sizing. The layout can also be adapted by changing the card copy, totals, or action labels while preserving the same structure.
