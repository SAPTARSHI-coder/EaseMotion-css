# Card Title Dark Mode Fix — Issue #10814

**Fixes:** #10814

## What does this do?

Adds a dark mode override for `.ease-card-title` so the title text uses
`--ease-color-text` instead of `--ease-color-neutral-900`, making card
titles readable in dark mode.

## The problem

`components/cards.css` line 49:

```css
.ease-card-title {
  color: var(
    --ease-color-neutral-900,
    #0f172a
  ); /* near-black, no dark override */
}
```

In dark mode the card surface is `--ease-color-surface` (`#141e33`). Both
the text and the surface are near-black:

- Title text: `#0f172a`
- Card surface: `#141e33`
- Contrast ratio: ~1.1:1 — effectively invisible

WCAG AA requires 3:1 for large text (1.5rem). The card title fails by a
factor of 3 in dark mode.

## The fix

```css
@media (prefers-color-scheme: dark) {
  .ease-card-title {
    color: var(--ease-color-text, #e2e8f0);
  }
}
```

`--ease-color-text` is overridden to `#e2e8f0` in dark mode via
`variables.css`. Contrast against the dark surface: ~7:1 — clearly above
WCAG AA.

## Why --ease-color-text and not neutral-50 or a hardcoded value

`--ease-color-text` is the semantic text token the rest of the framework
uses for adaptable text. `.ease-card-subtitle` already uses
`--ease-color-muted` (also semantic, already adapts correctly). The title
should use the equivalent semantic token for primary text.

## Demo

Enable dark mode in Chrome DevTools → Rendering →
prefers-color-scheme: dark. The broken card shows an invisible title.
The fixed card shows a clearly readable title.
