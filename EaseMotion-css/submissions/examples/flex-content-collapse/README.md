# EaseMotion Flex Container Collapse & Asset Shrinkage Guard

This example demonstrates how to resolve cross-browser dynamic flex container collapse and graphic asset shrinkage during content text wrapping.

## 🐛 The Bug: Graphic Shrinkage & Wrapping Failures

In flexbox layouts where text containers sit next to fixed-size graphic components (like icons, badges, or avatars), browsers can experience rendering glitches when text content grows:

1. **Graphic Shrinkage**: Because flex items default to `flex-shrink: 1`, the browser will compress the fixed-size graphic badge into an ugly, narrow shape rather than wrapping the text when space gets constrained.
2. **Layout Container Collapse**: Flex containers resolve space dynamically. If a text container does not specify an explicit boundary or minimum width (like `min-width: 0`), standard browsers assume `min-width: auto` (which resolves to the minimum size of the longest word/element). This prevents long strings of text from wrapping correctly, leading to overflow or layout collapse.

```css
/* ❌ Bugged state: lacks shrink shield and min-width boundaries */
.bugged-card-state .ease-graphic-badge {
  background: rgba(255, 74, 90, 0.1);
  color: var(--ease-accent-alert);
  border: 1px dashed var(--ease-accent-alert);
}
```

## 🛠️ The Solution: Double Guard Shields

To stabilize the flex container and prevent asset deformation, two guards are applied:

1. **`flex-shrink: 0` (On Graphic Asset)**: Prevents the layout engine from compressing the graphic badge element below its defined layout width and height, preserving its square/circular shape.
2. **`min-width: 0` (On Text Container)**: Overrides the browser's default `min-width: auto` behavior, signaling to the browser layout engine that the text block can shrink below its content size. This triggers standard word wrapping instead of stretching the parent container.

```css
/* ✅ Guarded Graphic Shield */
.ease-flex-graphic-shield {
  background: rgba(0, 230, 118, 0.1);
  color: var(--ease-accent-fixed);
  border: 1px solid var(--ease-accent-fixed);

  /* Crucial Fix: Stops the browser from warping visual asset blocks */
  flex-shrink: 0;
}

/* ✅ Guarded Text Block */
.ease-flex-text-guard {
  /* Crucial Fix: Prevents layout collapse loops and forces text wrap */
  min-width: 0;
  flex-grow: 1;
}
```

## 📁 Files Created

- [style.css](file:///C:/Users/Fujitsu/.gemini/antigravity/scratch/EaseMotion-css/submissions/examples/flex-content-collapse/style.css) — Custom stylesheet containing root variables, flex layouts, and stabilization guard classes.
- [demo.html](file:///C:/Users/Fujitsu/.gemini/antigravity/scratch/EaseMotion-css/submissions/examples/flex-content-collapse/demo.html) — Side-by-side comparison illustrating bugged collapse vs. guarded layout.
