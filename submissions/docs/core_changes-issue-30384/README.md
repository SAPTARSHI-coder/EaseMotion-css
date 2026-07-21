# Visually Hidden / Screen Reader Only — Issue #30384

Accessible visually-hidden utilities following a11y best practices.

## Classes

| Class | Purpose |
|-------|---------|
| `.ease-sr-only` | Hide visually, keep for screen readers |
| `.ease-sr-only-focusable` | Hide until focused (skip links) |
| `.ease-not-sr-only` | Undo `.ease-sr-only` in responsive overrides |

Pattern matches Tailwind's sr-only implementation. Uses `clip: rect(0,0,0,0)` for maximum compatibility.
