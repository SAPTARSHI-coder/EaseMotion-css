# Document Review Version Comparison

## What does this do?

Compare revisions with readable change labels and reviewer context.

## How is it used?

Link `style.css`, then use the dashboard structure and state modifiers:

```html
<article class="status-row status-row--watch">
  <span class="status-label">Attention needed</span>
  <h2>Example item</h2>
</article>
```

Available state modifiers are `status-row--steady`, `status-row--done`, `status-row--watch`, and `status-row--risk`.

## Why is it useful?

It provides a responsive, CSS-only operational pattern with readable state labels, visible progress, keyboard focus treatment, and a reduced-motion fallback.
