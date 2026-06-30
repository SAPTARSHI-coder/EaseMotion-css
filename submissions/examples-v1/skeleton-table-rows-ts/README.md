# Skeleton Table Loading Rows

## What does this do?

Displays placeholder table rows with a horizontal shimmer sweep animation while tabular data (invoices, users, reports, etc.) is loading. The layout is kept stable at full width so the page does not shift when real data arrives.

## How is it used?

Wrap a `div.skeleton-table-wrapper` with `role="status"` and `aria-busy="true"` wherever your real table will appear. Inside, add a caption area, column-header placeholders, and as many `.skeleton-row` blocks as you need. Each row accepts `.skeleton-avatar`, `.skeleton-cell`, and `.skeleton-pill` children sized with `.wide`, `.mid`, or `.short` modifiers.

```html
<!-- Full table skeleton -->
<div class="skeleton-table-wrapper" role="status" aria-label="Loading invoices" aria-busy="true">

  <!-- Caption area -->
  <div class="skeleton-caption">
    <span class="skeleton-caption-title"></span>
    <span class="skeleton-caption-badge"></span>
  </div>

  <!-- Column header placeholders -->
  <div class="skeleton-col-header" aria-hidden="true">
    <span class="skeleton-col-label wide"></span>
    <span class="skeleton-col-label mid"></span>
    <span class="skeleton-col-label short"></span>
    <span class="skeleton-col-label short"></span>
  </div>

  <!-- Data rows (repeat as needed) -->
  <div class="skeleton-row" aria-hidden="true">
    <span class="skeleton-avatar"></span>
    <span class="skeleton-cell wide"></span>
    <span class="skeleton-cell mid"></span>
    <span class="skeleton-pill"></span>
    <span class="skeleton-cell short"></span>
  </div>

  <!-- Footer pagination area -->
  <div class="skeleton-footer" aria-hidden="true">
    <span class="skeleton-footer-count"></span>
    <div class="skeleton-footer-pages">
      <span class="skeleton-page-dot"></span>
      <span class="skeleton-page-dot"></span>
      <span class="skeleton-page-dot"></span>
    </div>
  </div>
</div>
```

Cell width modifiers:

| Modifier | Approximate width |
|----------|-------------------|
| `.wide`  | 38%               |
| `.mid`   | 22%               |
| `.short` | 14%               |

When data loads, remove the skeleton wrapper (or hide it with `display: none`) and render the real `<table>` in its place. Set `aria-busy="false"` on the wrapper before removing it so assistive technologies announce the state change.

## Why is it useful?

Tables are common in dashboards and admin panels. A blank area or sudden layout jump while data loads feels broken. This skeleton holds the exact column structure in place so the page stays visually stable, and the shimmer sweep communicates that loading is actively in progress — not stalled. The staggered row delays give a natural top-to-bottom reveal feel without any JavaScript.

**Accessibility:** All decorative skeleton elements carry `aria-hidden="true"`. The wrapper uses `role="status"` and `aria-busy="true"` so screen readers announce the loading state without reading out meaningless placeholder shapes.

**Reduced motion:** When `prefers-reduced-motion: reduce` is set, all animations are disabled. The placeholder shapes remain visible as static neutral blocks so the layout is still communicated without motion.

**Dark mode:** Color tokens flip automatically via `prefers-color-scheme: dark` with no extra classes needed.
