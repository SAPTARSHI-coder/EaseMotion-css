# Ease Navbar Component

## What does this do?

A responsive, animated navigation bar component with smooth hover effects, active link indicators, mobile hamburger menu, and scroll-based active state updates.

## How is it used?

```html
<nav class="navbar">
  <div class="navbar-container">
    <a href="#" class="navbar-logo">
      <span class="logo-icon">⚡</span> Your Brand
    </a>

    <button class="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <ul class="nav-links">
      <li><a href="#home" class="nav-link active">Home</a></li>
      <li><a href="#about" class="nav-link">About</a></li>
      <li><a href="#services" class="nav-link">Services</a></li>
      <li><a href="#contact" class="nav-link">Contact</a></li>
    </ul>
  </div>
</nav>
```

### Key Features:

- **Responsive Design**: Automatically adapts to mobile with a hamburger menu
- **Smooth Animations**: Underline indicators animate on hover and active states
- **Mobile Menu Toggle**: Hamburger button with animated state transitions
- **Scroll Detection**: Automatically highlights the active section as the user scrolls
- **Customizable Variables**: CSS custom properties for easy theme customization
- **Accessibility**: Respects `prefers-reduced-motion` and includes dark mode support
- **Sticky Positioning**: Navbar stays visible while scrolling
- **Pure CSS**: No external dependencies, lightweight and performant

### CSS Variables for Customization:

```css
:root {
  --navbar-height: 70px;
  --navbar-bg: #ffffff;
  --navbar-text: #333333;
  --link-hover-color: #2563eb;
  --active-indicator-color: #2563eb;
  --transition-speed: 0.3s;
}
```

## Why is it useful for EaseMotion CSS?

Navigation is a fundamental component on every website. This navbar aligns perfectly with EaseMotion CSS philosophy by:

1. **Motion-Focused**: Features subtle, elegant animations including underline reveal effects, icon bounce, and smooth state transitions that enhance UX without being distracting.

2. **Composable & Reusable**: The component is self-contained and can be easily integrated into any project—landing pages, dashboards, portfolios, or documentation sites.

3. **Accessibility-First**: Includes semantic HTML, respects user motion preferences, and supports dark mode for inclusive design.

4. **Lightweight & Pure CSS**: No JavaScript dependencies required for styling; only vanilla JS for interactivity (menu toggle, scroll detection). Perfect for performance-conscious projects.

5. **Customizable**: CSS custom properties make it trivial to theme without modifying core styles, exemplifying EaseMotion's philosophy of clean, readable, maintainable CSS.

6. **Modern Web Standards**: Supports responsive design with mobile-first approach, CSS Grid/Flexbox, and modern media queries.

This component demonstrates how animation and motion can be used purposefully to create intuitive, delightful navigation experiences that are both beautiful and functional.
