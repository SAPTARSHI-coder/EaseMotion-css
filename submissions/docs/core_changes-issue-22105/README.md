# Parallax Scrolling Utility

## What does this do?

Adds lightweight parallax scrolling effects to EaseMotion CSS — elements move at different speeds relative to the viewport during scroll, creating depth. Uses CSS transform-based positioning with `requestAnimationFrame` for smooth 60fps performance and `IntersectionObserver` to avoid processing off-screen elements.

## How is it used?

**Basic parallax background:**

```html
<section class="ease-parallax" data-ease-speed="0.3">
  <h1>Hero Section</h1>
</section>
```

**Foreground element moving in reverse:**

```html
<img
  class="ease-parallax-reverse"
  data-ease-speed="1.2"
  src="overlay.png"
  alt=""
/>
```

**Slow-moving background layer:**

```html
<div class="ease-parallax-slow">Background moves at 20% of scroll speed</div>
```

## Why is it useful?

Parallax is one of the most requested visual effects for landing pages, portfolios, and storytelling websites. A built-in parallax utility saves developers from writing custom scroll listeners and ensures smooth performance through IntersectionObserver activation (only active when in viewport) and requestAnimationFrame throttling.
