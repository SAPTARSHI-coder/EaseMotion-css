# Modal Component — Undefined Token Fix

## What's the bug?
`components/modals.css` references two CSS custom properties that are **never defined** anywhere in `core/variables.css`:

1. **`.ease-modal-body`** uses `color: var(--ease-color-text-muted, #4b5563)`. The correct token is `--ease-color-muted`, which exists with both light (`#475569`-ish neutral) and dark (`#94a3b8`) values. Because `--ease-color-text-muted` doesn't exist, this always falls back to the hardcoded `#4b5563` — **modal body text never adapts to dark mode**.

2. **`.ease-modal`** uses `box-shadow: var(--ease-shadow-2xl, 0 25px 50px -12px rgba(0,0,0,0.25))`. Only `--ease-shadow-sm/md/lg/xl` are defined (each with separate light/dark values) — there is no `--ease-shadow-2xl`. The modal always uses the hardcoded light-mode shadow, **even in dark mode**.

## The fix
```css
.ease-modal-body {
  color: var(--ease-color-muted, #4b5563);
}

.ease-modal {
  box-shadow: var(--ease-shadow-xl, 0 25px 50px -12px rgba(0, 0, 0, 0.25));
}
```

Both `--ease-color-muted` and `--ease-shadow-xl` are real, existing tokens with correct light/dark variants already defined in `core/variables.css` — no new tokens needed.

## Files
- `modals.css` — the full corrected `components/modals.css`, with inline comments marking exactly what changed and why
- `demo.html` + `style.css` — a side-by-side comparison showing the modal rendered in a forced light scope and a forced dark scope, using the fixed CSS

## How to verify
Open `demo.html`. The left panel (light) and right panel (dark) each render the same modal markup with the fixed `modals.css`. The dark panel's body text uses `#94a3b8` (light gray, readable on dark surface) and the dark-tuned shadow — both correctly switching, unlike before the fix where both panels would render identically regardless of scheme.

## Why it fits EaseMotion CSS
This is a small, surgical fix (2 variable names) with real impact: every modal built with this component has body text that doesn't follow the framework's dark mode system, and a shadow that's always wrong in dark mode. Confirmed via `grep` that `--ease-color-text-muted` and `--ease-shadow-2xl` are referenced nowhere else in `core/` or `components/` — this is the only place the bug occurs.
