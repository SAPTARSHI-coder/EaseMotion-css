# CSS Elastic-Slide Dropdown for Glassmorphism UI Layouts

## Overview

The **CSS Elastic-Slide Dropdown** is a modern dropdown menu built with pure HTML and CSS. It combines a glassmorphism-inspired interface with smooth elastic slide animations to create an elegant, responsive navigation component suitable for modern web applications.

---

## Features

- ✨ Pure HTML & CSS (No JavaScript required)
- 🎨 Glassmorphism-inspired design
- 🌊 Smooth elastic slide animation
- 📱 Fully responsive layout
- ♿ Accessible keyboard focus states
- ⚡ Lightweight and easy to customize
- 🎯 Supports `prefers-reduced-motion`

---

## Usage

Include the HTML structure and the accompanying `style.css`.

```html
<div class="glass-dropdown">
  <button class="dropdown-toggle">
    Menu
  </button>

  <div class="dropdown-menu">
    <a href="#">Dashboard</a>
    <a href="#">Profile</a>
    <a href="#">Settings</a>
    <a href="#">Logout</a>
  </div>
</div>
```

Hover or focus on the dropdown button to reveal the animated menu.

---

## Customization

The component can be customized using CSS custom properties.

| Variable | Description | Default |
|----------|-------------|---------|
| `--dropdown-bg` | Dropdown background | `rgba(255,255,255,.14)` |
| `--dropdown-border` | Border color | `rgba(255,255,255,.25)` |
| `--dropdown-radius` | Border radius | `18px` |
| `--dropdown-shadow` | Shadow effect | `0 18px 40px rgba(0,0,0,.25)` |
| `--transition-speed` | Animation duration | `0.4s` |
| `--accent-color` | Hover highlight | `#7c5cff` |

Example:

```css
:root{
  --accent-color:#4f46e5;
  --dropdown-radius:20px;
}
```

---

## Responsive Behavior

- Desktop: Full dropdown with elastic slide animation.
- Tablet: Maintains spacing and proportions.
- Mobile: Automatically adapts to smaller widths while preserving usability.

---

## Accessibility

- Semantic HTML structure
- Visible keyboard focus states
- High-contrast text
- Supports `prefers-reduced-motion` for users who prefer reduced animations

---

## Why this fits EaseMotion CSS

This component aligns with EaseMotion CSS by showcasing smooth, reusable micro-interactions using only CSS. The elastic animation, clean styling, and lightweight implementation make it suitable as a reusable UI example for dashboards, portfolios, admin panels, and modern websites.

---

## Files

```
submissions/examples/css-elastic-slide-dropdown-glassmorphism-sn/
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