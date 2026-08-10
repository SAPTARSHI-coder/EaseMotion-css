
# Wobble Diff Viewer

A modern **Wobble Diff Viewer** component for the **EaseMotion CSS** library, inspired by Medical Dashboard interfaces. This component visually compares two states (Before vs After) using animated comparison cards, a wobbling divider, glassmorphism styling, and smooth CSS-only animations.

## Features

- 🩺 Medical dashboard-inspired comparison layout
- 🎨 Pure CSS implementation (No JavaScript required)
- 🔄 Animated wobble effect
- ✨ Floating comparison cards
- 🌟 Glowing animated border
- 📊 Before vs After comparison panels
- 📱 Fully responsive design
- ♿ Accessible with `prefers-reduced-motion` support
- 🎯 Easy customization using CSS variables

## Folder Structure

```text
wobble-diff-viewer-akshit-41953/
├── demo.html
├── style.css
└── README.md
```

## Usage

1. Include the EaseMotion CSS library.

```html
<link rel="stylesheet" href="../../../dist/easemotion.css">
```

2. Include the component stylesheet.

```html
<link rel="stylesheet" href="style.css">
```

3. Copy the component markup from `demo.html` into your project.

## Customization

Modify the CSS variables to match your project's theme.

```css
:root {
  --viewer-width: 950px;
  --radius: 20px;
  --before: #ef4444;
  --after: #22c55e;
  --bg: rgba(22, 30, 45, 0.82);
  --text: #ffffff;
  --muted: #cfd8e3;
}
```

## Animations

The component combines several CSS animations:

- Wobble animation for the main viewer
- Floating comparison cards
- Animated glowing border
- Pulsing divider
- Wobbling comparison icon
- Scan pulse animation
- Hover lift interaction

## Accessibility

- Supports `prefers-reduced-motion`
- Semantic HTML structure
- High-contrast text for readability
- Responsive layout for desktop and mobile devices

## Responsive Design

The component automatically adapts to smaller screens by:

- Stacking the comparison panels vertically
- Converting the divider to a horizontal layout
- Scaling the scan placeholders
- Maintaining comfortable spacing and readability

## Browser Support

Compatible with modern browsers supporting:

- CSS Variables
- Flexbox
- CSS Animations
- Backdrop Filter
- Media Queries

## Author

Akshit Tyagi