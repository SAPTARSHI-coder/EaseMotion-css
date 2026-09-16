# CSS-only Carousel Component

A fully responsive, accessible, and performant pure CSS carousel component featuring scroll-snap mechanics, customized scrollbars, and frosted glassmorphism card styling for the EaseMotion CSS library.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely with CSS `scroll-snap-type` and `overflow-x: auto` for native, hardware-accelerated swiping and scrolling.
- **Native Performance:** Leverages the browser's scrolling engine for perfectly smooth, touch-friendly interactions on mobile and desktop.
- **Dark Mode Compatible & Accessible:** Built with proper landmark regions (`role="region"`), custom styled scrollbars, and keyboard-navigable scroll areas.

## 🛠️ Usage Example

```html
<div class="em-carousel-card" role="region" aria-label="CSS-only Carousel Showcase" tabindex="0">
    <span class="em-card-badge">COMPONENTS</span>
    <h2 class="em-card-title">CSS-only Carousel</h2>
    <div class="em-carousel-track">
        <div class="em-carousel-slide">Slide 1</div>
        <div class="em-carousel-slide">Slide 2</div>
    </div>
</div>
