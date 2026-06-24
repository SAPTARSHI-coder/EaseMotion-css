# Feature Tour Hotspot Showcase

## What does this do?

This showcase provides a complete, interactive product walkthrough system utilizing animated hotspots placed on top of a SaaS dashboard mockup to guide users through key product features.

## How is it used?

Developers apply composable utility classes to container elements and hotspot trigger button nodes:

```html
<!-- Container manages entrance fade-up and sequential tour delays -->
<div class="tour-wrapper tour-entrance tour-sequential">
  <!-- Target element spotlight highlights -->
  <div class="metric-card tour-spotlight spotlight-target">...</div>

  <!-- Accessible Hotspot Trigger Button -->
  <button class="tour-hotspot tour-pulse hotspot-revenue" aria-haspopup="true">
    <!-- Revealed Tooltip Component -->
    <div class="tour-tooltip">
      <div class="tooltip-header">Financial Stats</div>
      <p class="tooltip-desc">Track Monthly Recurring Revenue growth.</p>
    </div>
  </button>
</div>
```

## Why is it useful?

It fits EaseMotion CSS's philosophy by prioritizing **purposeful micro-interactions** that improve discovery and reduce cognitive overload, utilizing **GPU-friendly styling properties** for maximum visual fluidity, and providing a developer-friendly, **composable class API** that works with standard HTML structures without locking developers into rigid JS library ecosystems.

---

## Animation Breakdown

This example showcases five distinct animated interaction patterns designed to work together or individually:

1. **Pulse Indicators (`.tour-pulse`)**
   - Gently alerts users to interactive checkpoints using scale transformations and nested keyframe shadow rings.
   - Purpose: Guides the user's eye naturally without causing visual fatigue.
2. **Tooltip Reveals (`.tour-tooltip-reveal`)**
   - Animates tooltip entry on hotspot hover, focus, or click with a combined slide and fade transition.
   - Purpose: Provides contextual help while keeping the underlying dashboard interface uncluttered.

3. **Sequential Tour Mode (`.tour-sequential`)**
   - Orchestrates chronological step-by-step hotspot arrival times using sequential delays.
   - Purpose: Guides users through complex workflows in a logical, structured sequence.

4. **Spotlight Effects (`.tour-spotlight`)**
   - Dims surrounding dashboard components with a translucent dark overlay and visually elevates active features.
   - Purpose: Directs focus to specific areas, minimizing cognitive load.

5. **Entrance Animations (`.tour-entrance`)**
   - Gracefully fades and translates the entire dashboard into view on initial page load.
   - Purpose: Creates a premium, polished first impression.

---

## Included Files

- **[demo.html](demo.html)**: A complete, self-contained dashboard mockup interface featuring interactive hotspots, a step progress tracker, and a reviewer control panel.
- **[style.css](style.css)**: Human-readable stylesheet defining the dashboard layouts, animations, transitions, and accessibility configuration overrides.
- **[README.md](README.md)**: Feature summary, usage guide, and design breakdown.

---

## Practical Usage Ideas

- **SaaS User Onboarding**: Introduce first-time dashboard users to key navigation points, analytics widget definitions, and workflow managers.
- **Product Launches**: Highlight newly added platform features or subscription plan tools to returning users.
- **Interactive Documentation**: Replace flat code tutorials with live interactive previews in developer portals or knowledge bases.

---

## Accessibility & Responsiveness

- **Keyboard Navigation**: Hotspots are semantic `<button>` elements, making them fully focusable via standard Tab indexing. Focus styling is clearly visible.
- **Reduced Motion Support**: When `@media (prefers-reduced-motion: reduce)` is detected, scale keyframes, slide transitions, and overlay fade timings are disabled while maintaining complete interactive visibility.
- **Responsive Layout**: On mobile viewports, the multi-column dashboard collapses into an accessible single-column stack. Hotspots align cleanly and tooltips transition into full-width modal overlays to prevent text truncation or screen clipping.
- **Sufficient Contrast**: All active tooltips, metric badges, and playground overlays maintain color contrast ratios complying with accessibility guidelines.
