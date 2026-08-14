# CSS Bounce-Pulse Hero Section for Glassmorphism UI Layouts

## Overview

The **CSS Bounce-Pulse Hero Section** is a modern landing page hero component built with pure HTML and CSS. It combines a glassmorphism-inspired interface with a subtle bounce-pulse animation to create an engaging first impression while maintaining excellent performance and accessibility.

---

## Features

- ✨ Pure HTML & CSS (No JavaScript required)
- 🪟 Modern glassmorphism design
- 💫 Smooth bounce-pulse animation
- 🌈 Decorative floating background elements
- 📱 Fully responsive across desktop, tablet, and mobile
- ♿ Accessible with `prefers-reduced-motion` support
- ⚡ Lightweight and easy to customize

---

## Usage

Include the HTML structure and the accompanying `style.css`.

```html
<section class="hero">
  <div class="glass-card">
    <span class="badge">✨ Pure CSS Hero</span>

    <h1>
      Build Beautiful Interfaces
      <span>with EaseMotion CSS</span>
    </h1>

    <p>
      Create elegant hero sections with smooth animations and
      glassmorphism styling.
    </p>

    <div class="hero-actions">
      <a href="#" class="btn btn-primary">Get Started</a>
      <a href="#" class="btn btn-secondary">Live Demo</a>
    </div>
  </div>
</section>
```

---

## Customization

The component uses CSS custom properties for easy customization.

| Variable | Description | Default |
|----------|-------------|---------|
| `--primary` | Primary accent color | `#8b5cf6` |
| `--secondary` | Secondary accent color | `#38bdf8` |
| `--glass` | Glass background | `rgba(255,255,255,0.12)` |
| `--border` | Glass border | `rgba(255,255,255,0.22)` |
| `--shadow` | Card shadow | `0 20px 45px rgba(0,0,0,.35)` |

Example:

```css
:root{
  --primary:#7c3aed;
  --secondary:#06b6d4;
}
```

---

## Responsive Behavior

- Desktop: Spacious hero layout with floating decorative elements.
- Tablet: Optimized spacing and typography.
- Mobile: Buttons stack vertically and layout adapts for smaller screens.

---

## Accessibility

- Responsive layout
- Keyboard-friendly buttons
- Supports `prefers-reduced-motion`
- High-contrast text for improved readability

---

## Why this fits EaseMotion CSS

This component showcases EaseMotion CSS's animation-first philosophy by combining elegant micro-animations, glassmorphism styling, responsive design, and accessibility into a lightweight, reusable hero section built entirely with HTML and CSS.

---

## Files

```
submissions/examples/bounce-pulse-hero-glass-sn/
├── demo.html
├── style.css
└── README.md
```

---

## Browser Support

- ✅ Chrome
- ✅ Firefox
- ✅ Edge
- ✅ Safari