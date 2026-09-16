# Dynamic Treeview Menu with Neumorphism

A responsive, accessible, pure CSS treeview-style navigation component
with neumorphism styling.

## Features

- Zero JavaScript dependencies
- Native HTML `<details>` and `<summary>` disclosure behavior
- Neumorphic raised and inset surfaces
- EaseMotion CSS variables and design tokens
- Smooth state transition animations
- Responsive mobile, tablet, and desktop layout
- Keyboard-accessible native controls
- Visible focus states
- `prefers-reduced-motion` support
- No build step required

## Preview

The component displays a project explorer with expandable folders
and nested files.

## Files

- `demo.html` — Standalone component demo
- `style.css` — Component styles and design tokens

## Usage

Open `demo.html` directly in a browser.

To integrate the component into another project:

1. Copy the treeview markup from `demo.html`.
2. Include `style.css`.
3. Replace the example folder and file names with your own content.

## Accessibility

The component uses native disclosure elements, which provide
keyboard interaction and expanded/collapsed semantics without
JavaScript.

Focus indicators are preserved, and animations are reduced when
the user enables reduced motion in their operating system.

## Responsive Behavior

- Mobile: Compact layout with larger touch targets
- Tablet: Flexible card width
- Desktop: Centered neumorphic card with spacious layout

## Browser Support

The component uses broadly supported HTML and CSS features:

- CSS custom properties
- CSS Grid
- Media queries
- `<details>`
- `<summary>`
- CSS animations
- `prefers-reduced-motion`

Verify the final integration in current versions of Chrome, Firefox,
Safari, and Edge.

## Suggested Branch

feat/dynamic-treeview-neumorphism
