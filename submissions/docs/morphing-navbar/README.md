# Morphing Navbar — Usage Showcase & Integration Guide

A fluid, responsive CSS navigation bar featuring liquid pill morphing transitions, glassmorphic backdrop filter effects, and pure CSS interactive states for modern web applications.

---

## 1. What does this do?
The **Morphing Navbar** provides an interactive header navigation experience with smooth morphing hover animations, dynamic pill active states, accessible dropdown submenus, and mobile menu toggles — built purely with HTML5 and CSS3.

## 2. How is it used?
Wrap your navigation items inside a `<nav class="morph-navbar">` element and apply standard `.nav-link` utility classes:

```html
<nav class="morph-navbar" aria-label="Main Navigation">
  <div class="nav-brand">
    <span class="brand-text">AppName</span>
  </div>

  <ul class="nav-menu">
    <li class="nav-item">
      <a href="#home" class="nav-link active">Home</a>
    </li>
    <li class="nav-item">
      <a href="#features" class="nav-link">Features</a>
    </li>
    <li class="nav-item">
      <a href="#docs" class="nav-link">Docs</a>
    </li>
  </ul>
</nav>
```

## 3. Why is it useful?
- **Zero JavaScript Overhead**: Complete interaction pipeline (hover states, dropdown menus, mobile navigation overlay) operates via pure CSS.
- **Glassmorphism Aesthetic**: Modern translucent backdrop filters (`backdrop-filter: blur(16px)`) with subtle border highlights.
- **Fluid Morphing Transitions**: Custom spring-like cubic-bezier curves (`cubic-bezier(0.34, 1.56, 0.64, 1)`) deliver tactile visual feedback.
- **Fully Accessible**: Enforces visible focus rings (`:focus-visible`), standard semantic HTML structure (`<nav>`, `<ul>`, `<a>`), and respects `prefers-reduced-motion`.

---

## Features

- **Fluid Pill Morphing**: Smooth active indicator styling with gradient fill and glow box-shadow.
- **Pure CSS Submenu Dropdown**: Triggered on hover and focus-within states with smooth opacity and scale transitions.
- **Responsive Mobile Overlay**: Pure CSS hamburger toggle using checkbox hack (`.nav-toggle:checked`).
- **CSS Custom Properties**: Fully themeable design tokens for colors, blur intensity, shadow radius, and transition timing.

---

## Folder Structure

```
submissions/docs/morphing-navbar/
├── demo.html    # Interactive browser showcase
├── style.css    # Morphing Navbar component styles & custom tokens
└── README.md    # Component documentation & usage guide
```

---

## CSS Custom Properties

| Custom Property | Default Value | Description |
|---|---|---|
| `--morph-nav-bg` | `rgba(255, 255, 255, 0.75)` | Navigation bar glass background |
| `--morph-nav-border` | `rgba(255, 255, 255, 0.4)` | Glass border highlight color |
| `--morph-nav-shadow` | `0 10px 30px rgba(0, 0, 0, 0.08)` | Outer elevation shadow |
| `--morph-text` | `#2d3748` | Default link text color |
| `--morph-text-hover` | `#4f46e5` | Link text hover color |
| `--morph-active-bg` | `linear-gradient(...)` | Active pill background gradient |
| `--morph-active-text` | `#ffffff` | Text color on active pill |
| `--morph-transition` | `all 0.4s cubic-bezier(...)` | Morphing spring transition curve |

---

## Accessibility & Reduced Motion

- **Keyboard Focus**: Includes high-contrast focus rings for keyboard users (`:focus-visible`).
- **Screen Reader Friendly**: Uses semantic HTML navigation structures (`<nav>`, `<ul>`, `<li>`, `<a>`).
- **Reduced Motion Support**: Automatically disables all spring transitions and morphing animations when `prefers-reduced-motion: reduce` is enabled.

---

## Browser Compatibility

- Chrome / Edge 76+ (Supports backdrop-filter)
- Firefox 103+ (Supports backdrop-filter natively)
- Safari 9+ (Requires `-webkit-backdrop-filter`)

---

*Part of the EaseMotion CSS curated open-source animation ecosystem.*
