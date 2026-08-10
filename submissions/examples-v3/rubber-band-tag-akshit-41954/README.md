# Rubber Band Tag

A modern **Rubber Band Tag** component built for the **EaseMotion CSS** library, inspired by contemporary Travel App interfaces. The component features animated travel tags with a rubber-band stretch effect, glassmorphism styling, glowing borders, and smooth hover interactions using **pure CSS**.

## Features

- ✈️ Pure CSS implementation (No JavaScript required)
- 🎨 Modern travel app inspired design
- 🎯 Rubber-band stretch animation
- ✨ Floating idle animation
- 🌟 Animated glowing border
- 🪟 Glassmorphism styling
- 📱 Fully responsive layout
- ♿ Supports `prefers-reduced-motion`
- 🎨 Easily customizable using CSS variables

## Folder Structure

```text
rubber-band-tag-akshit-41954/
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

Modify the CSS variables to match your application's theme.

```css
:root {
  --bg-dark: #0f172a;
  --bg-light: #1e293b;
  --glass: rgba(255,255,255,.08);
  --border: rgba(255,255,255,.12);
  --text: #ffffff;
  --muted: #cbd5e1;
}
```

## Animations

This component combines multiple CSS animations:

- Rubber-band stretch animation
- Floating idle animation
- Animated glowing border
- Shadow pulse animation
- Hover lift interaction
- Icon rotation on hover

## Accessibility

- Supports `prefers-reduced-motion`
- Semantic HTML structure
- High-contrast text
- Keyboard-friendly layout
- Responsive design for all screen sizes

## Responsive Design

The component automatically adapts to smaller screens by:

- Wrapping tags onto multiple rows
- Centering content
- Maintaining consistent spacing
- Preserving readability across devices

## Browser Support

Compatible with modern browsers supporting:

- CSS Variables
- Flexbox
- CSS Animations
- Backdrop Filter
- Media Queries

## Author

Akshit Tyagi