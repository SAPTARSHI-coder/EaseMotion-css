# Neumorphic Testimonial Card — Corporate Design

A pure CSS testimonial card component featuring an elegant, corporate neumorphic UI design. Neumorphism uses soft, dual-shadow systems (light highlights and dark drop shadows) to create tactile raised and recessed surfaces.

## What does this do?
It creates modern corporate testimonial cards that appear to emerge from the background surface.
- **Card**: Starts as a soft raised card, and lifts higher on hover (shadows soften and scale increases).
- **Avatar (left)**: Starts recessed (inset shadow) and pops out to a raised circle on hover.
- **Rating stars**: Start raised and sink recessed on hover, creating a dynamic tactile interface.
- **Keyboard navigation**: Features clear focus outline rings for users tab-navigating the layout.

---

## How is it used?

### 1. Link the Stylesheet
Link `style.css` in your project header:
```html
<link rel="stylesheet" href="style.css">
```

### 2. Markup Blueprint

```html
<div class="ease-neumorphic-testimonial-card" tabindex="0" aria-label="Testimonial by Sarah Jenkins">
  <div class="ease-testimonial__avatar">
    <span class="avatar-initials">SJ</span>
  </div>
  
  <div class="ease-testimonial__rating" aria-label="5 out of 5 stars">
    <svg viewBox="0 0 20 20">...</svg>
    <!-- Five stars -->
  </div>
  
  <blockquote class="ease-testimonial__content">
    <p>"The team delivered the migration plan ahead of schedule and with zero downtime."</p>
  </blockquote>
  
  <div class="ease-testimonial__author">Sarah Jenkins</div>
  <div class="ease-testimonial__role">VP of Infrastructure, CloudScale</div>
</div>
```

---

## Why is it useful?
- **Corporate Neumorphism**: Achieves a sleek corporate look with tightly-tuned low-contrast offsets, avoiding the muddy shadows of generic neumorphism.
- **Full Contrast Accessibility**: Neumorphic cards typically struggle with contrast, but this component employs high contrast typography (deep slates/navy) and clear focus rings (`:focus-visible`) to ensure full legibility and keyboard navigation.
- **Dark Mode Support**: Shadows adjust automatically to support dark theme colors, keeping the card integrated seamlessly in light or dark backgrounds.
- **Respects Accessibility Preferences**: Disables translations and springs when `@media (prefers-reduced-motion)` is active, transitioning instantly.
- **Zero JavaScript**: High performance, zero runtime overhead.

---

## Customization API (CSS Custom Properties)

Tokens are declared on the parent `.ease-neumorphic-testimonial-card` block and can be customized:

| Property | Default | Description |
|---|---|---|
| `--ease-testi-duration` | `500ms` | Transition duration for entrance and hover |
| `--ease-testi-easing` | `cubic-bezier(0.16, 1, 0.3, 1)` | Professional ease-out timing curve |
| `--ease-testi-radius` | `16px` | Card corner radius |
| `--ease-testi-spacing` | `1.75rem` | Inner padding of card |
| `--ease-testi-shadow-intensity` | `1.0` | Shadow size multiplier (can scale up or down) |
| `--ease-testi-bg` | `#f1f5f9` / `#1e293b` | Neumorphic base background color (must match container!) |
| `--ease-testi-color-text` | `#0f172a` / `#f8fafc` | Author name text color |
| `--ease-testi-color-text-muted` | `#475569` / `#94a3b8` | Quote content text color |
| `--ease-testi-color-accent` | `#0f172a` / `#38bdf8` | Role text color |
| `--ease-testi-color-star` | `#eab308` | Filled star color |
