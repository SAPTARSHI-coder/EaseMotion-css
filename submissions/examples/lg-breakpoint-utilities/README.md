# Large-Screen (lg) Breakpoint Utilities

### What does this do?

Adds a complete set of `ease-lg-*` responsive utility classes for screens
≥ 1025px, completing the three-tier responsive system alongside the existing
`ease-sm-*` (≤ 768px) and `ease-md-*` (769–1024px) breakpoints.

### The gap

`core/utilities.css` currently ships:

| Prefix | Breakpoint |
|--------|-----------|
| `ease-sm-*` | `max-width: 768px` |
| `ease-md-*` | `769px – 1024px` |
| ~~`ease-lg-*`~~ | ~~`≥ 1025px`~~ — **missing** |

Without `lg` utilities, any layout that needs to behave differently on a wide
desktop monitor requires hand-written `@media` queries, abandoning the
utility-class system for the most common screen size.

### How is it used?

```html
<!-- 1 col on mobile → 2 on tablet → 4 on desktop -->
<div class="ease-grid ease-grid-cols-1 ease-md-grid-cols-2 ease-lg-grid-cols-4 ease-gap-6">
  <div class="ease-card">Item 1</div>
  <div class="ease-card">Item 2</div>
  <div class="ease-card">Item 3</div>
  <div class="ease-card">Item 4</div>
</div>

<!-- Sidebar: hidden on mobile & tablet, visible on desktop -->
<aside class="ease-sm-hidden ease-md-hidden ease-lg-block">
  Sidebar
</aside>

<!-- Stack on mobile, row on large screens -->
<div class="ease-flex ease-flex-col ease-lg-flex-row ease-gap-6">
  <main class="ease-flex-1">Main content</main>
  <aside style="width: 280px;">Sidebar</aside>
</div>
```

### Why is it useful?

EaseMotion CSS promotes "human-readable" utility classes. The responsive
system is incomplete without a large-screen breakpoint — real-world layouts
need at minimum three breakpoints (mobile, tablet, desktop). The `ease-lg-*`
utilities mirror the existing `ease-md-*` block exactly: same utility names,
same token references, different breakpoint value and prefix. Zero new concepts
for existing users to learn.
