# Scroll-Driven Progress and Fade Timelines

### What does this do?

This feature leverages modern CSS scroll-driven animation properties (`animation-timeline` and `scroll()`) to create dynamic elements (like progress bars and reveal boxes) that animate purely based on the user's scroll position without any JavaScript.

### How is it used?

Apply the structural classes directly to your HTML elements:

```html
<!-- Global scroll progress indicator -->
<div class="scroll-progress-bar"></div>

<!-- Scroll-driven entrance effect -->
<section class="scroll-reveal-box">
  <h2>Our Core Principles</h2>
  <p>
    Watch this space smoothly scale and fade forward as you navigate down the
    viewport page.
  </p>
</section>
```

### Why is it useful?

This completely replaces the need for resource-heavy JavaScript scroll event listeners or `IntersectionObserver` configurations. It fits perfectly into the EaseMotion CSS philosophy:

- **Human-Readable**: It uses declarative utility names that clearly express kinetic behavior tied to structural navigation.
- **Animation-First**: It taps directly into the browser's native compositing thread via hardware-accelerated CSS properties, ensuring smooth 60fps performance on mobile viewports.
- **Composable**: Developers can combine these scroll configurations smoothly with existing transform matrices, opacities, and display filters already present in the engine.
