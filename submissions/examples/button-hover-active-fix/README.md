# Fix: Merge conflict in ease-button hover vs active state styles

Resolves #30458

## The Problem

`:hover` and `:active` rules for `.ease-button` had equal CSS specificity
(each a single pseudo-class on the same base selector). This meant the
cascade fell back to source order — whichever rule appeared last in the
stylesheet silently won. Depending on how two branches merged, the
`:active` (pressed) state could end up being overridden by the `:hover`
state whenever a user clicked and held a button, producing inconsistent
visual feedback that varied by build order rather than intent.

## The Fix

**1. Intentional, documented source order**
`:hover` is declared before `:active` in `style.css`, so a simple click
(mousedown without a preceding hover) already resolves correctly through
normal cascade order.

**2. A combined selector removes all ambiguity**
```css
.ease-button:hover:active { ... }
```
This selector has higher specificity than either pseudo-class alone, so
when both `:hover` and `:active` apply simultaneously (the common case —
hovering, then pressing), the active styling is guaranteed to win
regardless of future reordering or merges. This is the core fix: it makes
the precedence explicit in the CSS itself rather than relying on
contributors remembering to keep declarations in the right order.

**3. Per-variant custom properties**
Each button variant (`--primary`, `--secondary`, `--danger`) defines only
three custom properties — `--btn-base`, `--btn-hover`, `--btn-active` — so
hover and active colors are always derived consistently per variant.
Future variants can't introduce the same conflict because they don't
write their own `:hover`/`:active` rules at all; they just redefine the
three properties the shared base rules already consume.

## Files

| File | Purpose |
|---|---|
| `demo.html` | Buttons across all three variants, plus a live state readout |
| `style.css` | The actual fix — explicit cascade order + combined `:hover:active` selector + shared custom-property pattern |
| `script.js` | Drives the live state readout (idle / hover / active / hover+active) for visual verification |

## How to Test

1. Open `demo.html` in a browser.
2. Hover over the first primary button — readout shows "hover."
3. While still hovering, press and hold (mousedown) — readout shows
   "hover + active," and the button's pressed (active) styling — darker
   background, scaled-down, no shadow — is visibly applied, not the hover
   styling.
4. Release — button returns to hover state, then idle on mouseout.
5. Repeat across secondary and danger variants to confirm the fix applies
   uniformly via the shared custom-property pattern.

## Notes

- `:disabled` styling is unaffected by this fix and continues to take
  precedence via the browser's native disabled state handling combined
  with `cursor: not-allowed` and a neutral background.
- This pattern (combined `:hover:active` selector) is intentionally kept
  simple rather than introducing `:focus-visible` interactions here,
  since that's outside the scope of this conflict — happy to open a
  follow-up issue for focus-state handling if needed.