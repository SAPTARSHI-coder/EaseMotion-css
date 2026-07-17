# Zoom-In Tooltip - Glassmorphism UI Layouts

A pure CSS animated tooltip component featuring a smooth zoom-in interaction transition, designed specifically for Glassmorphism UI layouts. This component brings a modern, frosted glass aesthetic with elegant animations that enhance user interaction without requiring any JavaScript.

## Overview

This contribution implements a high-quality CSS tooltip with zoom-in animation effects, following the EaseMotion CSS contribution guidelines. The component is designed to complement Glassmorphism UI aesthetics with its frosted glass styling and smooth zoom animations.

## Features

- **Zoom-In Animation**: Smooth scale-based zoom animation for elegant reveals
- **Multiple Directions**: Supports zoom-in animations from all 4 positions (top, bottom, left, right)
- **Glassmorphism Theme**: Frosted glass styling with backdrop blur optimized for modern UI
- **CSS Custom Properties**: Fully customizable via CSS variables for timing, easing, and visual effects
- **Accessibility**: Keyboard accessible and respects `prefers-reduced-motion`
- **Responsive**: Works seamlessly across all viewport sizes
- **Zero JavaScript**: Pure CSS implementation with no JavaScript dependencies
- **Browser Compatible**: Works in all modern browsers including Chrome, Firefox, Safari, and Edge

## Design Philosophy

The zoom-in tooltip is designed to create an elegant, refined user experience suitable for Glassmorphism UI. The animation uses smooth scaling transforms and backdrop blur effects to create a sophisticated, modern feel that complements glass-style interfaces.

## Technical Implementation

The component utilizes advanced CSS features including:
- CSS Backdrop Filter with blur effects
- CSS Transforms with scale animations
- CSS Custom Properties for easy customization
- Pseudo-elements for tooltip content
- CSS Transitions for smooth animations
- Media queries for accessibility support

## Preview

You can preview this component by opening `demo.html` in your browser. The demo showcases:

- **Top Zoom-In**: Tooltip zooms in from above with glass effect
- **Bottom Zoom-In**: Tooltip zooms in from below with glass effect
- **Left Zoom-In**: Tooltip zooms in from the left with glass effect
- **Right Zoom-In**: Tooltip zooms in from the right with glass effect

## Installation

Simply include the `style.css` file in your HTML project:

```html
<link rel="stylesheet" href="style.css">
```

Or copy the CSS rules directly into your stylesheet.

## Usage

Add the appropriate class to any element and use the data attributes for configuration:

```html
<!-- Basic Zoom-In Tooltip - Top -->
<span class="glassmorphism-tooltip top" data-tooltip="Your message here">Hover Me</span>

<!-- Bottom Zoom-In -->
<span class="glassmorphism-tooltip bottom" data-tooltip="Your message here">Hover Me</span>

<!-- Left Zoom-In -->
<span class="glassmorphism-tooltip left" data-tooltip="Your message here">Hover Me</span>

<!-- Right Zoom-In -->
<span class="glassmorphism-tooltip right" data-tooltip="Your message here">Hover Me</span>
```

## CSS Custom Properties

The following CSS custom properties are exposed for customization:

```css
--glass-tooltip-duration: 0.3s;
--glass-tooltip-easing: cubic-bezier(0.34, 1.56, 0.64, 1);
--glass-tooltip-blur: 12px;
--glass-tooltip-bg: rgba(255, 255, 255, 0.15);
--glass-tooltip-border: rgba(255, 255, 255, 0.2);
--glass-tooltip-shadow: rgba(0, 0, 0, 0.1);
--glass-tooltip-radius: 12px;
```

## Accessibility

This component is designed with accessibility in mind:

- **Keyboard Navigation**: Fully accessible via keyboard using focus-within
- **Reduced Motion**: Respects `prefers-reduced-motion` media query
- **Screen Readers**: Content is properly exposed to assistive technologies
- **Color Contrast**: Maintains sufficient contrast ratios for readability

## Browser Support

This component supports all modern browsers:

- Chrome 76+ (backdrop-filter)
- Firefox 103+ (backdrop-filter)
- Safari 9+ (backdrop-filter)
- Edge 17+ (backdrop-filter)

## File Structure

```
34282-zoom-in-tooltip-glassmorphism-sbh/
├── README.md      # This documentation file
├── demo.html      # Interactive demo page
└── style.css      # CSS styles for the component
```

## Related Issues

This contribution addresses Issue #34282 in the EaseMotion CSS repository.

## License

MIT License - Same as EaseMotion CSS project

---

**Contributor**: saidai-bhuvanesh  
**Issue**: #34282  
**Date**: 2026-07-04
