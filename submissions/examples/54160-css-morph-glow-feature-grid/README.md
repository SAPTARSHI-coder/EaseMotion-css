# CSS Morph-Glow Feature Grid for Responsive Dashboard Layouts

> Pure HTML5 & CSS3 showcase example demonstrating an organic shifting multi-color neon morph glow feature grid optimized for dark-mode SaaS dashboards, analytics platforms, and executive portals.

---

## 1. What does this do?

The **CSS Morph-Glow Feature Grid** provides a lightweight, dependency-free responsive layout grid with atmospheric radial ambient blur background orbs and cards that display an organic rotating neon aura on hover. Designed specifically for modern dashboard interfaces, it presents high-contrast data metrics, category tag filtering, speed controls, and interactive card states while adhering strictly to accessibility standards.

---

## 2. How is it used?

Include `style.css` in your project and structure your dashboard feature grid using the `.morph-glow-card` markup pattern:

```html
<main class="grid-container">
  <article class="morph-glow-card featured" data-category="core">
    <!-- Shimmer Morph Aura Background Overlay -->
    <div class="morph-aura"></div>
    <div class="card-border-glow"></div>
    
    <!-- Card Content Layer -->
    <div class="card-inner">
      <div class="card-header">
        <div class="icon-wrapper icon-cyan">
          <svg ...></svg>
        </div>
        <span class="status-indicator live">99.98% SLA</span>
      </div>

      <h2 class="card-title">Real-Time Telemetry</h2>
      <p class="card-description">
        Stream high-throughput event metrics across distributed nodes with sub-millisecond propagation delay.
      </p>

      <div class="card-metrics">
        <div class="metric-item">
          <span class="metric-val">42.8k</span>
          <span class="metric-lbl">Req/Sec</span>
        </div>
        <div class="metric-item">
          <span class="metric-val">1.2ms</span>
          <span class="metric-lbl">P99 Latency</span>
        </div>
      </div>

      <div class="card-footer">
        <a href="#details" class="card-action-btn">
          <span>View Live Stream</span>
          <svg class="arrow-icon" ...></svg>
        </a>
      </div>
    </div>
  </article>
</main>
```

---

## 3. Why is it useful?

1. **Pure CSS Performance:** Built entirely with hardware-accelerated CSS properties (`transform`, `opacity`, `filter: blur()`, `backdrop-filter`) running smoothly at 60 FPS without external JavaScript dependencies or heavy UI frameworks.
2. **Responsive Dashboard Grid:** Uses CSS Grid with `repeat(auto-fit, minmax(340px, 1fr))` for fluid adaptation across mobile screens, tablets, ultra-wide monitors, and multi-column dashboard views.
3. **Accessibility First:** Supports `prefers-reduced-motion: reduce` media queries to gracefully strip heavy ambient animations for users sensitive to motion, while providing full keyboard navigation and high typography contrast.
4. **Zero Namespace Pollution:** All styles are scoped exclusively within self-contained submission files, adhering strictly to EaseMotion CSS standard track guidelines and architecture principles.
