# Cursor Glow Video Player

A premium gaming-inspired video player frame with a pure CSS cursor-following spotlight glow effect and a simulated interactive play/pause toggle.

## What does this do?

It simulates a premium, immersive gaming-style video player where a soft radial spotlight glow smoothly tracks the movement of the user's cursor across a 3D perspective cybernetic grid, accompanied by an interactive play/pause toggle, all achieved using pure CSS.

## How is it used?

Embed the accessible play-toggle checkbox and the responsive video frame structure:

```html
<!-- Accessible play state checkbox -->
<input
  type="checkbox"
  id="play-toggle"
  class="play-toggle-input"
  role="switch"
  aria-label="Toggle Play Pause"
/>

<!-- Video player frame container -->
<div class="video-frame">
  <!-- 5x5 grid of hover tracking sectors -->
  <div class="sector-grid" aria-hidden="true">
    <div class="sector s-1"></div>
    <!-- ... sectors s-2 to s-24 ... -->
    <div class="sector s-25"></div>
  </div>

  <!-- Pure CSS cybernetic grid background -->
  <div class="video-bg" aria-hidden="true">
    <div class="stars"></div>
    <div class="grid-mesh"></div>
    <div class="nebula-purple"></div>
    <div class="nebula-cyan"></div>
    <div class="ship-silhouette"></div>
  </div>

  <!-- Cursor spotlight glow layer -->
  <div class="glow-effect" aria-hidden="true"></div>

  <!-- Centered premium play button label -->
  <label for="play-toggle" class="play-button" title="Play Video">
    <!-- Play Icon SVG -->
    <svg
      class="icon icon-play"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
    >
      <polygon points="5 3 19 12 5 21 5 3"></polygon>
    </svg>
    <!-- Pause Icon SVG -->
    <svg
      class="icon icon-pause"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
    >
      <rect x="6" y="4" width="4" height="16"></rect>
      <rect x="14" y="4" width="4" height="16"></rect>
    </svg>
  </label>

  <!-- Playing status badge -->
  <div class="status-overlay" aria-hidden="true">
    <span class="status-badge">PLAYING</span>
  </div>
</div>
```

## Why is it useful?

It demonstrates that highly interactive, cursor-driven visual enhancements and component states can be constructed with Zero JavaScript using modern CSS selectors like `:has()`, sibling combinators, and `@property` custom variable transitions. This aligns with EaseMotion's philosophy of providing high-performance, lightweight, accessible, and smooth motion effects with a zero-config, native browser footprint.
