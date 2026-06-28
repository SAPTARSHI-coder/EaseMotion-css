# EaseMotion Grid Frame Overflow & Text Truncation Ellipsis Guard

This example demonstrates how to resolve cross-browser grid frame overflow and text truncation ellipsis computation failure inside fluid layouts.

## 🐛 The Bug: Grid Track Expansion & Ellipsis Failure

When working with CSS Grid layouts (e.g., `grid-template-columns: repeat(3, 1fr)`), columns can overflow their parent container or push out of alignment when populated with long, non-wrapping text strings.

Even if the text elements have truncation styles applied:

```css
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
```

The truncation will fail and the columns will expand. This happens because:

1. **Implicit Minimum Track Size**: The `1fr` unit in CSS Grid is a shorthand for `minmax(auto, 1fr)`. The default `auto` behavior resolves to the minimum width of the cell's content. If the content contains an unbroken string of text, the browser layout engine expands the grid track to accommodate the text width instead of truncating it.
2. **Missing Card Sizing Context**: Grid items need to be allowed to shrink. Without setting an explicit minimum size (`min-width: 0` or `overflow: hidden`) on the direct grid items, the layout engine cannot establish standard boundaries to calculate text limits.

```css
/* ❌ Bugged state: implicit minmax auto behavior splits column integrity */
.bugged-grid-layout {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

## 🛠️ The Solution: Stabilized Grid Column Guard

To stabilize columns and force text truncation ellipsis:

1. **`minmax(0, 1fr)`**: Replaces `1fr` inside `grid-template-columns`. The minimum bound of `0` overrides the browser's default `auto` minimum content sizing, permitting grid tracks to shrink below their contents.
2. **`min-width: 0` (On Card Element)**: Applied to the direct child elements of the grid tracks. This enables the grid cells to contract alongside the grid column track, creating a stable box context so that the text node's `text-overflow: ellipsis` rules can trigger.

```css
/* ✅ Guarded Grid Track */
.ease-grid-layout {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

/* ✅ Guarded Card element */
.ease-grid-card {
  min-width: 0;
}
```

## 📁 Files Created

- [style.css](file:///C:/Users/Fujitsu/.gemini/antigravity/scratch/EaseMotion-css/submissions/examples/text-overflow-collapse/style.css) — Custom stylesheet containing root variables, grid layouts, and ellipsis guard classes.
- [demo.html](file:///C:/Users/Fujitsu/.gemini/antigravity/scratch/EaseMotion-css/submissions/examples/text-overflow-collapse/demo.html) — Side-by-side comparison illustrating bugged grid overflow vs. guarded layout.
