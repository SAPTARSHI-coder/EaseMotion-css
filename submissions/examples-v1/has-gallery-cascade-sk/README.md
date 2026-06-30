# :has() Parent Selector Gallery Hover Cascade

Uses CSS `:has()` to let a parent container react to descendant hover state — dimming all sibling items when any one child is hovered. Zero JavaScript.

## Variants

| Variant | Effect on hover | Selector pattern |
|---------|-----------------|------------------|
| Photo gallery | Hovered item scales up, siblings dim + shrink | `:has(.item:hover) .item:not(:hover)` |
| Card list | Hovered card slides left, siblings slide right | `:has(.card:hover) .card:not(:hover)` |
| Tag cloud | Hovered tag scales up, siblings shrink + dim | `:has(.tag:hover) .tag:not(:hover)` |

## Key selector pattern

```css
/* Parent reacts when any child is hovered */
.ease-gallery:has(.item:hover) .item:not(:hover) {
  opacity: 0.38;
  transform: scale(0.94);
}

/* Active (hovered) item */
.ease-gallery:has(.item:hover) .item:hover {
  transform: scale(1.06);
  z-index: 1;
}
```

The two-part pattern:
1. `.parent:has(.child:hover)` — selects the parent when any `.child` inside it is hovered
2. `.child:not(:hover)` — within that context, targets all children that are NOT the hovered one

## Why `:has()` over JavaScript

Before `:has()`, cross-sibling state animations required JavaScript to toggle a class on the parent (`gallery.classList.add('has-hover')`). With `:has()`, the browser's selector engine handles it natively — no event listeners, no JS bundle cost.

## CSS custom properties

```css
:root {
  --ease-scale-active: 1.06;
  --ease-scale-dim: 0.94;
  --ease-opacity-dim: 0.38;
  --ease-transition: 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
```

## Accessibility

`prefers-reduced-motion: reduce` removes all transitions. The items remain fully interactive without motion.

```css
@media (prefers-reduced-motion: reduce) {
  .ease-gallery .item,
  .ease-card-list .card,
  .ease-tag-cloud .tag { transition: none; }
}
```
