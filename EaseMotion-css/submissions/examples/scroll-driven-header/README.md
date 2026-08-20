# Scroll-Driven Sticky Header

## What does this do?

This component implements a performance-optimized, shrinking sticky header using modern CSS Scroll-Driven Animations. As the user scrolls down, the header padding decreases, the logo scales down slightly, navigation gap compresses, and background opacity/blur increases to maintain legibility.

## How is it used?

```html
<header class="ease-header-sticky">
  <div class="ease-header-container">
    <a href="#" class="ease-header-logo">EaseMotion</a>
    <nav class="ease-header-nav" aria-label="Main Navigation">
      <a href="#home" class="nav-link active">Home</a>
      <a href="#features" class="nav-link">Features</a>
    </nav>
    <div class="ease-header-actions">
      <a href="#" class="header-btn header-btn-primary header-btn-sm"
        >Get Started</a
      >
    </div>
  </div>
</header>
```

## Why is it useful?

- Improves navigation visibility during scrolling
- Demonstrates modern CSS scroll-driven animations with fallback support
- Includes accessibility-friendly motion and focus handling
