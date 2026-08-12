# Animated Testimonials Grid with Star Ratings

### What does this do?

It shows a responsive grid of testimonial cards, each with a quote, star rating, and customer details, that animate in with a staggered entrance and lift on hover, using only CSS.

### How is it used?

```html
<div class="testimonials-grid">
  <div class="testimonial-card">
    <div class="quote-mark" aria-hidden="true"></div>
    <p class="quote-text">Amazing framework.</p>
    <div class="star-rating" role="img" aria-label="Rated 5 out of 5">
      <span class="star"></span>
      <span class="star"></span>
      <span class="star"></span>
      <span class="star"></span>
      <span class="star"></span>
    </div>
    <div class="customer-info">
      <div class="customer-avatar" aria-hidden="true">JS</div>
      <div>
        <strong>Jane Smith</strong>
        <span>CTO, TechCorp</span>
      </div>
    </div>
  </div>
</div>
```

The grid uses `auto-fit` columns so it reflows from three columns to one on small screens. Cards fade and slide up with a per-card delay, stars bounce in with a staggered fill, and hovering a card lifts it with a deeper shadow.

### Why is it useful?

Testimonials are a core trust element on landing pages. This component covers a real world pattern end to end with entrance staggers, a rating animation, decorative quote marks, and card hover depth. Stars are drawn with `clip-path` and avatars use initials, so the demo is fully self contained with no external images. The rating exposes an accessible label, and all motion is disabled under `prefers-reduced-motion: reduce`.
