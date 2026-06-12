# Ease Parallax Sn

## What does this do?

A CSS-only parallax scrolling utility that creates depth effects using 3D perspective transforms — no JavaScript required.

## How is it used?

```html
<div class="parallax-container">
  <div class="parallax-section">
    <div class="parallax-layer parallax-slow">
      <!-- Deep background content — scrolls slow -->
    </div>
    <div class="parallax-layer parallax-medium">
      <!-- Mid-ground content — scrolls moderate -->
    </div>
    <div class="parallax-layer parallax-fast">
      <!-- Foreground content — scrolls fast -->
    </div>
  </div>
  <div class="parallax-foreground">
    <!-- Static content, no parallax -->
  </div>
</div>
```

Custom depth via inline style:

```html
<div class="parallax-layer" style="--parallax-depth: -150">
  <!-- Custom scroll speed ratio -->
</div>
```

## Why is it useful?

Parallax scrolling adds visual depth and immersion to landing pages, hero sections, and storytelling layouts. This implementation is purely CSS-based (using `perspective` and `transform-style: preserve-3d`), meaning zero JavaScript overhead, optimal performance, and no scroll event listeners. It respects `prefers-reduced-motion` and disables on mobile screens, making it fully accessible.
