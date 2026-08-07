# Swirl Select (Exit Animation)

A lightweight CSS animation that adds a smooth swirl exit effect to a custom select/dropdown menu.

---

## Overview

This component demonstrates a clean exit animation for a dropdown menu using only CSS animations and a small amount of JavaScript for toggling classes.

When the dropdown closes, it gently:

- Rotates slightly
- Scales down
- Moves upward
- Fades out
- Applies a subtle blur before disappearing

The animation is designed to feel smooth and modern without being distracting.

---

## Features

- ✨ Smooth swirl exit animation
- 🎨 Pure CSS animation effects
- ⚡ Lightweight and easy to customize
- ♿ Supports `prefers-reduced-motion`
- 📱 Responsive layout
- 🎯 Beginner-friendly implementation
- 🚫 No external libraries required

---

## Files Included

```
feature-swirl-select-example-ag/
│── demo.html
│── style.css
│── README.md
```

---

## How to Use

1. Copy the HTML structure into your project.
2. Include `style.css`.
3. Toggle the animation classes using JavaScript.

Example:

```html
<div class="ease-swirl-demo-ag">
    ...
</div>
```

---

## Animation Flow

### Opening

The dropdown:

- Fades into view
- Slightly rotates into position
- Scales from 85% to 100%
- Removes the blur
- Slides gently downward

### Closing (Swirl Exit)

The dropdown:

- Rotates while shrinking
- Moves upward
- Gradually fades out
- Adds a soft blur
- Becomes hidden after the animation completes

---

## Customization

You can easily customize:

- Animation duration
- Rotation amount
- Scale values
- Blur intensity
- Colors
- Border radius
- Shadow
- Timing function

All values are defined in `style.css`.

---

## Accessibility

This example includes accessibility considerations:

- Supports `prefers-reduced-motion`
- Uses semantic button interactions
- Keeps animations short and non-intrusive
- Keyboard navigation can be added easily

---

## Browser Compatibility

Tested in:

- ✅ Chrome
- ✅ Firefox
- ✅ Edge
- ✅ Safari

---

## Why It Fits EaseMotion CSS

This example follows the EaseMotion philosophy by providing:

- Human-readable class names
- Lightweight CSS
- Smooth, reusable animations
- Beginner-friendly structure
- Easy integration into existing projects
- No dependencies or build tools

---

## Use Cases

This animation works well for:

- Custom select menus
- Profile dropdowns
- Navigation menus
- Settings panels
- Filter menus
- Action menus
- Dashboard interfaces

---

## Demo

Open `demo.html` directly in any modern browser.

No server or build process is required.

---

## Notes

- Built using HTML, CSS, and minimal JavaScript.
- Designed as a standalone EaseMotion CSS example.
- Easy to extend or integrate into larger UI components.