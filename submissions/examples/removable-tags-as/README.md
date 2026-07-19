# Removable Tag Pills

### What does this do?

It shows a row of tag pills, each with a remove control that collapses the tag away when clicked.

### How is it used?

```html
<span class="tag-wrap">
  <input type="checkbox" id="t1" class="tag-remove" />
  <span class="tag">Design <label for="t1" class="tag-x" aria-label="Remove Design">&times;</label></span>
</span>
```

The remove control is a `label` for a hidden checkbox that sits just before the tag. Clicking it checks the box, and the adjacent tag collapses with a transition.

### Why is it useful?

Removable tags are common in filters, token inputs, and selected item lists. This collapses a tag on the remove action driven by the `:checked` state, so it needs no JavaScript. The remove control has an accessible label and a focus ring, and the collapse is softened under `prefers-reduced-motion: reduce`.
