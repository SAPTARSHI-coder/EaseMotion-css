# Fix: Pagination Buttons Wrapping on Mobile

**Resolves issue [#55887](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/55887)**

---

## 1. What does this do?

Prevents pagination buttons from wrapping onto multiple lines on narrow screens by keeping the flex container on a single row and enabling horizontal scrolling when the buttons exceed the available width.

---

## 2. How is it used?

Apply `.pagination-fixed` to the `<nav>` (or any container) wrapping your pagination buttons:

```html
<nav class="pagination-fixed" aria-label="Page navigation">
  <button disabled>Previous</button>
  <button class="active">1</button>
  <button>2</button>
  <button>3</button>
  <button>4</button>
  <button>5</button>
  <button>6</button>
  <button>7</button>
  <button>Next</button>
</nav>
```

Optional size modifiers:

```html
<!-- Smaller buttons -->
<nav class="pagination-fixed sm"> … </nav>

<!-- Larger buttons -->
<nav class="pagination-fixed lg"> … </nav>
```

---

## 3. Why is it useful?

The existing `ease-pagination` component uses `display: flex` without explicitly setting `flex-wrap: nowrap`, so on mobile the buttons fall onto a second or third line — breaking the layout and making navigation unusable.

This fix applies three targeted CSS properties to the container:

| Property | Value | Reason |
|---|---|---|
| `flex-wrap` | `nowrap` | Keeps all buttons on one row |
| `overflow-x` | `auto` | Scrolls horizontally when buttons exceed the width |
| `-webkit-overflow-scrolling` | `touch` | Smooth momentum scroll on iOS |

And one property to every button:

| Property | Value | Reason |
|---|---|---|
| `flex-shrink` | `0` | Prevents buttons from being squished narrower than their content |
| `white-space` | `nowrap` | Keeps "Previous" / "Next" text on one line |

Together these changes satisfy the expected behaviour described in the issue:
> "Pagination controls should remain on a single row with consistent spacing. If there is insufficient space, the container should allow horizontal scrolling."

The scrollbar is hidden visually (`scrollbar-width: none` + `::-webkit-scrollbar { display: none }`) while remaining fully functional for touch and mouse scroll, keeping the UI clean.

---

## CSS changes summary

```css
/* Container */
.pagination-fixed {
  display: flex;
  flex-wrap: nowrap;          /* never wrap to a second line */
  overflow-x: auto;           /* scroll when content overflows */
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}
.pagination-fixed::-webkit-scrollbar { display: none; }

/* Each button */
.pagination-fixed button {
  flex-shrink: 0;             /* don't squish below min-width */
  white-space: nowrap;        /* keep "Previous"/"Next" on one line */
}
```
