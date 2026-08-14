# Compliance Evidence Upload Checklist

## What does this do?

Track compliance evidence uploads by document type, owner, expiry, and reviewer signoff.

## How is it used?

Link `style.css` and use the supplied card markup with tone modifiers:

```html
<article class="item-card item-card--warn">
  <span class="status status--warn">Pending</span>
</article>
```

Available tone modifiers are `good`, `info`, `warn`, and `bad`.

## Why is it useful?

This adds a responsive CSS-only operational example for issue #25068, with semantic HTML, visible focus states, non-color status labels, animated progress meters, and reduced-motion support.
