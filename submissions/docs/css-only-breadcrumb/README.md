# CSS-only Breadcrumb Component

A fully responsive, accessible, and performant pure CSS breadcrumb navigation component featuring clean separator styling, smooth link color transitions, and frosted glassmorphism card styling for the EaseMotion CSS library.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS flex layouts, pseudo-elements (`::after`), and transition properties.
- **Dynamic Separator Generation:** Automated slash separators between list items using CSS content insertion.
- **Dark Mode Compatible & Accessible:** Built with semantic `<ol>` and `<li>` markup, `aria-current="page"` attributes, keyboard focus states, and `prefers-reduced-motion` support.

## 🛠️ Usage Example

```html
<nav class="em-breadcrumb-card" role="region" aria-label="CSS-only Breadcrumb Showcase" tabindex="0">
    <span class="em-card-badge">COMPONENTS</span>
    <h2 class="em-card-title">CSS-only Breadcrumb</h2>
    <p class="em-card-desc">A high-performance pure CSS breadcrumb component.</p>
    <ol class="em-breadcrumb-list" aria-label="Breadcrumb">
        <li class="em-breadcrumb-item"><a href="#" class="em-breadcrumb-link">Home</a></li>
        <li class="em-breadcrumb-item"><a href="#" class="em-breadcrumb-link">Library</a></li>
        <li class="em-breadcrumb-item em-active" aria-current="page">Components</li>
    </ol>
</nav>
