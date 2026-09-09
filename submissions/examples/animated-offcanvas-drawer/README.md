# Documentation: Animated Offcanvas Drawer (Dark Mode) (#85370)

Comprehensive documentation guide, markup examples, CSS token integration, and accessibility notes for the EaseMotion Animated Offcanvas Drawer component (`#85370`).

## 🚀 Overview & Features

- **Zero JS Dependencies:** Implemented entirely in pure CSS using the checkbox state hack (`<input type="checkbox">` combined with `:checked` pseudo-class selectors).
- **Dark Mode Styling:** Built natively using EaseMotion dark mode design tokens and CSS variables.
- **Smooth Animations:** Hardware-accelerated sliding transforms (`transform: translateX()`) and backdrop fade transitions.
- **Responsive Layout:** Optimized for seamless usage across mobile, tablet, and desktop viewports.

## 📋 Copy-Paste HTML Markup

```html
<div class="em-app-container">
    <input type="checkbox" id="em-drawer-toggle" class="em-drawer-checkbox">
    
    <header class="em-top-nav">
        <label for="em-drawer-toggle" class="em-drawer-btn" role="button" aria-label="Toggle menu">
            <span class="em-hamburger-line"></span>
            <span class="em-hamburger-line"></span>
            <span class="em-hamburger-line"></span>
        </label>
        <span>Brand Name</span>
    </header>

    <label for="em-drawer-toggle" class="em-backdrop" aria-hidden="true"></label>

    <aside class="em-offcanvas-drawer" role="navigation" aria-label="Main Navigation">
        <div class="em-drawer-header">
            <h2>Menu</h2>
            <label for="em-drawer-toggle" class="em-close-btn">&times;</label>
        </div>
        <ul class="em-drawer-links">
            <li><a href="#">Link Item 1</a></li>
            <li><a href="#">Link Item 2</a></li>
        </ul>
    </aside>
</div>
