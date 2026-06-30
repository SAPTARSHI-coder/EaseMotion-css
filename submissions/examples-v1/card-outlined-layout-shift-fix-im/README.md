# .ease-card-outlined Layout Shift Fix

## What's the bug?

`components/cards.css` defines:

- `.ease-card { border: 1px solid }`
- `.ease-card-outlined { border: 2px solid }`

Dynamically toggling `.ease-card-outlined` (e.g. to indicate a selected state) changes `border-width` from 1px → 2px, causing a 1px layout shift on all four sides. This displaces surrounding content and degrades Core Web Vitals CLS scores — confirmed via Chrome's Layout Shift DevTools overlay.

## The fix

Replace `.ease-card-outlined`'s `border: 2px` with `outline`, which sits outside the box model and **never affects layout**:

```css
/* BEFORE (broken) */
.ease-card-outlined {
  background-color: transparent;
  border: 2px solid var(--ease-color-neutral-200, #e2e8f0);
}

/* AFTER (fixed) */
.ease-card-outlined {
  background-color: transparent;
  border-color: transparent;
  outline: 2px solid var(--ease-color-primary, #6c63ff);
  outline-offset: -1px;
}
```

`outline-offset: -1px` pulls the outline inward so it visually aligns with where the 1px border was — the card's occupied space is identical before and after the modifier is toggled.

## Demo

`demo.html` shows two side-by-side live grids:

- **Before** — clicking a card adds the broken `border: 2px` style; surrounding cards visibly shift
- **After** — clicking a card adds the fixed `outline` style; surrounding cards stay perfectly still

## Why this matters

Selection states (click-to-select cards, interactive pricing tables, product pickers) are the most common use case for `.ease-card-outlined`. Applying it dynamically is exactly how the modifier is designed to be used, making this a real runtime bug affecting Core Web Vitals in production.
