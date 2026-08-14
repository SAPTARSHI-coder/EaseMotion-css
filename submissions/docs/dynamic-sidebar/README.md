# Dynamic Sidebar Component

A fully responsive, accessible, and performant pure CSS sidebar navigation component featuring smooth translation shifts, glowing purple neon hover effects, and frosted glassmorphism card styling for the EaseMotion CSS library.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS flex layouts, translation transforms (`translateX`), and custom hover timing curves.
- **Dynamic Active States:** Smooth horizontal indentation and glowing background aura on active/hover navigation links.
- **Dark Mode Compatible & Accessible:** Built with semantic `<aside>` and `<nav>` landmarks, keyboard focus states, and `prefers-reduced-motion` support.

## 🛠️ Usage Example

```html
<aside class="em-sidebar-card" role="region" aria-label="Dynamic Sidebar Showcase" tabindex="0">
    <span class="em-card-badge">COMPONENTS</span>
    <h2 class="em-card-title">Dynamic Sidebar</h2>
    <p class="em-card-desc">A high-performance pure CSS sidebar navigation component.</p>
    <nav class="em-sidebar-nav" aria-label="Sidebar Menu">
        <a href="#" class="em-sidebar-link em-active">Dashboard</a>
        <a href="#" class="em-sidebar-link">Components</a>
    </nav>
</aside>
