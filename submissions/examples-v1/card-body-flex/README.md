# Card Body Flex Fix for `.ease-card`

**Fixes:** #3651
**File Modified:** `components/cards.css`

---

## Problem

The `.ease-card-body` class uses `flex: 1` to fill available space, but
`.ease-card` did not have `display: flex` set by default. This meant that
`flex: 1` on `.ease-card-body` had no effect inside a standard card, and
caused unexpected space consumption when used outside a flex parent.

## Fix

Added `display: flex` and `flex-direction: column` to the `.ease-card` class
in `components/cards.css`, making the card a self-contained flex column
container so that `.ease-card-body` with `flex: 1` works as intended.

## How to Test

1. Open `demo.html` in any modern browser
2. Observe that `.ease-card-body` stretches to fill the available space
   between the header and footer
3. The card layout is self-contained and does not affect surrounding elements

## Browser Support

| Browser | Minimum Version |
|---------|----------------|
| Chrome  | 80+            |
| Firefox | 80+            |
| Safari  | 14+            |
| Edge    | 80+            |

> Older browsers that do not support flexbox will fall back to standard
> block layout — no layout breakage occurs.