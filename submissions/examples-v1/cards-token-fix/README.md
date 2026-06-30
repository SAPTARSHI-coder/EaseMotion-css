# ease-card-neumorphic — Undefined Token Fix

**Fixes:** Issue #4228

## Root Cause

`components/cards.css` referenced `var(--ease-color-text-dark, #f8fafc)`
on `.ease-card-neumorphic` in dark mode. The token
`--ease-color-text-dark` was **never declared** in `core/variables.css`.

This means:

- The CSS custom property was always unresolved in the cascade
- It always silently fell back to the hard-coded `#f8fafc`
- Consumers who tried to override it with `:root { --ease-color-text-dark: … }` had **no effect**

## Fix

Declare `--ease-color-text-dark` in **both** the base `:root` block and
the `@media (prefers-color-scheme: dark)` block in `variables.css`:

```css
/* Light mode baseline */
:root {
  --ease-color-text-dark: #f8fafc;
}

/* Dark mode override */
@media (prefers-color-scheme: dark) {
  :root {
    --ease-color-text-dark: #f8fafc; /* now overridable by consumers */
  }
}
```

The value stays `#f8fafc` (no visual change), but it is now part of the
design-token system and fully overridable.

## Verification

| Check                             | Before               | After                |
| --------------------------------- | -------------------- | -------------------- |
| Token declared in `variables.css` | ❌                   | ✅                   |
| `color` resolves from cascade     | ❌ (always fallback) | ✅                   |
| Consumer can override token       | ❌ silently ignored  | ✅ works             |
| Visual regression                 | —                    | ✅ none (same value) |

## Acceptance Criteria

- [x] `--ease-color-text-dark` declared in dark-mode token block
- [x] Token is overridable by consumers (demonstrated in demo)
- [x] No visual regression (same resolved color `#f8fafc`)
