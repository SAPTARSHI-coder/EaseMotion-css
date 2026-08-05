# Responsive Bento Analytics Dashboard with Container Queries

## 1. What does this do?

This is a premium SaaS analytics bento-grid dashboard where individual layout cards dynamically adjust their internal grid, text spacing, and elements autonomously using CSS `@container` queries based on their own container cell width.

## 2. How is it used?

Make card containers acts as container query parents by declaring `container-type: inline-size` in CSS, then write container media overrides:

```html
<!-- Grid card container parent -->
<article class="bento-card card-revenue ease-hover-lift ease-slide-up">
  <div class="bento-card-body">
    <div class="revenue-layout">
      <!-- Layout adjusts depending on container size -->
    </div>
  </div>
</article>
```

```css
/* Card container type setup */
.bento-card {
  container-type: inline-size;
  container-name: card-container;
}

/* Wide container layout rule overrides */
@container card-container (min-width: 350px) {
  .revenue-layout {
    flex-direction: row;
    justify-content: space-between;
  }
}
```

## 3. Why is it useful?

It fits EaseMotion CSS's philosophy by demonstrating how to build modern responsive widgets that control their own layout styles modularly, reducing page-level CSS media query dependencies while showcasing nested framework utilities (staggered entries, skeleton shimmers, badges) in a high-fidelity console.

---

## Overview

A modern dark/light system adaptive SaaS console for tracking metrics, server latencies, transactions, and activities. The interface leverages CSS Container Queries to ensure cards adapt fluidly to screen changes.

## Features

- **Bento Grid Layout:** Clean grid design with nested columns and offsets.
- **Autonomous Container Queries:** Stat cards reshape automatically (e.g. detailed transactions tables collapse into list avatars when compressed, and graphs reveal when space allows).
- **Skeleton Loaders:** Simulates async data fetch using framework shimmers before replacing items.
- **System Color Preferences:** Integrates light/dark themes natively.

## Dashboard Sections

- **Weekly Revenue:** KPI values with trend logs and micro-bar charts.
- **Daily Active & Conversion:** Compact stats columns.
- **System Performance:** Circular animated progress ring with live latency readouts.
- **Recent Transactions:** Data grid that responds to card width constraints.
- **Activity Feed:** Vertical chronological timelines.

## EaseMotion Utilities Demonstrated

- `.ease-fade-in` — Linear opacity entrance reveals.
- `.ease-slide-up` — Transform translation slide-ins from bottom.
- `.ease-delay-100`, `.ease-delay-200`, `.ease-delay-300` — Staggered entrance animation orchestration.
- `.ease-hover-lift` — Card shadow elevations on cursor hover.
- `.ease-hover-grow` — Visual button sizing feedback on cursor hover.
- `.ease-skeleton-shimmer` — Loading skeleton sweep animations.
- `.ease-badge-pulse-ij` — Pulsing notification alerts.

## CSS Container Queries Explanation

Unlike standard media queries which look at viewport widths (e.g. `@media (max-width: 768px)`), CSS Container Queries inspect the parent container dimensions (e.g. `@container card-container (min-width: 400px)`). This makes components fully reusable across different sidebar or panel layout widths without style breakage.

## Accessibility

- Accessible landmarks (`nav`, `main`, `footer`, `section`, `article`).
- Screen-reader text labels.
- Sequenced focus controls.
- High-contrast focus state overlays.

## Responsive Behaviour

- **Desktops:** Grid items display columns and charts inline.
- **Tablets:** Grid adjusts to a two-column bento box.
- **Mobiles:** Elements stack vertically, collapsing tables to scroll lists.

## Browser Compatibility

- **CSS Container Queries:** Supported natively in Chrome 105+, Safari 16+, Firefox 110+, Edge 105+.
- **Graceful Degradation:** Legacy engines display default narrow-stack configurations safely.

## Reduced Motion Support

- Strips all skeleton sweeps, progress rolls, hover lifts, and slide-in entries when `prefers-reduced-motion: reduce` is configured.
