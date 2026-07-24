# EaseMotion CSS - Navbar Animation Example

This directory contains a complete, responsive Navbar example demonstrating the animation capabilities of EaseMotion CSS.

## Overview
The navbar demonstrates standard navigation patterns with smooth, performant CSS animations using GPU-accelerated properties (`transform` and `opacity`). It provides an animated entrance sequence and interactive hover states.

### Key Animations Demonstrated
- **Navbar Entrance**: `ease-slide-in-from-top` slides the entire navbar into view on initial load.
- **Logo Reveal**: `ease-fade-in` combined with a `delay-200ms` utility for a subtle staggered reveal.
- **Link Reveal Sequence**: Sequential `ease-fade-in` on desktop navigation links using escalating delays (`delay-300ms` through `delay-600ms`).
- **Interactive Button**: `hover-ease-pulse` adds an engaging interaction when hovering the Sign Up button.
- **Mobile Menu**: CSS transitions (`transform` and `opacity`) manage the mobile dropdown state changes cleanly without animating layout properties.

## Installation
Since this example is self-contained within the `submissions/` directory (adhering to the repository code freeze), you only need to ensure the main `easemotion.min.css` file is accessible relative to this directory.

```html
<!-- Include EaseMotion core from dist -->
<link rel="stylesheet" href="../../../dist/easemotion.min.css">
<!-- Include specific styling for this navbar -->
<link rel="stylesheet" href="style.css">
```

## Folder Structure
```text
submissions/examples/navbar-ag/
├── demo.html     # HTML structure and minimal JS for mobile toggle
├── style.css     # Navbar specific styling and layout
└── README.md     # This documentation
```

## Accessibility Considerations
- Uses semantic HTML (`<nav>`, `<ul>`, `<li>`) and ARIA roles (`role="menubar"`, `role="menuitem"`).
- Keyboard focus states are visually distinct, matching the hover behavior.
- Uses `@media (prefers-reduced-motion: reduce)` to completely disable layout movement and animations for users with motion sensitivities.

## Browser Compatibility
Tested and supported in:
- Chrome
- Firefox
- Safari
- Edge
