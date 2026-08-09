# Interactive Bento Grid Spotlight

A premium bento grid layout incorporating interactive radial gradient highlights.

## What does this do?
It builds a structured dashboard grid layout where hovered grid item backgrounds dynamically trace spotlight positions in real-time, accompanied by spring-physics scale effects on hover and focus events.

## How is it used?
Apply the bento grid architecture and assign bento card types (`bento-hero`, `bento-wide`, `bento-tall`, `bento-small`) to responsive elements containing spotlight layers:

```html
<section class="bento-grid">
  <div class="bento-card bento-hero">
    <div class="spotlight-layer"></div>
    <div class="card-content">
      <!-- Item Details -->
    </div>
  </div>
</section>
```

## Why is it useful?
It provides structural layouts for metrics interfaces, leveraging standard CSS custom property tracking for responsive coordinate spotlighting without layout bloat.
