# SaaS Modern Header Navbar Menu - Accessibility Setup

This example documents an accessible SaaS-style header and responsive navigation menu.

## Features

- Semantic header and navigation elements
- Responsive desktop, tablet and mobile layout
- Keyboard-friendly navigation
- Visible focus indicators
- Accessible mobile menu button
- ARIA state management
- CSS custom property overrides
- Reduced-motion support

## HTML Structure

```html
<header class="saas-header">
  <a href="#" class="brand">CloudFlow</a>

  <button
    class="menu-toggle"
    type="button"
    aria-label="Open navigation menu"
    aria-expanded="false"
    aria-controls="main-navigation">
    ☰
  </button>

  <nav id="main-navigation" class="navbar" aria-label="Main navigation">
    <a href="#features">Features</a>
    <a href="#pricing">Pricing</a>
    <a href="#solutions">Solutions</a>
  </nav>
</header>