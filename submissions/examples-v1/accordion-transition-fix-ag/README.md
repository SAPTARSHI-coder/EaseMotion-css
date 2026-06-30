# Accordion Height Transition Fix (Issue #21061)

## What does this do?

Demonstrates a smooth accordion open/close animation using the `grid-template-rows: 0fr → 1fr` CSS transition technique, replacing the previous instant `display: none` / `display: block` toggle.

## How is it used?

```html
<div class="ease-accordion-item">
  <button class="ease-accordion-trigger" aria-expanded="false">
    Title
    <svg class="ease-accordion-icon">...</svg>
  </button>
  <div class="ease-accordion-content" role="region">
    <div class="ease-accordion-inner">
      <p>Panel content</p>
    </div>
  </div>
</div>
```

Toggle `.is-open` on `.ease-accordion-item` to expand/collapse. Also toggles `aria-expanded` on the button for accessibility.

## Why is it useful?

The current `.ease-accordion` uses `display: none` toggling which produces an abrupt, jarring transition with zero animation — directly contradicting EaseMotion CSS's core motion philosophy. The `grid-template-rows` technique is the most reliable CSS-only approach to smooth height animation: it requires no JavaScript height calculations, works for any content size, and degrades gracefully for users who prefer reduced motion.
