# Hover Navbar Component

A fully responsive, accessible, and performant pure CSS hover navbar component featuring smooth link transitions, glowing hover elevations, and frosted glassmorphism card styling for the EaseMotion CSS library.

## 🚀 Features

- **Zero JavaScript Required:** Built using native CSS transition properties, flex layouts, and backdrop blur filters.
- **Interactive Navigation State:** Smooth vertical lift and accent background glow on link hover.
- **Dark Mode Compatible & Accessible:** Built with proper landmark regions (`role="region"`), semantic navigation elements (`<nav>`), and keyboard focus outlines.

## 🛠️ Usage Example

```html
<div class="em-navbar-card" role="region" aria-label="Hover Navbar Showcase" tabindex="0">
    <span class="em-card-badge">COMPONENTS</span>
    <h2 class="em-card-title">Hover Navbar</h2>
    <p class="em-card-desc">A high-performance navigation component.</p>
    <nav class="em-hover-navbar" aria-label="Navbar Demo">
        <a href="#" class="em-nav-link" role="button">Home</a>
        <a href="#" class="em-nav-link" role="button">Features</a>
        <a href="#" class="em-nav-link" role="button">Docs</a>
    </nav>
</div>
