# Interactive Button Hover Animations

A lightweight collection of four reusable button hover animations built with pure HTML and CSS for EaseMotion CSS.

## Overview

This showcase demonstrates four independent hover effects that enhance button interactions without changing their functionality. Each animation is isolated, making it easy to reuse in different projects.

## Included Animations

### ✨ Icon Glide

The button icon smoothly slides a few pixels to the right while the button and text remain stationary.

### 🎯 Border Draw

The border animates around the button edges, creating a border-drawing effect on hover.

### 🌈 Animated Gradient

A colorful animated gradient transitions smoothly across the button background while hovering.

### 💡 Neon Glow

The button emits a subtle neon glow that highlights the call-to-action without overwhelming the interface.

---

## Features

- Pure HTML & CSS
- Uses EaseMotion utility classes
- Responsive layout
- Lightweight animations
- No JavaScript required
- Easy to customize
- Independent reusable effects

---

## Folder Structure

```
submissions/
└── examples/
    └── interactive-button-hover-animations/
        ├── demo.html
        ├── style.css
        └── README.md
```

---

## Usage

### Icon Glide

```html
<button class="btn icon-glide">
    Download
    <span class="icon">→</span>
</button>
```

### Border Draw

```html
<button class="btn border-draw">
    Border Draw
</button>
```

### Animated Gradient

```html
<button class="btn animated-gradient">
    Gradient Button
</button>
```

### Neon Glow

```html
<button class="btn neon-glow">
    Neon Glow
</button>
```

---

## Customization

The colors can be modified by updating the CSS variables in `style.css`.

```css
:root{

    --primary:#6366f1;
    --secondary:#8b5cf6;
    --accent:#ec4899;
    --success:#22c55e;

}
```

Animation durations, shadows, and gradients can also be adjusted independently for each button effect.

---

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

---

## Why it fits EaseMotion CSS

These hover effects follow the EaseMotion CSS philosophy by providing:

- Human-readable class names
- Smooth GPU-friendly animations
- Lightweight implementation
- Reusable UI patterns
- Animation-first design
- Zero JavaScript dependencies

Each animation can be used independently, allowing developers to choose the interaction style that best matches their interface.

---

## Live Preview

Open `demo.html` directly in a modern browser.

No build tools or installation are required.

---

## License

Created as an example submission for the EaseMotion CSS examples library.