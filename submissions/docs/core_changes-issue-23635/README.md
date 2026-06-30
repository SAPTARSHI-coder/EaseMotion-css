# Marquee Reduced Motion Fix

## 1. What does this do?

Fixes the marquee component (`components/ease-marquee.css`) to properly respect `prefers-reduced-motion: reduce`. The existing code only set `animation: none`, which stopped the scroll but left the content overflowing as inline-flex. This fix wraps the content into a static centered layout when reduced motion is active.

**CSS change:**

```css
@media (prefers-reduced-motion: reduce) {
  .ease-marquee .ease-marquee-track {
    animation: none !important;
    flex-wrap: wrap !important;
    justify-content: center !important;
    gap: var(--marquee-gap, 2rem) !important;
  }
}
```

## 2. How is it used?

No markup changes required. The fix is triggered automatically when the user enables "Reduce Motion" in their OS accessibility settings.

```html
<div class="ease-marquee">
  <div class="ease-marquee-track">
    <span>Item 1</span>
    <span>Item 2</span>
    <span>Item 3</span>
  </div>
</div>
```

## 3. Why is this useful?

- **WCAG 2.1 SC 2.3.3** — Animation from interactions can be disabled
- **No overflow** — Content displays as a static wrapped layout instead of clipping
- **Centered layout** — Items remain visible and readable
- **Zero JS** — Pure CSS solution
