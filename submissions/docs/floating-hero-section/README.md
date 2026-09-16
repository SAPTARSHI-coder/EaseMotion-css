# Documentation: Floating Hero Section Component (#97796)

Comprehensive integration guide and usage documentation for the EaseMotion library's **Floating Hero Section** component (`#97796`), fully addressing documentation issue `#78890`.

## 🚀 Overview & Features

- **Floating Elevation & Depth:** Built with luminous box-shadow accents and smooth hover elevation lifts (`-6px`).
- **Frosted Glassmorphism Styling:** Built with background blur (`backdrop-filter: blur(16px)`) and indigo accent highlights.
- **Accessibility:** Full support for keyboard focus states and `@media (prefers-reduced-motion: reduce)`.

## 🛠️ Usage Example

```html
<section class="ease-floating-hero" aria-label="Floating Hero Section Element" tabindex="0">
    <div class="em-hero-content">
        <span class="em-hero-tag">FLOATING UI</span>
        <h2 class="em-inner-title">Elevated Motion</h2>
        <p class="em-inner-text">Pure CSS frosted glass hero section with dynamic depth and smooth hover effects.</p>
    </div>
</section>
