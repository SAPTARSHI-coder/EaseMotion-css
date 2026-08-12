# Vercel-Style Glowing Grid Portal Dashboard

A standalone premium dark-theme server monitoring dashboard that demonstrates advanced CSS masking, custom property mapping, and hardware-accelerated 3D parallax tilts — all running at a locked 60fps.

## What does this do?
Provides an interactive layout with a grid portal mask that reveals neon-glowing grid lines under the cursor, along with cards that light up and tilt in 3D without layout jitter.

## How is it used?
```html
<div class="ease-grid-portal" id="gridPortal">
  <div class="ease-grid-lines"></div>
  <div class="ease-glow-grid">
    <div class="ease-glow-card" data-glow="primary">
      <div class="ease-glow-card-body">
        <!-- Card Content -->
      </div>
    </div>
  </div>
</div>
```
*(Requires basic JavaScript to map `--mouse-x` and `--mouse-y` for the portal, and calculate 3D tilt coordinates for cards. See `demo.html` for the complete implementation).*

## Why is it useful?
- **Animation-First Polish**: Demonstrates that GPU-accelerated micro-interactions can be achieved without layout jitter using EaseMotion's performance-first architecture.
- **Custom Property Synergy**: Maps cursor-tracking to CSS variables (`--mouse-x`, `--mouse-y`), showcasing composable design tokens.
- **Layout Stability**: Isolating 3D tilt to `.ease-glow-card-body` prevents layout recalculation in the parent grid container.
