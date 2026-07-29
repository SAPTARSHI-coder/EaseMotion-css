# Search Suggestions

### What does this do?

It shows a search box that reveals a suggestions dropdown when the field is focused, with a recent searches group and a matching suggestions group. Each row has an icon, and matched text is highlighted. It works with no JavaScript.

### How is it used?

```html
<div class="search">
  <div class="search-box">
    <svg>...</svg>
    <input class="search-input" type="text" placeholder="Search" />
  </div>
  <div class="search-panel">
    <div class="search-group">Recent</div>
    <a class="search-item"><svg>...</svg>css transitions</a>
    <div class="search-group">Suggestions</div>
    <a class="search-item"><svg>...</svg>css <mark>grid</mark> layout</a>
  </div>
</div>
```

The panel is hidden until the wrapper contains focus, using `:focus-within`. Group headers label sections and `mark` highlights the matched part of a suggestion.

### Why is it useful?

Search bars show suggestions as you focus and type. This reveals a grouped suggestions panel on focus with icons and hover states, using only CSS. The reveal transition is reduced under reduced motion.
