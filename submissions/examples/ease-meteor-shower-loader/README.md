# Meteor Shower Loader

Cosmic-inspired loading indicator with shooting stars streaking across a starry background. Meteors trail across the screen with glowing tails, creating a mesmerizing space-themed loading experience.

## Features

- Multiple meteor streaks with glowing tails
- Twinkling star field background
- Staggered animation delays via `--delay` custom property
- Smooth diagonal trajectories
- Pure CSS, no JS required
- Fully customizable colors and timing

## Usage

Add `.meteor-loader` container with `.meteor-trail` elements. Set `--delay` (in seconds) for stagger timing. Include `.star-field` with `.star` elements for background twinkling.

```html
<div class="meteor-loader">
  <!-- Star field background -->
  <div class="star-field">
    <span class="star" style="--star-delay: 0s; --star-size: 2px"></span>
    <span class="star" style="--star-delay: 0.5s; --star-size: 3px"></span>
    <span class="star" style="--star-delay: 1s; --star-size: 1.5px"></span>
    <span class="star" style="--star-delay: 1.5s; --star-size: 2.5px"></span>
    <span class="star" style="--star-delay: 2s; --star-size: 2px"></span>
  </div>
  
  <!-- Meteor trails -->
  <div class="meteor-trail" style="--delay: 0s"></div>
  <div class="meteor-trail" style="--delay: 1.2s"></div>
  <div class="meteor-trail" style="--delay: 2.4s"></div>
  <div class="meteor-trail" style="--delay: 3.6s"></div>
  
  <p class="meteor-label">Loading Universe<span class="meteor-dots">...</span></p>
</div>