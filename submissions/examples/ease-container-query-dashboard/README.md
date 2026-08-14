# Container Query Micro-Architecture Dashboard Card

## Abstract

This module demonstrates a modular dashboard card component built using modern CSS Container Queries (`@container`) and Container Query Units (`cqw`). By establishing a self-contained responsive ecosystem, the widget automatically morphs its macro-layout and typography based on the available width of its parent container rather than the global viewport viewport size.

## Killing Media Queries

Traditional `@media` queries bind element responsiveness directly to the browser viewport dimensions. This tightly coupled relationship breaks component reusability across complex user interfaces: a widget rendered within a narrow sidebar behaves identically to one rendered in the primary content column if both exist at the same viewport breakpoint.

By declaring `container-type: inline-size` and naming the containment context via `container-name: dashboard`, the widget decouples itself entirely from global window constraints:

```css
.ease-dashboard-widget {
  container-type: inline-size;
  container-name: dashboard;
}
```

With `@container dashboard (min-width: 800px)`, the internal macro-layout dynamically transitions from a stacked list view to a panoramic side-by-side view based purely on the parent container's width. Whether placed in a 300px sidebar or a 1000px wide panel, the card autonomously adapts to its allotted allocation.

## Container Query Width (CQW) Typography

Fluid typography via `vw` units suffers from viewport binding issues. Using `cqw` (Container Query Width) units combined with CSS `clamp()`, font sizes dynamically scale according to the container's inline size:

```css
.ease-metric-value {
  font-size: clamp(1.25rem, 4cqw, 2rem);
}
```

This guarantees optimal readability and proportion across all container dimensions without triggering overflow or requiring separate breakpoint overrides.
