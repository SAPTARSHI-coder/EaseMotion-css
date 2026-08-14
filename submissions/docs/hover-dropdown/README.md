# Hover Dropdown Component

A fully responsive, accessible, and performant pure CSS hover dropdown component featuring smooth menu reveals, glowing button elevations, and frosted glassmorphism card styling for the EaseMotion CSS library.

## 🚀 Features

- **Zero JavaScript Required:** Built using native CSS pseudo-classes (`:hover`), absolute positioning, and backdrop blur filters.
- **Dynamic Interaction:** Fluid button elevation lift and instant glassmorphism dropdown menu presentation on hover.
- **Dark Mode Compatible & Accessible:** Built with proper landmark regions (`role="region"`), semantic menu structures (`role="menu"`), and keyboard focus outlines.

## 🛠️ Usage Example

```html
<div class="em-dropdown-card" role="region" aria-label="Hover Dropdown Showcase" tabindex="0">
    <span class="em-card-badge">COMPONENTS</span>
    <h2 class="em-card-title">Hover Dropdown</h2>
    <p class="em-card-desc">A high-performance pure CSS dropdown navigation menu.</p>
    <div class="em-dropdown-wrapper">
        <div class="em-dropdown">
            <button class="em-dropbtn" aria-haspopup="true" aria-expanded="false">Menu Options</button>
            <div class="em-dropdown-content" role="menu">
                <a href="#" role="menuitem">Overview</a>
                <a href="#" role="menuitem">Settings</a>
                <a href="#" role="menuitem">Logout</a>
            </div>
        </div>
    </div>
</div>
