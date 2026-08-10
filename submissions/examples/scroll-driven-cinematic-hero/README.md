# Scroll-Driven Cinematic Hero Section

## What does this do?

Creates a full-page cinematic hero section where every visual layer — background gradient orbs, decorative shapes, grid overlay, headline text, CTA buttons, and stat cards — animates in perfect sync with page scroll position using `animation-timeline: scroll()`. Each element enters, performs its animation, and exits at different scroll ranges, creating a choreographed narrative experience with zero JavaScript.

## How is it used?

Wrap your hero content in `.sch-scene` to create the scroll stage:

```html
<section class="sch-scene">
  <div class="sch-bg">
    <div class="sch-bg-orb sch-bg-orb--primary"></div>
    <div class="sch-bg-orb sch-bg-orb--accent"></div>
  </div>
  <div class="sch-grid"></div>
  <div class="sch-decor sch-decor-circle"></div>
  <div class="sch-decor sch-decor-diamond"></div>
  <div class="sch-content">
    <p class="sch-eyebrow">Introducing</p>
    <h1 class="sch-title">
      <span class="sch-title-line-1">Your headline</span>
      <span class="sch-title-line-2">Gradient text</span>
    </h1>
    <p class="sch-description">Your description...</p>
    <div class="sch-cta-group">
      <a href="#" class="sch-btn sch-btn--primary">Get Started</a>
      <a href="#" class="sch-btn sch-btn--ghost">Learn More</a>
    </div>
  </div>
</section>
```

Stats cards below the fold use `.sch-stats` and `.sch-stat-card` and are also scroll-linked:

```html
<section class="sch-stats">
  <div class="sch-stat-card">
    <div class="sch-stat-value">98+</div>
    <div class="sch-stat-label">Utility Classes</div>
  </div>
</section>
```

## Why is it useful?

Cinematic scroll-driven hero sections are a staple of modern SaaS landing pages (Linear, Vercel, Stripe, Apple product pages), but they almost always require JavaScript scroll listeners or complex animation libraries. This submission proves the entire effect can be achieved with pure CSS:

- **Single timeline**: Every element shares one `animation-timeline: scroll()` — the root scroll position becomes the master controller
- **Choreographed layers**: Background orbs drift, grid fades, headline blurs in, CTA rises, decor floats — each at different scroll ranges
- **Seamless transition**: Content gracefully exits as the user scrolls past, revealing stat cards that rise from below
- **Zero JavaScript**: No IntersectionObserver, no scroll event listeners, no animation libraries

## Modern CSS APIs Used

- `animation-timeline: scroll()`
- `animation-fill-mode: both`
- `@property`
- `scroll()` timeline function
- `prefers-reduced-motion`
- `forced-colors: active`
- `@media print`
