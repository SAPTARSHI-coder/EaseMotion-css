# Pure HTML/CSS 3D-Flip Accordion (Gaming Hub)

## 1. What does this do?
A responsive, pure HTML and CSS 3D-flip accordion component designed for gaming hubs, featuring an authentic top-hinged 3D panel flip transition and 3D indicator card rotation.

## 2. How is it used?
Structure your HTML using native `<details>` and `<summary>` elements with the EaseMotion 3D spatial hierarchy:

```html
<div class="ease-3d-accordion">
  <details class="ease-3d-accordion-item" open>
    <summary class="ease-3d-accordion-summary">
      <div class="ease-3d-summary-main">
        <span class="ease-3d-item-badge">SYS-01</span>
        <span class="ease-3d-item-title">System Telemetry</span>
      </div>
      <div class="ease-3d-flip-indicator" aria-hidden="true">
        <span class="ease-3d-flip-card">
          <span class="ease-3d-card-front">+</span>
          <span class="ease-3d-card-back">−</span>
        </span>
      </div>
    </summary>
    <div class="ease-3d-flip-scene">
      <div class="ease-3d-flip-panel">
        <div class="ease-3d-accordion-body">
          <p class="ease-3d-text">Tactical telemetry content reveals via top-hinged 3D panel flip.</p>
        </div>
      </div>
    </div>
  </details>
</div>
```

## 3. Why is it useful?
It provides zero-dependency, framework-free interactive 3D UI depth for high-performance gaming web applications. By pairing native HTML disclosure semantics (`<details>` / `<summary>`) with dedicated CSS 3D perspective scenes (`perspective: 700px`), top-hinged panel rotation (`transform-origin: top center`), and `rotateX(-88deg)` to `rotateX(0deg)` motion, it delivers a physically believable 3D flip without requiring JavaScript or external dependencies—fitting directly into EaseMotion's zero-config philosophy.

---

## 4. Key Features

- **Pure CSS State Management**: Uses native browser HTML `<details>` disclosure elements for accessibility and keyboard operation without JS scripts.
- **Top-Hinged 3D Panel Flip**: The content surface rotates on a vertical X-axis hinge (`rotateX(-88deg)` → `rotateX(0deg)`), producing distinct 3D perspective foreshortening as the bottom edge travels through depth space.
- **Dedicated 3D Spatial Scene**: Uses `.ease-3d-flip-scene` (`perspective: 700px`) and `.ease-3d-flip-panel` (`transform-style: preserve-3d; backface-visibility: hidden;`) to ensure 3D geometry is never flattened by 2D overflow clipping.
- **3D Flip Badge Indicator**: Accordion toggle badge flips 180° on `rotateY` in 3D space with `backface-visibility: hidden` and `preserve-3d`.
- **EaseMotion System Integration**: Genuinely integrates EaseMotion design tokens for colors, fonts, spacing, smooth easing curves (`--ease-ease`, `--ease-ease-out`), shadows (`--ease-shadow-lg`), and ambient glows (`--ease-glow-primary`).
- **Full Reduced Motion Support**: Respects `@media (prefers-reduced-motion: reduce)` by bypassing 3D rotation transforms and ensuring instantaneous state clarity.
- **Responsive Layout**: Adapts grid telemetry smoothly across mobile, tablet, and wide desktop viewports.
