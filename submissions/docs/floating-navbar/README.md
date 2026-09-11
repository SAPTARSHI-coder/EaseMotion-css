# Floating Navbar Component

A fully responsive, accessible, and performant pure CSS floating navbar component featuring smooth link interactions, glowing elevation effects, and frosted glassmorphism card styling for the EaseMotion CSS library.

## 🚀 Features

- **Zero JavaScript Required:** Built using native CSS transition properties, flex layouts, and backdrop blur filters.
- **Dynamic Floating State:** Smooth vertical scaling and neon accent background glow on link hover.
- **Dark Mode Compatible & Accessible:** Built with proper landmark regions (`role="region"`), semantic navigation elements (`<nav>`), and keyboard focus outlines.

## 🛠️ Usage Example

```html
<div class="em-navbar-card" role="region" aria-label="Floating Navbar Showcase" tabindex="0">
    <span class="em-card-badge">COMPONENTS</span>
    <h2 class="em-card-title">Floating Navbar</h2>
    <p class="em-card-desc">A high-performance floating navigation component.</p>
    <nav class="em-floating-navbar" aria-label="Floating Navbar Demo">
        <a href="#" class="em-nav-link" role="button">Home</a>
        <a href="#" class="em-nav-link" role="button">Explore</a>
        <a href="#" class="em-nav-link" role="button">Support</a>
    </nav>
</div>
