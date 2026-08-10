# Fix: Prevent Breadcrumb Text Wrapping Unexpectedly

**Resolves issue [#55884](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/55884)**

---

## 1. What does this do?

Prevents breadcrumb navigation items from wrapping onto multiple lines when labels are long or the viewport is narrow, offering three progressive strategies: horizontal scroll, ellipsis truncation, and collapsing middle items on mobile.

---

## 2. How is it used?

### Strategy 1 — Nowrap + horizontal scroll
Items always stay on one row; the container scrolls horizontally if they overflow.

```html
<nav aria-label="Page navigation">
  <ol class="breadcrumb-fixed">
    <li><a href="#">Home</a></li>
    <li><span class="sep">/</span><a href="#">Components</a></li>
    <li><span class="sep">/</span><a href="#">Very Long Label That Would Normally Wrap</a></li>
    <li><span class="sep">/</span><span class="current">Current Page</span></li>
  </ol>
</nav>
```

### Strategy 2 — Truncation with ellipsis
Long labels are clipped at a max-width and end with `…`.

```html
<nav aria-label="Page navigation">
  <ol class="breadcrumb-truncate">
    <li><a href="#">Home</a></li>
    <li><span class="sep">/</span><a href="#">Very Long Middle Section Label</a></li>
    <li><span class="sep">/</span><span class="current">Current Page</span></li>
  </ol>
</nav>
```

### Strategy 3 — Collapse middle items on mobile
On viewports ≤ 420 px, intermediate items are hidden and replaced by `…`.

```html
<nav aria-label="Page navigation">
  <ol class="breadcrumb-collapse">
    <li><a href="#">Home</a></li>
    <li><span class="sep">/</span></li>

    <!-- shown only on small screens -->
    <li class="ellipsis"><span class="ellipsis-dot">…</span><span class="sep">/</span></li>

    <!-- hidden on small screens -->
    <li class="collapsible"><a href="#">Section</a><span class="sep">/</span></li>
    <li class="collapsible"><a href="#">Sub-section</a><span class="sep">/</span></li>

    <li><span class="current">Current Page</span></li>
  </ol>
</nav>
```

---

## 3. Why is it useful?

The existing `ease-breadcrumb-list` uses `display: flex` without `flex-wrap: nowrap`, so items fall to a second (or third) line on narrow screens — breaking the navigation layout and making it hard to read.

This submission demonstrates three targeted fixes that address the root cause at different levels of complexity:

| Strategy | CSS technique | Best for |
|---|---|---|
| **Nowrap + scroll** | `flex-wrap: nowrap` + `overflow-x: auto` | Short-to-medium labels; mobile-friendly swipe scroll |
| **Truncation** | `text-overflow: ellipsis` + `max-width` | Deep hierarchies with potentially very long labels |
| **Collapse** | `display: none` on `.collapsible` via `@media` | Very deep paths where middle context is less important |

### Key CSS properties per strategy

**Strategy 1 (scroll):**
```css
.breadcrumb-fixed {
  flex-wrap: nowrap;          /* never wrap */
  overflow-x: auto;           /* scroll when overflow */
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}
.breadcrumb-fixed li {
  flex-shrink: 0;             /* don't squish items */
  white-space: nowrap;        /* keep each item on one line */
}
```

**Strategy 2 (truncate):**
```css
.breadcrumb-truncate {
  flex-wrap: nowrap;
  overflow: hidden;
}
.breadcrumb-truncate li a,
.breadcrumb-truncate li .current {
  max-width: 10rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;    /* "…" when text overflows */
}
```

**Strategy 3 (collapse):**
```css
@media (max-width: 420px) {
  .breadcrumb-collapse li.collapsible { display: none; }
  .breadcrumb-collapse li.ellipsis    { display: inline-flex; }
}
```

Together these patterns satisfy the expected behaviour described in the issue:
> "Breadcrumb items should remain visually consistent with proper spacing. Long labels should be handled gracefully (e.g., by truncation or controlled overflow) without breaking the navigation layout."
