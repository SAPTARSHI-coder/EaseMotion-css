# CSS Navigation: Floating Navbar Variation

A smooth, accessible, and performant pure CSS floating navigation bar component featuring glassmorphism backdrops, pill container styling, and smooth hover transitions for the EaseMotion library, fully addressing issue `#78389`.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS flexbox layout, border-radius pill shapes, and hardware-accelerated transitions.
- **Floating Glassmorphism Aesthetic:** Layered translucent backgrounds and glowing cyan highlights creating modern tactile navigation.
- **Dark Mode Compatible & Accessible:** Built with proper semantic landmark regions (`role="region"` / `<nav>`), keyboard focus states, and `prefers-reduced-motion` support.

## 🛠️ Usage Example

```html
<header class="em-navbar-card" role="region" aria-label="Floating Navbar Showcase" tabindex="0">
    <div class="em-navbar-header-bar">
        <span class="em-card-badge">NAVIGATION</span>
        <span class="em-brand-logo">NavMotion</span>
    </div>
    <h2 class="em-card-title">Floating Navbar</h2>
    <p class="em-card-desc">A smooth pure CSS floating navigation bar featuring glassmorphism backdrops.</p>
    <div class="em-navbar-wrapper">
        <nav class="em-floating-nav" aria-label="Main Navigation">
            <a href="#home" class="em-nav-link active">Home</a>
            <a href="#features" class="em-nav-link">Features</a>
            <a href="#components" class="em-nav-link">Components</a>
            <a href="#contact" class="em-nav-link">Contact</a>
        </nav>
    </div>
</header>
