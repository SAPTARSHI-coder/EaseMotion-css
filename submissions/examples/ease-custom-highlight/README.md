# CSS Custom Highlight API Implementation (#70790)

## 1. What does this do?
This component demonstrates real-time text search highlighting using the modern **CSS Custom Highlight API** (`::highlight()`). It highlights query matches live within a text container without inserting auxiliary markup into the DOM tree.

## 2. How is it used?
1. **JavaScript Coordinate Mapping**: JavaScript is strictly relegated to querying `Range` objects corresponding to matching text indices using `TreeWalker` and `Range.setStart()` / `Range.setEnd()`.
2. **Registry**: Range objects are grouped into a `Highlight` instance and registered via `CSS.highlights.set('ease-search-glow', searchHighlight)`.
3. **CSS Styling**: Styling is declared entirely in CSS via the `::highlight(ease-search-glow)` pseudo-element:
```css
::highlight(ease-search-glow) {
  background-color: #3b82f6;
  color: #ffffff;
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
}
```

## 3. Why is it useful?
Legacy search-highlight implementations modify the DOM by wrapping target substring nodes inside elements like `<span class="highlight">`. This forces expensive browser re-flows, style recalculations, and DOM thrashing.

The **CSS Custom Highlight API** enables styling arbitrary text ranges directly on the browser's paint stage without mutating DOM nodes, achieving optimal performance and zero layout disruption.
