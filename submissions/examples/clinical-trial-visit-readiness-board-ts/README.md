# Clinical Trial Visit Readiness Board

## What does this do?

Track protocol windows, required documents, ownership, and visit readiness using fictional study data.

## How is it used?

Link `style.css` and use the supplied workspace markup with explicit status modifiers:

```html
<span class="status status--warn">Needs review</span>
```

Available status modifiers are `status--good`, `status--info`, `status--warn`, `status--bad`, and `status--neutral`.

## Why is it useful?

It provides a responsive CSS-only operational pattern with semantic content, readable non-color status cues, visible keyboard focus, and reduced-motion support.
