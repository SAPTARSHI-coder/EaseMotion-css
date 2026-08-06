# Particle Toast

A modern **Particle Toast** component built for the **EaseMotion CSS** library, inspired by contemporary SaaS dashboard interfaces. The component features a frosted glass notification card with animated glowing borders, floating particle effects, and smooth motion—all implemented using **pure CSS**.

## Features

- 🎉 Pure CSS implementation (No JavaScript required)
- ✨ Animated floating particle effects
- 💎 Glassmorphism design
- 🌟 Glowing animated border
- 🚀 Smooth slide-in animation
- 🎈 Floating idle animation
- 📱 Fully responsive layout
- ♿ Accessible with `prefers-reduced-motion` support
- 🎨 Easy customization using CSS variables

## Folder Structure

```text
particle-toast-akshit-41937/
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

3. Copy the toast markup from `demo.html` into your project.

## Customization

The component exposes several CSS variables that can be modified.

```css
:root {
  --toast-width: 420px;
  --toast-radius: 18px;
  --success: #3ddc84;
  --bg: rgba(22, 28, 45, 0.82);
  --text: #ffffff;
  --muted: #cfd8e3;
}
```

## Animations

This component includes multiple CSS animations:

- Slide-in entrance
- Floating idle motion
- Animated glowing border
- Rising particle effects

## Accessibility

- Supports `prefers-reduced-motion`
- Semantic HTML structure
- Accessible close button with `aria-label`
- High contrast text for readability

## Responsive Design

The layout automatically adapts for smaller screens by:

- Reducing toast width
- Scaling icon size
- Adjusting typography
- Maintaining proper spacing

## Browser Support

Works in all modern browsers that support:

- CSS Variables
- Flexbox
- Backdrop Filter
- CSS Animations
- Media Queries

## Author

Akshit Tyagi