# Animated Curved Timeline - pp

A premium, interactive, and responsive animated timeline component utilizing CSS-only animations and self-drawing SVG curved paths.

---

## Description

The **Animated Curved Timeline** represents chronological events, roadmaps, or narratives with interactive, fluid motions. A central vertical spine grows down on page load, followed by milestone cards fading/sliding in on a staggered delay, while curved SVG lines dynamically "draw" themselves to connect the spine to each card. Hovering a card lifts it, highlights the corresponding spine dot, and activates a glowing underglow effect.

---

## 1. What does this do?

It creates an interactive chronological timeline with self-drawing curved path connectors, staggered entrances, and dynamic hover indicators in pure HTML/CSS.

## 2. How is it used?

Structure your HTML using the `timeline-container-pp` and `milestone-card-pp` components:

```html
<!-- Main timeline wrapper -->
<div class="timeline-container-pp">
  <!-- Spine element -->
  <div class="timeline-spine-pp"></div>

  <!-- Left-aligned milestone -->
  <article class="milestone-item-pp milestone-left-pp" style="--delay: 0.1s">
    <div class="connector-svg-pp">
      <!-- Curved SVG path connecting spine to card -->
      <svg
        class="curve-svg-pp"
        viewBox="0 0 120 60"
        fill="none"
        preserveAspectRatio="none"
      >
        <path class="curve-path-pp" d="M 0 30 C 40 30, 80 30, 120 30" />
      </svg>
      <!-- Interactive timeline dot -->
      <div class="timeline-dot-pp">
        <div class="dot-ring-pp"></div>
        <div class="dot-core-pp"></div>
      </div>
    </div>
    <div class="milestone-card-pp">
      <div class="card-glow-pp"></div>
      <h3>Phase 1: Research</h3>
      <p>Analyze user needs and market demand.</p>
    </div>
  </article>
</div>
```

## 3. Why is it useful?

It fits EaseMotion CSS's philosophy by delivering zero-dependency, high-performance animations and responsive layouts through clean CSS custom properties, while ensuring accessibility through system-level reduced-motion overrides.
