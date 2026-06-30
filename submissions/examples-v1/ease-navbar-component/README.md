# EaseMotion Navbar Component

A modern, highly customizable responsive Navbar Component for EaseMotion CSS. This component provides a robust navigation system for websites and applications, supporting multiple styles and responsive behaviors including mobile hamburger menus and smooth dropdown animations.

## Overview

The Navbar Component is designed to be fully responsive out-of-the-box. It uses flexbox for layout alignment and CSS transitions for dropdowns and mobile menus. A tiny bit of JavaScript is used to toggle the mobile menu state.

## Features

- **Fully Responsive**: Adapts gracefully to all screen sizes. Transforms into a slide-down hamburger menu on mobile.
- **Smooth Dropdown Animations**: CSS-only dropdowns that fade and slide in on hover or focus.
- **Hover Micro-Interactions**: Features an animated underline effect for active and hovered links.
- **Sticky Support**: Built-in class to easily make the navbar stick to the top of the viewport.
- **Animated Hamburger Toggle**: The mobile toggle button transforms into an "X" when opened.
- **No Dependencies**: Relies solely on HTML, CSS, and vanilla JS toggling.

## Variants

1. **Simple Navbar** (`ease-navbar`): The standard, clean white navbar with soft shadows.
2. **Sticky Navbar** (`ease-navbar-sticky`): Sticks to the top of the viewport when scrolling.
3. **Glassmorphism Navbar** (`ease-navbar-glass`): Features a translucent, blurred background.
4. **Gradient Navbar** (`ease-navbar-gradient`): A vibrant, modern gradient background.
5. **Minimal Navbar** (`ease-navbar-minimal`): Flat design with no shadows, just a clean bottom border.
6. **Dashboard Navbar** (`ease-navbar-dashboard`): Dark theme layout optimized for SaaS admin panels.
7. **Centered Logo Navbar** (`ease-navbar-center`): Perfect for e-commerce, placing the logo in the absolute center.

## Usage Example

### HTML Structure

```html
<nav class="ease-navbar" id="main-nav">
  <!-- Brand / Logo -->
  <a href="#" class="ease-nav-brand">BrandLogo</a>

  <!-- Mobile Toggle -->
  <button class="ease-nav-toggle" onclick="toggleNav('main-nav')">
    <span></span><span></span><span></span>
  </button>

  <!-- Links -->
  <ul class="ease-nav-menu">
    <li class="ease-nav-item">
      <a href="#" class="ease-nav-link active">Home</a>
    </li>
    <li class="ease-nav-item">
      <a href="#" class="ease-nav-link">Dropdown ▾</a>
      <div class="ease-nav-dropdown-content">
        <a href="#" class="ease-nav-dropdown-link">Option 1</a>
        <a href="#" class="ease-nav-dropdown-link">Option 2</a>
      </div>
    </li>
  </ul>

  <!-- Actions (Buttons) -->
  <div class="ease-nav-actions">
    <a href="#" class="ease-btn ease-btn-primary">Sign up</a>
  </div>
</nav>
```

### JavaScript Toggle Function

Add this script to allow the mobile menu to open and close.

```javascript
function toggleNav(navId) {
  const nav = document.getElementById(navId);
  nav.classList.toggle("mobile-open");
}
```

## Customization

You can easily adjust colors, heights, and spacing by overriding the variables in your CSS `:root`:

```css
:root {
  --ease-nav-bg: #ffffff;
  --ease-nav-text: #374151;
  --ease-nav-hover: #2563eb;
  --ease-nav-height: 64px;
  /* Add overrides here */
}
```
