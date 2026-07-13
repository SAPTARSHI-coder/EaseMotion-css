# Pagination Controls

### What does this do?

It shows a pagination bar with previous and next arrows and numbered page buttons. Clicking a number highlights it as the current page. The numbers are radio inputs, so the active page is real and keyboard operable, with no JavaScript.

### How is it used?

```html
<nav class="pager" aria-label="Pagination">
  <button class="pager-arrow" type="button">Prev</button>
  <label><input type="radio" name="page" checked /><span>1</span></label>
  <label><input type="radio" name="page" /><span>2</span></label>
  <span class="gap">...</span>
  <button class="pager-arrow" type="button">Next</button>
</nav>
```

Every page input shares the same `name`, so only one is active. Use `span class="gap"` to show a break between page ranges.

### Why is it useful?

Paginated lists and tables need a clear page switcher. This styles an accessible pagination bar where the active page is driven by a checked radio, using only CSS. Each page tile has hover and focus states and the transitions are removed under reduced motion.
