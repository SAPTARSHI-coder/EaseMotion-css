# Content Localization Readiness Table

## What does this do?

Track language readiness, reviewer ownership, blockers, and completion percentages.

## How is it used?

Link `style.css` and use the supplied semantic card markup. Status colors are controlled with item and status modifier classes:

```html
<article class="item-card item-card--warn">
  <span class="status status--warn">Due soon</span>
</article>
```

Available tone modifiers are `good`, `info`, `warn`, and `bad`.

## Why is it useful?

This adds a responsive CSS-only operational example for issue #25007, with semantic HTML, visible focus states, non-color status text, animated meters, and reduced-motion support.
