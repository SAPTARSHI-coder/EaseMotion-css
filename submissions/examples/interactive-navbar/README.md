# Interactive Navbar Component (Pastel Styling)

A fully responsive, accessible, and high-performance pure CSS interactive navigation bar component featuring elegant pastel color gradients, frosted glassmorphism card styling, and smooth hover elevation for the EaseMotion library.

## 🚀 Features

- **Zero JavaScript Required:** Built using native CSS flexbox layouts, backdrop blur filters, and hardware-accelerated transitions.
- **Pastel Aesthetic:** Soft pink, purple, and blue glowing accent gradients designed for modern dark mode UI layouts.
- **Fully Responsive & Accessible:** Fluidly stacks on smaller screens, includes proper ARIA landmark roles (`role="region"`), semantic `<nav>` markup, and keyboard focus states.

## 🛠️ Usage Example

```html
<header class="em-navbar-card" role="region" aria-label="Interactive Navbar Showcase" tabindex="0">
    <div class="em-navbar-header">
        <span class="em-card-badge">COMPONENT CONTRIBUTION</span>
        <span class="em-brand-logo">PastelMotion</span>
    </div>
    <h2 class="em-card-title">Interactive Navbar</h2>
    <p class="em-card-desc">A fully responsive navigation component with pastel styling.</p>
    <nav class="em-interactive-navbar" aria-label="Main Navigation">
        <a href="#" class="em-nav-link" role="button">Home</a>
        <a href="#" class="em-nav-link" role="button">Showcase</a>
        <a href="#" class="em-nav-link" role="button">Library</a>
        <a href="#" class="em-nav-link" role="button">Contact</a>
    </nav>
</header>
