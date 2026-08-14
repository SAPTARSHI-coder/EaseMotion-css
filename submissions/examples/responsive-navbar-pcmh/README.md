# Responsive Navbar — Issue #7520

## Overview

Sticky responsive navbar with logo, nav links, dropdown submenus, CTA button, and mobile hamburger toggle.

## Features

- Sticky header on scroll
- Logo + brand text
- Dropdown submenus on hover
- CTA button with primary color
- Hamburger toggle on mobile (768px)
- Mobile vertical menu

## Usage

```html
<nav class="ease-navbar">
  <a href="#" class="ease-navbar-brand">Brand</a>
  <button class="ease-navbar-toggle">☰</button>
  <ul class="ease-navbar-nav">
    <li><a href="#">Home</a></li>
    <li class="ease-navbar-dropdown">
      <a href="#">Services ▾</a>
      <div class="ease-navbar-dropdown-content">
        <a href="#">Web Design</a>
      </div>
    </li>
    <li><a href="#" class="ease-navbar-cta">Get Started</a></li>
  </ul>
</nav>
```

## Files

- `demo.html` — Navbar with dropdown, CTA, hero section
- `style.css` — Navbar layout, dropdown, responsive breakpoint
- `README.md` — This documentation
