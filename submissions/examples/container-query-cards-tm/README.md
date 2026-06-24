# Container Query Cards

## What does this do?
Provides card components that adapt their layout via CSS `@container` queries — responding to their parent container's width rather than the viewport — using EaseMotion CSS tokens for colours, spacing, radii, and shadows.

## How is it used?
Wrap cards in a `.cq-container` element. Add `.cq-card` for the base card, or `.cq-card-compact` / `.cq-card-featured` for variants. The card automatically adjusts layout at container widths of 400px and 600px.

```html
<div class="cq-container">
  <div class="cq-card">
    <div class="cq-icon">📦</div>
    <h3>Title</h3>
    <p>Description that reflows as the container grows.</p>
  </div>
</div>
```

## Why is it useful?
Container queries enable truly reusable components that adapt to wherever they're placed — sidebar, main content, or grid cell — without knowing the viewport size. This makes cards, panels, and widgets genuinely portable across layouts while maintaining consistent responsive behaviour.
