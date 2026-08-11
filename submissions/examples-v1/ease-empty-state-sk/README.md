# Empty State Components

> CSS-only placeholder states for empty search results, blank dashboards, 404 pages, empty lists, and inbox zero. Self-contained blocks with icon, heading, description, and optional action.

## What does this do?

A collection of reusable empty/blank state components that serve as placeholders when there's no data to display. Each variant includes a semantic structure: an illustration icon area, heading, descriptive text, and an optional call-to-action button. Pure CSS — no JavaScript required.

## How is it used?

```html
<div class="empty-state">
  <div class="empty-state-icon">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  </div>
  <h3 class="empty-state-heading">No results found</h3>
  <p class="empty-state-description">Try adjusting your search or filter criteria.</p>
  <button class="empty-state-action">Clear Filters</button>
</div>
```

### Variants

| Class | Description |
|-------|-------------|
| `empty-state` | Base empty state with dashed border |
| `empty-state-card` | Solid card with subtle shadow |
| `empty-state-404` | Large 404 page with oversized status code |
| `empty-state-inline` | Horizontal layout for narrow sidebars and panels |
| `empty-state-minimal` | Borderless, no background — for embedding in content areas |
| `empty-state-action` | Primary CTA button (filled, white text) |
| `empty-state-action-empty` | Ghost/outline secondary action |
| `empty-state-grid` + `empty-state-grid-item` | Placeholder card grid for empty dashboards |

### Structure

| Class | Purpose |
|-------|---------|
| `empty-state-icon` | Circular icon container with accent-tinted background |
| `empty-state-heading` | Bold heading (e.g., "No results found") |
| `empty-state-description` | Muted descriptive text |
| `empty-state-action` | Primary filled button |
| `empty-state-action-empty` | Outline/ghost button |
| `empty-state-code` | Large status code for 404/500 pages |

## Why is it useful?

Empty states are one of the most overlooked UI patterns. Every app has them — search with no results, empty inboxes, blank dashboards, 404 errors — yet EaseMotion CSS has no empty state component in core. This submission fills that gap with:

- **7 distinct variants** in one submission — no results, inbox zero, empty dashboard (with animated placeholder cards), 404 page, empty list, inline compact, and minimal
- **Pure CSS** — the placeholder card animation uses a simple `opacity` keyframe for the dashboard variant, but everything else is static CSS with no JS dependency
- **Dark mode** via `prefers-color-scheme: dark` — all colors, borders, and shadows adapt
- **`prefers-reduced-motion` respect** — placeholder animations disable when user prefers reduced motion
- **Responsive** — inline variant stacks vertically on mobile, grid collapses to single column
- **Composable** — mix and match icon, heading, description, and action classes independently

This follows EaseMotion's philosophy: self-documenting class names, CSS custom properties for theming, zero dependency, and progressive enhancement.
