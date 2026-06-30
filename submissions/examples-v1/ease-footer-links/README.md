# EaseMotion CSS - Footer Quick Links Component

A modern, highly responsive, and premium footer component featuring smooth glowing hover effects, hover transitions, social linkages, and optimized mobile-first layouts.

## Features

- **Responsive Grid Layout**: 4-column layout on widescreen desktops, automatically scaling down to a clean stacked list format on small viewports and mobile devices.
- **Link Glow Animation**: Micro-interactive glowing transitions on text link hovers matching the modern dark aesthetic of EaseMotion CSS.
- **Social Media Integration**: High-contrast, accessibility-ready SVG social links with hover levitation and glow animations.
- **Newsletter Subscription**: Inline form layout designed using clean Flexbox styles.

## Class Usage

The component is composed using the following semantic classes:

- `.ease-footer-links`: The full-width outer container with a subtle upper border gradient and dark grey background.
- `.ease-footer-container`: Centered grid layout aligning sections horizontally.
- `.ease-footer-section`: Component section blocks wrapper for individual columns.
- `.ease-footer-title`: Clean uppercase headings with an animated bottom accent-line indicator.
- `.ease-footer-link`: Navigational links featuring transition offsets (`translateX`) and text-shadow glow.
- `.ease-footer-social`: Rounded circle social links with background transitions.
- `.ease-footer-bottom`: Footer bottom strip holding copyright details and secondary links.

## Customization Guide

You can easily adapt the footer's theme using CSS variables defined in `:root`:

```css
:root {
  --ease-footer-bg: #121214; /* Background color */
  --ease-footer-text: #a1a1aa; /* Paragraph/Link color */
  --ease-footer-heading: #f4f4f5; /* Headings and Titles */
  --ease-footer-accent: #6366f1; /* Accent and Hover colors */
  --ease-footer-accent-glow: rgba(99, 102, 241, 0.4); /* Glow shadow color */
}
```

## Accessibility Notes

- Highly semantic HTML structure using `<footer>`, `<main>`, `<nav>`, `<input>`, `<button>`, and `<ul>` elements.
- Clean labeling utilizing `aria-label` attributes on every section column to ensure descriptive screen reader navigation.
- Focus trapping support for screen readers, and clear button/link labeling.
- Enhanced contrast levels matching WCAG standards on dark theme viewports.

## Responsive Behavior

- **Desktop (>992px)**: Clean 4-column grid.
- **Tablet (768px - 992px)**: Re-arranges into a balanced 2x2 grid layout.
- **Mobile (<768px)**: Standard stacked block configuration with full-width columns to maximize finger tap areas.
