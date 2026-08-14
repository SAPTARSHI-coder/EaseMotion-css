# Elastic-Slide Accordion for Gaming Hub

A pure HTML5 & CSS accordion component featuring a snappy **Elastic-Slide** motion system for Gaming Hub layouts.

---

## 1. What does this do?

It provides an interactive, accessible, zero-JavaScript accordion with directional sliding entrance, spring-like elastic overshoot rebound, and fluid grid height expansion tailored for tactical loadout and gaming battle pass panels.

---

## 2. How is it used?

Apply `.elastic-slide-item` to semantic `<details>` elements inside an `.elastic-slide-accordion` container:

```html
<section class="elastic-slide-accordion">

  <details class="elastic-slide-item" open style="--slide-index: 1;">
    <summary class="elastic-slide-summary">
      <div class="summary-meta">
        <span class="meta-icon orange-glow">...</span>
        <div class="summary-text">
          <span class="summary-title">Primary Armament // Phantom Mk-IV</span>
          <span class="summary-desc">Suppressed Assault Rifle</span>
        </div>
      </div>
      <div class="summary-status">
        <span class="badge badge-orange">TIER 50</span>
        <svg class="chevron-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m6 9 6 6 6-6"/></svg>
      </div>
    </summary>

    <div class="elastic-slide-body-wrapper">
      <div class="elastic-slide-body-inner">
        <div class="elastic-slide-content">
          <!-- Accordion content -->
        </div>
      </div>
    </div>
  </details>

</section>
```

---

## 3. Why is it useful?

It demonstrates high-performance, spring-like CSS animations without external JavaScript dependencies by combining `<details>` / `<summary>` tags with EaseMotion's `--ease-ease-bounce` curve (`cubic-bezier(0.34, 1.56, 0.64, 1)`), directional elastic keyframe overshoot (`@keyframes elasticSlideReveal`), CSS grid height expansion, and comprehensive reduced motion support.

---

## Motion Identity & Architecture

- **Elastic Directional Slide**: Content slides in horizontally from `translateX(-24px)`, overshoots past `0` to `translateX(8px)`, and rebounds smoothly into resting position.
- **Snappy Tactical Pop**: Summary headers trigger an energetic elastic shift on hover/click with metallic accent glows.
- **Spring Chevron**: SVG indicator snaps 180° with an elastic overshoot easing curve (`cubic-bezier(0.34, 1.75, 0.64, 1)`).
- **Accessibility & Performance**: Uses GPU-accelerated `transform` and `opacity` properties with full `@media (prefers-reduced-motion: reduce)` support.
