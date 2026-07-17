# Magnetic Button Attract Effect

A modern interactive button animation that subtly moves toward the user's cursor position, creating a magnetic attraction effect.

## Features

- Smooth cursor attraction effect
- Modern gradient styling
- Lightweight implementation
- Customizable intensity using CSS variables
- Responsive design
- Accessibility-friendly
- Supports reduced-motion preferences

## Folder Structure

```text
u-magnetic-button-attract-16811/
├── demo.html
├── style.css
└── README.md
```

## Customization

Change the magnetic pull strength:

```css
:root {
  --magnetic-distance: 20px;
}
```

Lower values create subtle movement.

Higher values create stronger attraction.

## Accessibility

The demo includes:

```css
@media (prefers-reduced-motion: reduce)
```

to disable animation for users who prefer reduced motion.

## Usage

1. Open `demo.html`.
2. Move the cursor over the button.
3. Observe the magnetic attraction behavior.

## Browser Support

- Chrome
- Edge
- Firefox
- Safari

## Issue

Created for EaseMotion CSS Issue #16811.