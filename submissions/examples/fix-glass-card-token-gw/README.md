# Bug Fix: `--ease-color-text-dark` undefined token

## What does this do?

Defines the missing `--ease-color-text-dark` CSS custom property in `core/variables.css` and removes the hardcoded fallback `#f8fafc` from `components/cards.css`, restoring full design-token consistency for dark-mode glass cards.

---

## How is it used?

### Patch 1 — `core/variables.css` (add the token)

```css
@media (prefers-color-scheme: dark) {
  :root {
    /* existing tokens ... */
    --ease-color-text-dark: #f8fafc;   /* ← add this line */
  }
}
```

### Patch 2 — `components/cards.css` (remove hardcoded fallback)

```diff
 @media (prefers-color-scheme: dark) {
   .ease-card-glass {
-    color: var(--ease-color-text-dark, #f8fafc);
+    color: var(--ease-color-text-dark);
   }
 }
```

### Steps to reproduce the bug

1. Enable OS dark mode.
2. Add `.ease-card-glass` to any element.
3. Inspect the computed `color` property.
4. Observe it resolves to `rgb(248, 250, 252)` — the hardcoded fallback.
5. Search `variables.css` — `--ease-color-text-dark` is not defined.

---

## Why is it useful?

EaseMotion CSS is **token-first**: every design decision should flow through a CSS custom property so that consumers can theme the library by overriding a single variable.

The missing `--ease-color-text-dark` token breaks that contract:

| | Before (bug) | After (fix) |
|---|---|---|
| Token defined in `variables.css` | ❌ No | ✅ Yes |
| Consumer can override text colour | ❌ Must edit component | ✅ One variable override |
| Dark-mode glass card colour | Hardcoded `#f8fafc` | Driven by token |

**Consumer override example:**
```css
/* Zero framework edits needed */
:root {
  --ease-color-text-dark: #cdd6f4; /* custom dark-mode text */
}
```

The value used in the fix (`#f8fafc`) is identical to the current hardcoded fallback — so there is **no visual change** for existing users. Only the architecture is corrected.

---

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Self-contained demo showing the buggy vs. fixed card side-by-side |
| `style.css` | CSS with commented patch instructions for the maintainer |
| `README.md` | This file |

---

*Submitted by: gw · Issue: `--ease-color-text-dark` not defined in `variables.css`*
