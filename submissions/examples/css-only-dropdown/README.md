# CSS-only Dropdown Component (Material Design Styling)

A fully responsive, accessible, and high-performance pure CSS dropdown menu component featuring Material Design elevation shadows, smooth surface lighting, and frosted glassmorphism card styling for the EaseMotion library.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS pseudo-classes (`:hover`), absolute positioning, and backdrop blur filters.
- **Material Design Aesthetic:** Multi-level shadow elevation and smooth indigo-purple gradients tailored for modern dark mode UI layouts.
- **Fully Accessible:** Includes proper ARIA menu roles (`role="menu"`, `role="menuitem"`, `aria-haspopup`), keyboard focus states, and `prefers-reduced-motion` support.

## 🛠️ Usage Example

```html
<header class="em-dropdown-card" role="region" aria-label="CSS-only Dropdown Showcase" tabindex="0">
    <div class="em-dropdown-header-bar">
        <span class="em-card-badge">COMPONENT CONTRIBUTION</span>
        <span class="em-brand-logo">MaterialMotion</span>
    </div>
    <h2 class="em-card-title">CSS-only Dropdown</h2>
    <p class="em-card-desc">A fully responsive dropdown component with Material Design styling.</p>
    <div class="em-dropdown-wrapper">
        <div class="em-dropdown">
            <button class="em-dropbtn" aria-haspopup="true" aria-expanded="false">Material Actions</button>
            <div class="em-dropdown-content" role="menu">
                <a href="#" role="menuitem">Surface Elevation</a>
                <a href="#" role="menuitem">Ripple Effect</a>
            </div>
        </div>
    </div>
</header>
