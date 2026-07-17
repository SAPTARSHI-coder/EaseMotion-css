# EaseMotion Flex Wrapped Orphans Gap & Spacing Guard

This example demonstrates how to resolve flexbox wrapped orphan element alignment distortion and asymmetric item spacing on narrow mobile viewports.

## 🐛 The Bug: Asymmetric Gap & Stretching

When building responsive layouts (such as item grids or chip groups) using CSS Flexbox with `flex-wrap: wrap` and `justify-content: space-between`, rows that do not have enough elements to fill the line (orphans) align poorly.

Instead of matching the grid composition of the previous row, the browser distributes the empty space between the remaining elements. This leads to:

- Large gaps in the center of the bottom row.
- Items pushed to the extreme left and right margins.
- Asymmetrical layout structure on mobile screen viewports.

```css
/* ❌ Bugged flex wrapping layout */
.bugged-flex-wrap-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
}
```

## 🛠️ The Solution: Balanced Flex Guard

To maintain cohesive visual grids and consistent spacing even when wrapping happens:

1. **`justify-content: flex-start`**: Anchors wrapped elements to the left, matching standard grid alignment.
2. **Dedicated `gap` Sizing**: Enforces consistent margins between items, making sure they never touch or separate too far.
3. **`@supports (grid-template-columns: subgrid)` Fallback**: Uses modern CSS Grid structure where available to auto-fill cells and preserve absolute column alignment across wrapped rows.

```css
/* ✅ Stabilized flex-wrap layout */
.ease-flex-wrap-guard {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 1.25rem;
}

@supports (grid-template-columns: subgrid) {
  .ease-flex-wrap-guard {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  }
}
```

## 📁 Files Created

- [style.css](file:///C:/Users/Fujitsu/.gemini/antigravity/scratch/EaseMotion-css/submissions/examples/flex-orphan-alignment/style.css) — Custom stylesheet containing root variables, flex layouts, and stabilization guard classes.
- [demo.html](file:///C:/Users/Fujitsu/.gemini/antigravity/scratch/EaseMotion-css/submissions/examples/flex-orphan-alignment/demo.html) — Side-by-side comparison illustrating bugged spacing vs. guarded spacing.
