# Animated Navigation Menu System

This is a self-contained example demonstrating how to create a modern, animated navigation menu system with desktop navbar, mobile hamburger menu, dropdown menus, and scroll-triggered sticky behavior, seamlessly integrated with **EaseMotion CSS** utility classes.

## Features
- 🎨 **Smooth Animations:** Buttery-smooth transitions for all menu interactions.
- 📱 **Mobile Responsive:** Hamburger menu with slide-in animation and submenu support.
- 🎯 **Dropdown Menus:** Multi-level dropdown menus with fade and slide animations.
- ⚡ **Sticky on Scroll:** Navbar becomes sticky with background blur when scrolling.
- ✨ **Hover Effects:** Underline animations, color transitions, and transform effects.
- ♿ **Fully Accessible:** Proper ARIA labels, keyboard navigation, and reduced motion support.
- 🎬 **Logo Animation:** Pulsing logo icon with gradient text.
- 🚫 **Minimal JavaScript:** Only for mobile menu toggle and scroll detection.

## How to Use
1. Ensure the EaseMotion CSS CDN is linked in your `<head>`.
2. Link the `style.css` file.
3. Copy the navbar HTML structure.
4. Customize menu items, links, and dropdown content.
5. Include the JavaScript at the bottom for mobile menu and scroll behavior.

## HTML Structure

### Desktop Navbar
```html
<nav class="navbar" id="navbar">
  <div class="navbar__container">
    <a href="#" class="navbar__logo">
      <span class="logo-icon">⚡</span>
      <span class="logo-text">Brand</span>
    </a>

    <ul class="navbar__menu">
      <li class="navbar__item">
        <a href="#" class="navbar__link">Home</a>
      </li>
      <li class="navbar__item navbar__item--dropdown">
        <a href="#" class="navbar__link">
          Products
          <span class="dropdown-arrow">▾</span>
        </a>
        <ul class="dropdown-menu">
          <li><a href="#" class="dropdown-link">Item 1</a></li>
          <li><a href="#" class="dropdown-link">Item 2</a></li>
        </ul>
      </li>
    </ul>

    <div class="navbar__cta">
      <a href="#" class="btn btn--ghost">Sign In</a>
      <a href="#" class="btn btn--primary">Get Started</a>
    </div>

    <button class="navbar__toggle" id="mobileToggle" aria-label="Toggle menu">
      <span class="toggle-bar"></span>
      <span class="toggle-bar"></span>
      <span class="toggle-bar"></span>
    </button>
  </div>
</nav>