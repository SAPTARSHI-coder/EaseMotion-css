# Policy Exception Expiry Calendar

## What does this do?

Show policy exception expiries by week, business owner, control, renewal state, and stale risk.

## How is it used?

Link `style.css` and use the supplied semantic card markup. Status colors are controlled with item and status modifier classes:

```html
<article class="item-card item-card--warn">
  <span class="status status--warn">Needs review</span>
</article>
```

Available tone modifiers are `good`, `info`, `warn`, and `bad`.

## Why is it useful?

This adds a responsive CSS-only operational example for issue #25828, with semantic HTML, visible focus states, non-color status labels, animated progress meters, and reduced-motion support.
