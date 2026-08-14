# CSS Breadcrumb: Morphing Variation

A smooth, accessible, and performant pure CSS morphing breadcrumb navigation component featuring pill-shaped expansion transitions, glowing amber active states, and frosted glassmorphism card styling for the EaseMotion library, fully addressing documentation issue `#78392`.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS flexbox layouts, pseudo-element item separators (`::before`), and hardware-accelerated transforms.
- **Morphing Pill Expansion:** Interactive hover and active states that smoothly transform links into solid illuminated pill badges.
- **Dark Mode Compatible & Accessible:** Built with proper semantic landmark regions (`role="region"` / `<nav>` / `<ol>`), keyboard focus states, and `prefers-reduced-motion` support.

## 🛠️ Usage Example

```html
<header class="em-breadcrumb-card" role="region" aria-label="Morphing Breadcrumb Showcase" tabindex="0">
    <div class="em-breadcrumb-header-bar">
        <span class="em-card-badge">NAVIGATION</span>
        <span class="em-brand-logo">BreadcrumbMotion</span>
    </div>
    <h2 class="em-card-title">Morphing Breadcrumb Component</h2>
    <p class="em-card-desc">A smooth pure CSS morphing breadcrumb navigation featuring expanding pill transitions.</p>
    <div class="em-breadcrumb-wrapper">
        <nav class="em-morphing-breadcrumb" aria-label="Breadcrumb Navigation">
            <ol class="em-breadcrumb-list">
                <li class="em-breadcrumb-item"><a href="#home" class="em-breadcrumb-link">Home</a></li>
                <li class="em-breadcrumb-item"><a href="#components" class="em-breadcrumb-link">Components</a></li>
                <li class="em-breadcrumb-item"><a href="#active" class="em-breadcrumb-link active" aria-current="page">Morphing</a></li>
            </ol>
        </nav>
    </div>
</header>
