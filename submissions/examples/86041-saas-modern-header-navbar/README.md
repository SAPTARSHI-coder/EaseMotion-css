# SaaS Modern Header Navbar Menu

Responsive documentation and example for a modern SaaS header/navbar layout.

## Features

- Responsive desktop, tablet and mobile layouts
- Navigation links
- Mobile menu toggle
- Custom CSS properties
- Keyboard-accessible navigation
- Visible focus states
- Reduced-motion support

## HTML Usage

```html
<header class="saas-header">
  <a href="#" class="brand">CloudFlow</a>

  <button
    class="menu-toggle"
    aria-label="Toggle navigation"
    aria-expanded="false">
    ☰
  </button>

  <nav class="navbar" aria-label="Main navigation">
    <a href="#features">Features</a>
    <a href="#pricing">Pricing</a>
    <a href="#solutions">Solutions</a>
  </nav>

  <a href="#signup" class="cta">Get Started</a>
</header>