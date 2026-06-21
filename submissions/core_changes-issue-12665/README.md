# ease-testimonial-card

## What does this do?

Provides a reusable testimonial / quote card component with multiple stylistic variants, star rating integration, and a responsive auto-fill grid layout.

## How is it used?

**Base card:**

```html
<div class="ease-testimonial-card">
  <div class="ease-testimonial-stars" data-rating="5">
    <span class="ease-star ease-star--filled">★</span>
    <span class="ease-star ease-star--filled">★</span>
    <span class="ease-star ease-star--filled">★</span>
    <span class="ease-star ease-star--filled">★</span>
    <span class="ease-star ease-star--filled">★</span>
  </div>
  <p class="ease-testimonial-quote">
    "This framework made our animations smoother."
  </p>
  <div class="ease-testimonial-author">
    <img class="ease-avatar" src="avatar.jpg" alt="Author" />
    <div>
      <p class="ease-testimonial-name">Sarah Chen</p>
      <p class="ease-testimonial-role">Lead Developer, TechCorp</p>
    </div>
  </div>
</div>
```

**Variants:**

| Class | Description |
|---|---|
| `.ease-testimonial-card` | Standard card with border, shadow, and subtle hover lift |
| `.ease-testimonial-card--quote` | Large decorative accent quote mark |
| `.ease-testimonial-card--minimal` | No border, transparent background, clean typography |
| `.ease-testimonial-card--accent` | Colored left border accent |

**Grid:**

```html
<div class="ease-testimonial-grid">
  <!-- cards -->
</div>
```

## Why is it useful?

Testimonials are a staple of marketing pages, landing sites, and product showcases. This component provides a consistent, accessible, and customizable testimonial card system that integrates with EaseMotion's existing card, avatar, and rating patterns. The auto-fill grid and CSS custom properties make it adaptable to any layout context.

## Variants Preview

| Variant | Visual Cue |
|---|---|
| Standard | Light border, subtle shadow, hover lift |
| Quote | Large accent-colored quote mark behind text |
| Minimal | Borderless, transparent, for clean layouts |
| Accent | Colored left border for visual hierarchy |

## Features

- Four built-in variants for different visual contexts
- Star rating integration with filled/empty states
- Responsive auto-fill grid via `.ease-testimonial-grid`
- Subtle hover lift animation (respects `prefers-reduced-motion`)
- Dark mode support via `prefers-color-scheme`
- Configurable CSS custom properties (colors, spacing, avatar size, radius)
- Mobile-responsive padding and grid adjustments
