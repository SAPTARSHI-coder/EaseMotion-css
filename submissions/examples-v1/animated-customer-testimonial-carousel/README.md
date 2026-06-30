# Animated Customer Testimonial Card Carousel

An interactive, premium customer testimonial card carousel with smooth scroll snap features, active card focusing animations, star rating shines, and modern glassmorphic quote cards. Designed for SaaS marketing landing pages, agency portfolios, and product showcase sections.

## What does this do?

This component provides a swipeable testimonial showcase featuring:

- **Card Hover Elevation**: Lifts the card (`translateY(-8px)`) and expands its shadow glow on hover.
- **Active Card Focusing**: Magnifies (`scale(1.03)`) and highlights the active testimonial card in the snap track.
- **Pure CSS Snap Scroll Carousel**: Enables native momentum swiping on mobile/touch screens and smooth trackpad scrolling with `scroll-snap-type: x mandatory`.
- **Background Quote Decoration**: Renders a large, stylized quotes glyph that transforms on hover.
- **Star Rating Shine**: Glows and pulses the rating indicators on card hover.
- **Glossy Sheen Reflection**: Sweeps a soft gloss sheet across the card face on hover.

## How is it used?

Integrate the widget template into your dashboard layout:

```html
<!-- Example of Testimonial Card -->
<div class="testimonial-card active">
  <div class="profile">
    <img src="avatar.jpg" alt="Customer" />

    <div>
      <h4>Sarah Johnson</h4>
      <span>Product Designer</span>
    </div>
  </div>

  <div class="rating">★★★★★</div>

  <p>
    This product significantly improved our team's workflow and productivity.
  </p>
</div>
```

## Why is it useful?

Testimonials build critical user trust. This carousel:

1. **Reduces layout fatigue**: Fits multiple user quotes into a compact, scrollable footprint.
2. **Offers premium native swiping**: Uses CSS scroll snaps, guaranteeing 60fps scrolling on mobile viewports.
3. **Micro-interactions**: Encourages interaction through rating shines, profile highlights, and indicator dot updates.

## Tech Stack

- HTML5
- CSS3 (Vanilla Custom Properties, Keyframe Animations, Scroll Snaps, Grid, Flexbox)
- Inline SVGs (No external image network requests required)

## Preview

To see the carousel in action:

1. Open the [demo.html](file:///c:/Users/LENOVO/Desktop/GSSoC/Ease%20Motion/EaseMotion-css-gssoc/submissions/examples/animated-customer-testimonial-carousel/demo.html) directly in any modern web browser.
2. Swipe the track horizontally or click the indicator dots.

## Contribution Notes

- Class names correspond to GSSoC contribution requirements.
- The project maintainer will refactor selectors to the `ease-*` prefix during repository integration.
