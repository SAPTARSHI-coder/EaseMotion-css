# Animated Gradient Card Collection

A set of modern, self-contained UI cards for EaseMotion CSS examples.

## What does this example demonstrate?

Three animation techniques working together:

1. **`conic-gradient` + `@keyframes gradient-spin`** — an animated rotating conic gradient used as a 2 px border by layering the card inner surface on top.
2. **`background-position` shimmer sweep** — on hover, a translucent highlight band travels across the card surface via `@keyframes shimmer`.
3. **CSS `perspective` 3D tilt** — a tiny vanilla JS listener reads `mousemove` and writes `--tilt-x` / `--tilt-y` CSS custom properties; the card transforms via `rotateX` / `rotateY` with no layout reflow.

## How do I use it?

```html
<!-- 1. Link the stylesheet -->
<link rel="stylesheet" href="style.css" />

<!-- 2. Pick a theme class and add data-tilt -->
<div class="card theme-aurora" data-tilt>
  <div class="card__inner">
    <div class="card__icon">⚡</div>
    <h2 class="card__title">Your title</h2>
    <p class="card__body">Your description.</p>
  </div>
</div>

<!-- 3. Drop in the tilt script (bottom of body) -->
<script>
  document.querySelectorAll("[data-tilt]").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      card.style.setProperty("--tilt-x", `${(-y * 12).toFixed(2)}deg`);
      card.style.setProperty("--tilt-y", `${(x * 12).toFixed(2)}deg`);
    });
    card.addEventListener("mouseleave", () => {
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
    });
  });
</script>
```

**Available themes:** `theme-aurora` · `theme-sunset` · `theme-ocean` · `theme-ember`

**Card variants:** base feature card · `.card--stat` · `.card--profile`

## Why was this added?

EaseMotion CSS already has neon buttons and glassmorphism panels. Animated gradient cards are one of the most common patterns in SaaS dashboards and portfolio sites, and the `conic-gradient` + `background-position` combination is distinct from anything currently in `submissions/examples/`. This addition closes that gap with a ready-to-drop component that covers three real card layouts across four colour themes, with zero runtime dependencies.

## Files

| File        | Purpose                                      |
| ----------- | -------------------------------------------- |
| `demo.html` | Open directly in a browser — zero build step |
| `style.css` | All keyframes, theme tokens, card styles     |
| `README.md` | This file                                    |

## Accessibility

All animations are wrapped in:

```css
@media (prefers-reduced-motion: reduce) {
  .card,
  .card::before,
  .card__inner::after {
    animation: none !important;
    transition: none !important;
  }
}
```
