# Radial Circle-Wipe Card Reveal

## What does this do?

This feature introduces an interactive hover-reveal card component where a circular clip-path mask expands radially from the center of the card on hover, swapping default visual states for a rich gradient dashboard and staggered typography.

## How is it used?

Create a card container with `.em-circle-wipe-card` and nest a default layout panel (`.em-card-state-base`) and overlay panel (`.em-card-state-overlay`):

```html
<div class="em-circle-wipe-card">
  <!-- Default State Content -->
  <div class="em-card-state-base">
    <div class="card-header">
      <span class="category">Analytics</span>
      <h3>Data Pipeline</h3>
    </div>
    <p class="description">Hover to reveal pipeline status</p>
  </div>

  <!-- Reveal State Content (Overlayed) -->
  <div class="em-card-state-overlay">
    <div class="card-header">
      <span class="category">Live</span>
      <h3>Active Pipeline</h3>
    </div>
    <div class="analytics-metrics">
      <span>2.4M req/sec</span>
    </div>
    <a href="#" class="cta-button">Inspect Cluster</a>
  </div>
</div>
```

## Why is this useful for EaseMotion CSS?

Traditional hover states (e.g. flat scaling or solid color fades) offer limited aesthetic depth.

This utility improves on standard layouts by:

- **Offering a cinematic circular wipe:** Animating `clip-path` creates a futuristic spotlight transition that keeps landing page items interactive and visually interesting.
- **Micro-staggered contents:** Transitions inside the overlay are staggered via `transition-delay` to slide up sequentially inside the expanding circular mask, creating a premium agency feel.
- **High-performance GPU rendering:** Morphing clip-path circles is hardware-accelerated by modern browser engines, maintaining a stable 60fps frame rate without running any JavaScript.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

## Preview

Open `demo.html` directly in your browser and hover over the cards to inspect the radial flashlight swap.

## Contribution Notes

- Class naming was handled by the contributor (`.em-circle-wipe-card`, `.em-card-state-base`, `.em-card-state-overlay`).
- Maintainer will rename to `ease-*` convention before merging.
