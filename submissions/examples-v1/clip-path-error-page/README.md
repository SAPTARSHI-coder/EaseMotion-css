# Clip Path Error Page

A responsive, pure CSS **Clip Path Error Page** featuring a smooth reveal animation inspired by modern corporate websites and SaaS dashboards.

## Features

- 🎨 Pure CSS (no JavaScript)
- ✨ Clip-path reveal animation
- 📱 Fully responsive layout
- ♿ Keyboard accessible buttons
- 🎯 Uses EaseMotion CSS variables with fallback values
- 🌐 Modern corporate and dashboard-inspired design
- 🎞️ Includes subtle floating background animations
- 🛡️ Supports `prefers-reduced-motion`

## Files

```text
clip-path-error-page/
├── demo.html
├── style.css
└── README.md
```

## Preview

The demo includes:

- Animated clip-path card reveal
- Large 404 error heading
- Error description
- Primary "Go Home" button
- Secondary "Contact Support" button
- Responsive layout for desktop and mobile devices

## Customization

You can easily customize the component using CSS custom properties.

```css
:root {
  --error-bg: #f8fafc;
  --error-card-bg: rgba(255, 255, 255, 0.9);
  --error-primary: #3b82f6;
  --error-text: #0f172a;
  --error-radius: 20px;
  --error-duration: 900ms;
}
```

## Accessibility

- Uses semantic HTML (`main`, `section`, headings, links)
- Keyboard-friendly focus styles with `:focus-visible`
- Responsive across different screen sizes
- Honors `prefers-reduced-motion`

## Browser Support

Compatible with modern browsers supporting:

- CSS Custom Properties
- CSS Clip Path
- CSS Keyframes
- Flexbox
- CSS Grid
- `prefers-reduced-motion`

## Why it fits EaseMotion CSS

This component follows EaseMotion CSS's animation-first philosophy by providing a reusable, lightweight error page with expressive motion using only CSS. The clip-path reveal animation and configurable design tokens make it easy to adapt into the EaseMotion ecosystem while maintaining accessibility and responsiveness.