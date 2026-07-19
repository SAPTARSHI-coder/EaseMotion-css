# Card Header/Footer Border Dark Mode Fix

## What does this do?

Adds dark mode overrides for `.ease-card-header` and `.ease-card-footer`
divider borders so they use a dark-appropriate border color instead of
staying near-white in dark mode.

## The problem

`components/cards.css`:

```css
.ease-card-header {
  border-bottom: 1px solid var(--ease-color-neutral-100, #f1f5f9);
}
.ease-card-footer {
  border-top: 1px solid var(--ease-color-neutral-100, #f1f5f9);
}
```

`--ease-color-neutral-100` is `#f1f5f9` — near-white. It has no dark
mode override in `variables.css`. In dark mode, the card surface becomes
dark (`--ease-color-surface` → `#141e33`) but the header and footer
dividers stay `#f1f5f9` — a bright near-white line visibly cutting
across the dark card.

## The fix

```css
@media (prefers-color-scheme: dark) {
  .ease-card-header {
    border-bottom-color: var(--ease-color-neutral-700, #334155);
  }
  .ease-card-footer {
    border-top-color: var(--ease-color-neutral-700, #334155);
  }
}
```

`--ease-color-neutral-700` (`#334155`) is the same dark border value
used by forms, modals, and tabs in dark mode — consistent with the
rest of the framework.

## How to verify

Chrome DevTools → More Tools → Rendering →
set **Emulate CSS media feature prefers-color-scheme** to `dark`.
The demo shows the broken (bright) and fixed (dark) dividers side by side.
