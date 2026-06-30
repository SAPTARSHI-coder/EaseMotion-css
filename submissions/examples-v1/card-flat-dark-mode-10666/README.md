# Card Flat Dark Mode Fix — Issue #10666

**Fixes:** #10666

## What does this do?

Adds a dark mode override for `.ease-card-flat` so it uses
`--ease-color-surface` instead of staying near-white in dark mode.

## The problem

`components/cards.css` line 122:

```css
.ease-card-flat {
  border-color: transparent;
  background-color: var(
    --ease-color-neutral-100,
    #f1f5f9
  ); /* no dark override */
}
```

`--ease-color-neutral-100` is `#f1f5f9` with no dark mode override. In
dark mode the page background is `#0b1121` but the flat card stays
`#f1f5f9` — near-white on near-black. The component designed to have
the most subtle presence becomes the most visually prominent element.

## The fix

```css
@media (prefers-color-scheme: dark) {
  .ease-card-flat {
    background-color: var(--ease-color-surface, #141e33);
  }
}
```

`--ease-color-surface` (`#141e33`) is slightly lighter than the page
background (`#0b1121`), recreating the same "subtle elevation above the
background" relationship that `--ease-color-neutral-100` provides in
light mode over `--ease-color-bg` (`#f8fafc`).

## Before vs after in dark mode

| Mode          | Page bg   | Flat card bg | Relationship                 |
| ------------- | --------- | ------------ | ---------------------------- |
| Light         | `#f8fafc` | `#f1f5f9`    | Subtly darker — correct ✅   |
| Dark (broken) | `#0b1121` | `#f1f5f9`    | Blazingly lighter — wrong ❌ |
| Dark (fixed)  | `#0b1121` | `#141e33`    | Subtly lighter — correct ✅  |

## Demo

Enable dark mode in Chrome DevTools → Rendering →
prefers-color-scheme: dark. The broken card glows white. The fixed card
shows as a subtle dark surface matching the design intent.
