# EaseMotion Flex-Wrap Row Collision & Target Overlap Guard

This example demonstrates how to resolve cross-browser flex-wrap row collision, line-gap bleeding, and interactive target overlap inside fluid badge grids.

## 🐛 The Bug: Row Collision & Hover Overlaps

When styling flex items (like tags, badges, or chips) inside a container that has `flex-wrap: wrap` enabled:

1. **Lack of Vertical Spacing**: If spacing is only applied horizontally (or if inline line-heights collapse), the rows of wrapped elements will touch or collide vertically.
2. **Interactive Overlap**: When elements have interactive states (such as `:hover` scaling, transforms, outline glows, or borders), the lack of line spacing causes hovered items to bleed into and overlap the active target areas of neighboring items in adjacent rows, rendering clicks inaccurate.

```css
/* ❌ Bugged state: lacks explicit row gaps, causing item row collision */
.bugged-wrap-container {
  display: flex;
  flex-wrap: wrap;
  line-height: 0.7;
}
```

## 🛠️ The Solution: Isolated Multi-Row Gaps

To isolate wrapped lines and maintain interactive integrity:

1. **Explicit Row and Column Gaps**: Declaring a two-value gap shorthand (e.g. `gap: 1.1rem 1.25rem`) defines separate column-axis and row-axis spacing boundaries, keeping wrapped rows separated.
2. **`align-content: flex-start`**: Instructs the layout engine to pack wrapped lines tightly at the start of the container, avoiding flexible spacing stretching while ensuring that row gap metrics remain constant.

```css
/* ✅ Guarded Multi-Row Flex Wrapper */
.ease-wrapped-row-guard {
  display: flex;
  flex-wrap: wrap;

  /* Crucial Fix 1: Separate row-axis and column-axis gap coordinates */
  gap: 1.1rem 1.25rem;

  /* Crucial Fix 2: Anchors alignment planes to prevent collapse loops */
  align-content: flex-start;
  border: 1px solid var(--ease-accent-fixed);
}
```

## 📁 Files Created

- [style.css](file:///C:/Users/Fujitsu/.gemini/antigravity/scratch/EaseMotion-css/submissions/examples/wrapped-line-bleed/style.css) — Custom stylesheet containing root variables, badge chip buttons, and flex wrap boundary classes.
- [demo.html](file:///C:/Users/Fujitsu/.gemini/antigravity/scratch/EaseMotion-css/submissions/examples/wrapped-line-bleed/demo.html) — Side-by-side comparison illustrating tag row collision vs. guarded layout.
