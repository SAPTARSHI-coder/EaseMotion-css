# Ease Segmented Control Bar

## Overview

This submission demonstrates a responsive segmented control bar with smooth CSS-based animations. The active segment transitions using `transform` and `opacity`, while JavaScript simply toggles the active state by updating CSS classes.

The component is lightweight, customizable, and showcases how CSS transitions and custom properties can be used to build an interactive UI element.

---

## Features

- Responsive segmented control bar
- Smooth `transform` and `opacity` animations
- JavaScript-driven state toggle using `classList`
- Customizable with CSS variables
- Standalone implementation with no external dependencies

---

## CSS Custom Properties

The component can be customized using the following CSS variables:

| Variable | Description |
|----------|-------------|
| `--primary` | Primary accent color |
| `--bg` | Background color of the control |
| `--duration` | Animation duration |

Example:

```css
:root {
  --primary: #4f46e5;
  --bg: #f5f5f5;
  --duration: 300ms;
}
```

---

## Files

```
ease-segmented-control-bar-ij/
├── demo.html
├── style.css
└── README.md
```

---

## How to Use

1. Open `demo.html` in any modern web browser.
2. Click on the segmented control options.
3. Observe the animated transition between active segments.
4. Modify the CSS custom properties to customize colors and animation speed.

---

## Animation

The component uses:

- CSS `transform`
- CSS `opacity`
- CSS `transition`

JavaScript only updates the active state by toggling CSS classes. All visual animations are handled by CSS.

---

## Browser Support

Tested on modern browsers including:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

---

## Why It Fits EaseMotion CSS

This example follows the EaseMotion CSS philosophy of creating expressive, reusable UI components with smooth motion and readable structure. It demonstrates how CSS animations and transitions can be combined with minimal JavaScript to create an interactive, customizable segmented control.

---

## Related Issue

Closes #48217