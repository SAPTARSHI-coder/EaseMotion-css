# CSS Line Grid Typography Utilities

Relates to feature request **#41316**.

## 1. What does this do?

Introduces utility classes inspired by the CSS Line Grid specification to align text, headings, lists, and other typographic elements to a consistent baseline rhythm. Uses CSS grid with the `lh` length unit so every child is automatically spaced by exactly one line-height unit — no manual margin math.

## 2. Why is this useful for EaseMotion CSS?

Consistent baseline alignment is essential for editorial layouts, documentation, and design systems, but it usually requires manual calculations. Native-inspired line grid utilities would help developers build visually balanced interfaces while keeping typography predictable and maintainable.

## 3. Utilities Provided

| Class | `line-height` | `row-gap` | Best For |
|---|---|---|---|
| `.ease-line-grid` | `1.75` | `calc(1lh)` | Body text, general articles |
| `.ease-line-grid-sm` | `1.5` | `calc(1lh)` | Sidebars, data tables, API docs |
| `.ease-line-grid-lg` | `2.0` | `calc(1lh)` | Editorial, long-form reading |

## 4. How is it used?

**HTML** (matching the issue's snippet exactly)
```html
<article class="ease-line-grid">
  <h2>Baseline Grid</h2>
  <p>
    Typography automatically aligns to a consistent vertical rhythm.
  </p>
</article>
```

**CSS** (matching the issue's snippet exactly)
```css
.ease-line-grid {
  line-height: 1.75;
  display: grid;
  row-gap: calc(1lh);
}

.ease-line-grid > * {
  margin: 0;
}
```

## 5. What is the `lh` unit?

The `lh` CSS length unit equals the computed `line-height` of the element. `calc(1lh)` therefore always equals exactly **one line of space**, keeping every child spaced by a single baseline unit regardless of font size.

| Browser | `lh` unit support |
|---|---|
| Chrome | 109+ |
| Firefox | 120+ |
| Safari | 17.2+ |
| Edge | 109+ |

> **Tip**: The `> * { margin: 0; }` rule is important — it removes browser-default margins so only the grid's `row-gap` controls vertical spacing. Without it, you'd get double gaps between elements.
