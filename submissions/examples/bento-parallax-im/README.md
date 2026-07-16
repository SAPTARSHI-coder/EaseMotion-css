# Kinetic Parallax Bento Card

## What does this do?
An interactive Bento grid card with an advanced 3D parallax hover effect. On hover, the card container rotates in 3D perspective space while inner layers — background mesh, content, and icon — shift forward/backward along the Z-axis at different rates (`translateZ`), creating real physical depth. Pure CSS 3D transforms, GPU-accelerated, zero JavaScript.

## How it works
- `.ease-bento-container` sets `perspective` for the 3D scene
- `.ease-bento-card` uses `transform-style: preserve-3d` so children exist in 3D space
- On hover, the card rotates via `rotateX`/`rotateY`
- `.ease-bento-bg` (background mesh) shifts to `translateZ(-20px)` — stays back
- `.ease-bento-content` shifts to `translateZ(40px)` — floats forward
- `.ease-bento-icon` shifts to `translateZ(60px)` — floats furthest forward

## How to use it
```html
<div class="ease-bento-container">
  <div class="ease-bento-card">
    <!-- Background mesh, stays far back -->
    <div class="ease-bento-bg" aria-hidden="true"></div>

    <!-- Content floats forward -->
    <div class="ease-bento-content">
      <div class="ease-bento-icon">📊</div>
      <h3>Analytics Engine</h3>
      <p>Multi-layered parallax depth interaction.</p>
    </div>
  </div>
</div>
```

## Variants
- `.ease-bento-bg--green/pink/amber` — background gradient color variants
- `.bento-large` — spans 2 columns × 2 rows in a grid
- `.bento-wide` — spans 2 columns

## Why it fits EaseMotion CSS
Bento grids are highly popular in modern SaaS landing pages. Multi-layered 3D depth normally requires JS mousemove listeners to calculate angles. This delivers the same layout treatment using pure CSS 3D transforms (`preserve-3d`, `perspective`, depth offsets) optimized for the GPU thread. `prefers-reduced-motion` disables all transforms while keeping border/shadow feedback.
