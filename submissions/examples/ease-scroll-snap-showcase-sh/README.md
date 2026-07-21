# Ease Scroll Snap Showcase

A reusable component demonstrating CSS Scroll Snap in both horizontal and vertical layouts, using pure HTML & CSS.

## What does this do?
Provides two ready-to-use scroll-snap patterns:
1. **Horizontal** — a swipeable card gallery that snaps each card to center (great for product showcases, testimonials, image galleries).
2. **Vertical** — a full-height slide viewer that snaps each section into view (great for onboarding flows, story-style content).

## How is it used?
Open `demo.html` — scroll/swipe sideways on the horizontal track to snap between colored cards, and scroll down inside the vertical box to snap between full slides.

```html
<!-- Horizontal -->
<div class="ease-snap-h-track">
  <div class="ease-snap-h-card">1</div>
  <div class="ease-snap-h-card">2</div>
</div>

<!-- Vertical -->
<div class="ease-snap-v-track">
  <div class="ease-snap-v-slide">Slide 1</div>
  <div class="ease-snap-v-slide">Slide 2</div>
</div>
```

## Why is it useful?
CSS Scroll Snap is a modern, dependency-free way to build galleries, onboarding screens, and card sliders without JavaScript. This component gives developers both horizontal and vertical starting patterns that are responsive and touch-friendly out of the box, fitting EaseMotion's animation-first, no-dependency philosophy.
