# ease-card-horizontal Mobile Fix

**Fixes:** [#5167](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/5167)  
**File affected:** `components/cards.css`

---

## Problem

`.ease-card-horizontal` uses `flex-direction: row` with no responsive
breakpoint. On mobile viewports under 600px, content overflows or gets
squeezed because the row layout never switches to a column stack.

The existing `.ease-sm-flex-col` utility in `utilities.css` could work
as a manual workaround, but it is not applied by default and is not
documented anywhere near the card component.

---

## Fix

Add a `@media (max-width: 600px)` breakpoint to `components/cards.css`
that switches `.ease-card-horizontal` to `flex-direction: column` and
makes the image full width.

```css
@media (max-width: 600px) {
  .ease-card-horizontal {
    flex-direction: column;
    padding: 0;
  }

  .ease-card-horizontal .ease-card-img,
  .ease-card-horizontal img {
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
    border-radius:
      var(--ease-radius-lg)
      var(--ease-radius-lg)
      0 0;
  }
}
```

---

## Demo

Open `demo.html` and resize your browser to under 600px wide to see
the before/after difference live.

---

## Checklist

- [x] No breaking changes on desktop
- [x] Mobile layout stacks cleanly without overflow
- [x] Image maintains aspect ratio on mobile
- [x] Follows existing EaseMotion breakpoint patterns
- [x] Includes `demo.html`, `style.css`, `README.md`