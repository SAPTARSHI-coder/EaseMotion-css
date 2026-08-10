# ease-error-page-animated

## What does this do?
Two fully animated error page templates — a 404 "Lost in Space" page with a floating astronaut, and a 500 "Something Broke" page with a sparking broken robot. Both include gradient glow error codes, animated illustrations, error messages, back-home CTAs with `ease-btn`, and subtle background animations.

## Variants

### 404 — Lost in Space
- **Large error code** — `404` with `ease-text-glow` purple/pink gradient + pulsing glow animation
- **Animated illustration** — CSS-drawn astronaut floating with arm movement, orbiting planet with rings, two drifting orbit dots, JS-generated star field
- **Background** — three blurred orbs animating independently, grid overlay, 80-star twinkle field
- **CTAs** — "Back to Home" (`ease-btn` purple) + "Go Back" (ghost)
- **Helpful links** — Home · Sitemap · Support

### 500 — Something Broke
- **Large error code** — `500` with `ease-text-glow-red` red/orange gradient + pulsing glow
- **Animated illustration** — CSS-drawn broken robot: blinking antenna light, flickering panel LEDs, one broken arm at 60°, animated sparks ejecting from the side
- **Background** — red/orange orbs, red grid overlay
- **CTAs** — "Back to Safety" (red) + "Try Again ↺" (ghost, reloads page)
- **Status link** — links to status page

## How to use it

```html
<!-- 404 page -->
<section class="ep-page ep-page--404">
  <div class="ep-bg">...</div>
  <div class="ep-content">
    <div class="ep-illustration"><!-- astronaut --></div>
    <div class="ep-code">
      <span class="ep-code-text ease-text-glow">404</span>
    </div>
    <div class="ep-message">
      <h1 class="ep-title">Lost in Space</h1>
      <p class="ep-desc">The page you're looking for...</p>
    </div>
    <div class="ep-actions">
      <a href="/" class="ease-btn ep-btn-primary">← Back to Home</a>
    </div>
  </div>
</section>
```

## Key animations
- `ep-astronaut-float` — translateY + rotate loop, 4s ease-in-out
- `ep-arm-left/right` — separate arm rotation timings
- `ep-planet-spin` — glow pulse loop
- `ep-orbit1/2` — dots moving across the scene
- `ep-twinkle` — JS-generated stars fade in/out at random delays
- `ep-robot-wobble` — robot rocking 2s loop
- `ep-spark-fly` — sparks fly up and fade, staggered 0.4s each
- `ep-light-flicker` — panel LEDs flicker at different rates
- `ep-float` — background orbs breathe up/down
- `ease-text-glow` / `ease-text-glow-red` — glow pulse on error code

## Accessibility
- `prefers-reduced-motion` stops all animations
- Illustration elements use `aria-hidden="true"`
- Back-home anchor is a real `<a href="/">` link
- 500 retry is a proper `<button>` element
