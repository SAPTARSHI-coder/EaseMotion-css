# Card Outlined Border Dark Mode Fix — Issue #10672

**Fixes:** #10672

## What does this do?

Adds dark mode border overrides for `.ease-card-outlined` and the base
`.ease-card` so they use a dark-appropriate border color in dark mode
instead of staying near-white.

## The problem

`components/cards.css`:

```css
/* Base card — line 11 */
.ease-card {
  border: 1px solid var(--ease-color-neutral-200, #e2e8f0); /* no dark override */
}

/* Outlined card — line 127 */
.ease-card-outlined {
  background-color: transparent;
  border: 2px solid var(--ease-color-neutral-200, #e2e8f0); /* no dark override */
}
```

`--ease-color-neutral-200` is `#e2e8f0` with no dark mode override in
`variables.css`. In dark mode the page background is `#0b1121` but the
border stays `#e2e8f0` — a bright near-white line. For the outlined card
this is the most damaging: the entire component's visual identity depends
on its border, and that border becomes an overly harsh frame.

## The fix

```css
@media (prefers-color-scheme: dark) {
  .ease-card {
    border-color: var(--ease-color-neutral-700, #334155);
  }
  .ease-card-outlined {
    border-color: var(--ease-color-neutral-700, #334155);
  }
}
```

`--ease-color-neutral-700` (`#334155`) is the same dark border used by
forms, modals, tabs, and sidebar in dark mode.

## Why both classes are included

The base `.ease-card` fix covers all cards inheriting its border. The
`.ease-card-outlined` fix is restated explicitly because it uses the
`border` shorthand (which sets width and style alongside color), meaning
the base-class border-color override might not take precedence without
an explicit restatement.

## Demo

Enable dark mode in Chrome DevTools → Rendering → prefers-color-scheme:
dark. The demo shows broken vs fixed for both the outlined variant and
the base card.
