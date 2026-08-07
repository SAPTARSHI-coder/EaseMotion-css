# CSS Fade-In Drawer for E-Commerce Checkout Layouts

A premium, pure CSS-only interactive fade-in drawer component designed for modern e-commerce checkout pages. This implementation leverages advanced CSS properties to handle state changes, glassmorphism UI styles, responsiveness, keyboard accessibility, and reduced motion settings without any framework dependencies.

## Overview

The Fade-In Drawer demonstrates how to build modern e-commerce checkout components utilizing pure HTML5 and CSS3. Using the checkbox hack state controller, it provides a smooth fade-in overlay containing the order details, product summaries, and checkout actions.

## Features

- **Pure CSS State Management**: Uses a hidden checkbox controller (`#drawer-toggle`) to handle drawer visible/hidden states.
- **Vibrant Glassmorphism Design**: High-fidelity UI using `backdrop-filter` blur, transparent border strokes, elevated card surfaces, and custom radial glows.
- **Customizable CSS Variables**: Fully configurable colors, fonts, spacing, transitions, and border radius variables.
- **Smooth Interactive Fade-In**: Elegant fade-in and scale translation for the drawer and backdrop overlay.
- **Responsive Layout**: Adjusts seamlessly across desktop, tablet, and mobile device screen sizes.
- **Keyboard-Accessible**: Fully style-responsive focus visible outlines for seamless keyboard navigation.
- **Motion Reduction Support**: Adaptive styling for users with `prefers-reduced-motion` enabled.

## Folder Structure

```text
submissions/examples/fade-in-drawer-62500/
├── demo.html
├── style.css
└── README.md
```

## Usage

1. Open `demo.html` in any modern web browser.
2. Click the **Review Order Summary** button to fade in the drawer.
3. Click the close (`&times;`) button or anywhere on the backdrop to dismiss the drawer.

## CSS Variables

The styles can be customized by modifying the design tokens defined in the `:root` pseudo-class in `style.css`:

```css
:root {
  /* Color Palette */
  --bg-primary: #0a0b10;
  --bg-surface: rgba(22, 28, 45, 0.45);
  --bg-surface-elevated: rgba(30, 41, 59, 0.7);
  --primary: #8b5cf6;
  --primary-hover: #7c3aed;
  --primary-glow: rgba(139, 92, 246, 0.35);
  --success: #10b981;
  --success-glow: rgba(16, 185, 129, 0.25);
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --text-inverse: #ffffff;
  --border-color: rgba(255, 255, 255, 0.08);
  --border-focus: #a78bfa;
  --overlay-bg: rgba(5, 6, 10, 0.8);
  
  /* Glassmorphism Styles */
  --glass-bg: rgba(15, 23, 42, 0.65);
  --glass-border: rgba(255, 255, 255, 0.08);
  --glass-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  --glass-blur: 24px;
}
```

## Accessibility

- **Keyboard Support**: Key controls are interactively tabbable with highly visible `:focus-visible` outlines.
- **Aria attributes**: Proper usage of `role="dialog"`, `aria-modal="true"`, and labeling definitions (`aria-labelledby`, `aria-hidden`) ensures screen-reader compatibility.
- **Space/Enter Activation**: Includes fallback handlers to trigger click events when interactive labels receive space or enter keystrokes.

## Browser Compatibility

- Google Chrome (latest)
- Mozilla Firefox (latest)
- Apple Safari (latest)
- Microsoft Edge (latest)
