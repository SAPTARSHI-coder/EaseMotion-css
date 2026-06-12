# Heartbeat Looping Animation

## What does this do?

A premium, responsive, pure CSS looping double-pulse heartbeat animation. It simulates a natural heartbeat scale pulsing effect combined with synchronized expanding radial glow rings.

## How is it used?

Add the classes to your interactive buttons or status indicators:

### Interactive Button Example:

```html
<button class="like-button ease-heartbeat">
  <svg class="heart-svg" viewBox="0 0 24 24">...</svg>
</button>
```

### Status Indicator Example:

```html
<div class="live-indicator-wrapper">
  <div class="indicator-dot ease-heartbeat-dot"></div>
  <span class="indicator-text">RECORDING LIVE</span>
</div>
```

Ensure `style.css` is loaded to apply the scale coordinates, glowing pulse animations, and layout alignments.

## Why is it useful?

It provides a subtle, looping micro-interaction that draws user focus to specific calls-to-action (like "Favorite" or "Buy Now") or represents active states (like live recordings or heartbeat monitors) in a lightweight, pure CSS manner. It runs entirely on hardware-accelerated transforms and contains fallback paths for users requesting reduced motion.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

## Preview

Open [demo.html](file:///c:/Users/fawaz/.cursor/projects/EaseMotion-css/submissions/examples/ease-heartbeat/demo.html) directly in your browser to see the effect.

## Contribution Notes

- Class naming was handled by the contributor
- Maintainer will rename to ease-\* convention before merging
