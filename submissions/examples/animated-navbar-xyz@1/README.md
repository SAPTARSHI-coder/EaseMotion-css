# Animated Navigation Menu (`ease-navbar-xyz`)

A zero-dependency, CSS-only animated navigation menu component designed for the **EaseMotion CSS** framework. Perfect for websites and applications with smooth hamburger animations, dropdowns, and mobile menu slides.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using checkbox hack for mobile menu toggle.
- **Animation-First**: Smooth hamburger-to-X transformation, dropdown slide-in, and mobile menu slide using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-normal`, `--ease-out`, and color tokens for seamless theming.
- **Multiple Layouts**: Basic (left-aligned), centered, and mega menu variants.
- **Dropdown Support**: Single-level dropdown menus with smooth fade/slide animations.
- **Mega Menu**: Multi-column mega menu for complex navigation structures.
- **Mobile Responsive**: Hamburger menu with slide-in mobile navigation.
- **Accessible**: Proper semantic HTML structure and keyboard navigation support.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Basic Navbar
```html
<nav class="ease-navbar-xyz">
  <div class="ease-navbar-xyz-brand">
    <span class="ease-navbar-xyz-logo">🚀</span>
    <span class="ease-navbar-xyz-brand-text">Brand</span>
  </div>
  
  <input type="checkbox" id="mobile-toggle" class="ease-navbar-xyz-toggle">
  <label for="mobile-toggle" class="ease-navbar-xyz-hamburger">
    <span class="ease-navbar-xyz-hamburger-line"></span>
    <span class="ease-navbar-xyz-hamburger-line"></span>
    <span class="ease-navbar-xyz-hamburger-line"></span>
  </label>
  
  <ul class="ease-navbar-xyz-menu">
    <li class="ease-navbar-xyz-item">
      <a href="#" class="ease-navbar-xyz-link">Home</a>
    </li>
    <li class="ease-navbar-xyz-item ease-navbar-xyz-dropdown">
      <a href="#" class="ease-navbar-xyz-link">
        Products
        <span class="ease-navbar-xyz-arrow"></span>
      </a>
      <ul class="ease-navbar-xyz-dropdown-menu">
        <li><a href="#" class="ease-navbar-xyz-dropdown-link">Item 1</a></li>
        <li><a href="#" class="ease-navbar-xyz-dropdown-link">Item 2</a></li>
      </ul>
    </li>
  </ul>
</nav>