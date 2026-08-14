# Ease Carousel Component (Slider System)

The **Ease Carousel Component** provides a flexible, modular, and highly responsive slideshow system designed for product galleries, featured banner dashboards, feature card carousels, and client testimonial sliders.

This component aligns with **EaseMotion CSS** design guidelines, relying on the framework's core timing variables, ease transitions, and spacing scales.

---

## Features

- **Fluid Transitions:** Support for both horizontal translation (`slide` mode) and absolute cross-fades (`fade` mode).
- **Auto-Play with Pause-on-Hover:** Slides change automatically but halt when the cursor enters the viewport.
- **Pill Dot Animation:** Active slide indicator transitions from a circle into an elongated pill shape for a modern SaaS look.
- **Touch Gesture Support:** Standard touch event listeners inside the controller enable swipe-ready sliding on mobile.
- **Infinite Loop Wrapping:** Seamless wrapping between first and last slides.
- **Highly Customisable:** Easily alter padding bounds, arrow styling, active states, and transition speeds.

---

## CSS Variables (Customization Guide)

You can customize the carousel colors, shadows, borders, and transition timings globally or on specific instances by adjusting these CSS custom properties:

```css
:root {
  --ease-carousel-bg: var(--ease-color-surface, #ffffff);
  --ease-carousel-border-color: var(--ease-color-neutral-200, #e2e8f0);
  --ease-carousel-radius: var(--ease-radius-lg, 12px);
  --ease-carousel-shadow: var(--ease-shadow-lg);
  
  --ease-carousel-control-bg: rgba(15, 23, 42, 0.65);
  --ease-carousel-control-color: #ffffff;
  --ease-carousel-control-border: 1px solid rgba(255, 255, 255, 0.15);
  
  --ease-carousel-indicator-bg: rgba(255, 255, 255, 0.35);
  --ease-carousel-indicator-active-bg: var(--ease-color-primary, #6c63ff);
  
  --ease-carousel-transition-speed: var(--ease-speed-medium, 300ms);
}
```

---

## Carousel Variants

### 1. Base Markup Structure
All carousels share this base wrapper layout:

```html
<div class="ease-carousel" id="my-carousel" data-autoplay="true" data-loop="true" data-transition="slide">
  <div class="ease-carousel-viewport">
    <div class="ease-carousel-track">
      <!-- Slides live here -->
      <div class="ease-carousel-slide">Slide 1</div>
      <div class="ease-carousel-slide">Slide 2</div>
    </div>
  </div>

  <!-- Navigation Arrows -->
  <button class="ease-carousel-control ease-carousel-control--prev" aria-label="Previous">
    <svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  </button>
  <button class="ease-carousel-control ease-carousel-control--next" aria-label="Next">
    <svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  </button>

  <!-- Dot indicators -->
  <div class="ease-carousel-indicators"></div>
</div>
```

---

### 2. Specific Slide Content Layouts

#### Image Carousel
Full bleed media with bottom description gradient overlays:
```html
<div class="ease-carousel-slide">
  <img src="banner.jpg" class="ease-carousel-slide-img" alt="SaaS graphic">
  <div class="ease-carousel-slide-overlay">
    <h2>SaaS Dashboard Release</h2>
    <p>Monitor your performance metrics with hardware-accelerated charting core.</p>
  </div>
</div>
```

#### Card Carousel
Slides structured with flex grids displaying statistics or pricing tables:
```html
<div class="ease-carousel-slide">
  <div class="ease-carousel-slide-card-grid">
    <div class="ease-carousel-card">
      <span class="ease-carousel-card-icon">⚡</span>
      <h3>Fast Transitions</h3>
      <p>Pre-compiled CSS rules leveraging native performance optimizations.</p>
    </div>
    <!-- Add more cards -->
  </div>
</div>
```

#### Testimonial Carousel
Quotes, star ratings, and custom circular avatars:
```html
<div class="ease-carousel-slide">
  <div class="ease-carousel-slide-testimonial">
    <div class="ease-carousel-testimonial-stars">★★★★★</div>
    <p class="ease-carousel-testimonial-quote">
      "EaseMotion CSS has completely changed our frontend workflow."
    </p>
    <div class="ease-carousel-testimonial-avatar">JD</div>
    <div class="ease-carousel-testimonial-author">John Doe</div>
    <div class="ease-carousel-testimonial-title">CEO, Tech Inc.</div>
  </div>
</div>
```

---

## Interactivity Javascript Initialization

Bind the modular class `EaseCarouselController` from `demo.html` to instantiate the sliders. 

It reads values automatically from these properties:
- `data-autoplay="true/false"` — Controls automatic shifting.
- `data-loop="true/false"` — Enables looping back.
- `data-transition="slide/fade"` — Sets animation transitions.
- It also sets up standard `touchstart` and `touchend` event tracking for swipe recognition.
