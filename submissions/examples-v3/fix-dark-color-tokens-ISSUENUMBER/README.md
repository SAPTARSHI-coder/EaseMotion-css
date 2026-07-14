# Fix: `-dark` Color Tokens for `success` / `danger` / `warning`

## What was broken

In `core/variables.css`, the `-dark` variants of `success`, `danger`, and `warning` were set to the **same hex value** as their base color:

| Token | Base | Dark (buggy) |
|---|---|---|
| `--ease-color-success-dark` | `#15803d` | `#15803d` ← identical |
| `--ease-color-danger-dark`  | `#b91c1c` | `#b91c1c` ← identical |
| `--ease-color-warning-dark` | `#b45309` | `#b45309` ← identical |

This broke the `light / base / dark` scale pattern that works correctly for `primary`, `secondary`, and `info`. Any component using a `-dark` token for hover or active states silently had no visual change.

## What was fixed

Each `-dark` token is now a genuinely darker shade (~15–20% lightness reduction via HSL):

| Token | Base | Dark (fixed) |
|---|---|---|
| `--ease-color-success-dark` | `#15803d` | `#0f5c2c` |
| `--ease-color-danger-dark`  | `#b91c1c` | `#861414` |
| `--ease-color-warning-dark` | `#b45309` | `#813c07` |

No other tokens were modified. The `-light` variants and base colors remain unchanged.

## Files

| File | Purpose |
|---|---|
| `style.css` | Corrected CSS custom property values + demo component styles |
| `demo.html` | Visual swatch comparison (before/after) + hover button demo |
| `README.md` | This file |

## How to verify

1. Open `demo.html` in a browser.
2. The **Color Scale** section shows the full `light / base / dark` ramp — each step should be visibly distinct.
3. The **Before vs After** section shows the old (identical) values vs the corrected darker values side by side.
4. Hover the **Success**, **Danger**, and **Warning** buttons — background should visibly darken on hover, confirming the `-dark` token now produces a real visual change.

## Related

- Fixes the same pattern as `primary`, `secondary`, and `info` which already had correct `-dark` values.
- No breaking change — only previously-broken identical values are corrected.