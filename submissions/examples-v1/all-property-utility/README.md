## All Property Utility

**What does this do?**  
Utility classes for the CSS `all` shorthand, which resets every CSS property on an element at once.

**How is it used?**  
Add `all-initial`, `all-unset`, `all-revert`, or `all-revert-layer` to reset all properties:

```html
<div class="all-unset">Completely unstyled element</div>
```

**Why is it useful?**  
When embedding third-party widgets, rich text content, or any HTML where inherited styles leak in, the `all` property provides a clean slate. These utilities make it trivial to reset all styles on a container, creating a reliable isolation boundary without manually overriding every property.
