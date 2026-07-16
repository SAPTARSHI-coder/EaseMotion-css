# Slide-Up Tooltip - Responsive Dashboard Layouts

A pure CSS animated tooltip component featuring a smooth slide-up interaction transition, designed specifically for responsive dashboard layouts. This component provides clean, professional animations that work seamlessly across different screen sizes and integrate perfectly with dashboard interfaces.

## Overview

This contribution implements a high-quality CSS tooltip with slide-up animation effects, following the EaseMotion CSS contribution guidelines. The component is designed to complement dashboard aesthetics with its clean styling and smooth slide animations that work flawlessly on both desktop and mobile devices.

## Features

- **Slide-Up Animation**: Smooth vertical slide animation from below
- **Dashboard Theme**: Clean, professional styling optimized for dashboard interfaces
- **Multiple Directions**: Supports slide animations from all 4 positions (top, bottom, left, right)
- **CSS Custom Properties**: Fully customizable via CSS variables for timing, easing, and colors
- **Accessibility**: Keyboard accessible and respects `prefers-reduced-motion`
- **Responsive**: Optimized for all viewport sizes including mobile dashboards
- **Zero JavaScript**: Pure CSS implementation with no dependencies
- **Cross-Browser**: Works in all modern browsers

## Design Philosophy

The slide-up tooltip is designed to create a clean, professional user experience suitable for dashboard interfaces. The animation uses smooth translateY transforms to create a natural slide motion that feels responsive and modern, making it ideal for data-heavy applications and admin panels.

## Technical Implementation

The component utilizes advanced CSS features including CSS transforms with translateY animations, CSS custom properties for easy customization, pseudo-elements for tooltip content, CSS transitions for smooth animations, and media queries for responsive design.

## Preview

Open `demo.html` in your browser to see the slide-up tooltip in action with different position variants.

## Usage

```html
<!-- Slide-Up Tooltip -->
<span class="dashboard-tooltip top" data-tooltip="Your message">Hover Me</span>
```

## CSS Custom Properties

```css
--dashboard-tooltip-duration: 0.25s;
--dashboard-tooltip-easing: ease-out;
--dashboard-tooltip-bg: #1f2937;
--dashboard-tooltip-text: #f9fafb;
--dashboard-tooltip-radius: 8px;
```

## Accessibility

- Keyboard Navigation via focus-within
- Reduced Motion support via prefers-reduced-motion
- Proper color contrast ratios

## Related Issue

This contribution addresses Issue #34272 in the EaseMotion CSS repository.

---

**Contributor**: saidai-bhuvanesh  
**Issue**: #34272  
**Date**: 2026-07-04
