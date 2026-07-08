# ease-magnetic

A premium cursor-aware hover interaction that creates a subtle magnetic attraction effect between the cursor and UI elements.

## Overview

ease-magnetic introduces cursor-responsive motion to EaseMotion CSS. When a user hovers over an element, it gently moves toward the cursor position, creating a tactile and interactive experience commonly seen in modern portfolios, landing pages, and premium interfaces.

The effect uses lightweight JavaScript for cursor tracking and CSS transitions for smooth motion.

---

## Features

- Cursor-aware magnetic attraction
- Smooth movement toward cursor position
- Smooth return to original position on mouse leave
- Works on buttons, cards, links, icons, and custom elements
- Customizable attraction strength using CSS variables
- Customizable animation speed
- Lightweight implementation
- Supports `prefers-reduced-motion`
- No external dependencies

---

## Usage

```html
<button class="magnetic">
    Hover Me
</button>

<div class="magnetic">
    Magnetic Card
</div>

<a href="#" class="magnetic">
    Get Started
</a>
```

---

## Customization

```css
:root {
    --magnetic-strength: 0.35;
    --magnetic-speed: 220ms;
}
```

| Variable | Description |
|-----------|------------|
| `--magnetic-strength` | Controls how strongly the element follows the cursor |
| `--magnetic-speed` | Controls transition speed |

---

## Why It Fits EaseMotion CSS

EaseMotion CSS focuses on expressive, animation-first interactions that are easy to use and visually engaging.

ease-magnetic extends the framework with cursor-aware motion, adding a new category of interaction beyond traditional hover and entrance animations. The effect feels modern, playful, and responsive while remaining lightweight and beginner-friendly.

---

## Accessibility

Supports reduced-motion preferences:

```css
@media (prefers-reduced-motion: reduce)
```

Users who prefer reduced motion will see the effect disabled automatically.

---

## Browser Support

Tested in:

- Chrome
- Edge
- Firefox

Compatible with all modern browsers supporting:

- CSS Variables
- CSS Transforms
- JavaScript Event Listeners

---

## Demo

Open `demo.html` directly in any browser. No build tools, dependencies, or local server are required.
