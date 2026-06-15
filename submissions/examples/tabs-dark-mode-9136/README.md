# Tabs Dark Mode Fix — Issue #9136

**Fixes:** #9136

## What does this do?

Adds a `@media (prefers-color-scheme: dark)` block to `components/tabs.css` so
the nav separator border uses a dark-appropriate color instead of staying as a
bright light-grey line on a dark background.

## The problem

`components/tabs.css` has no dark mode block. The nav separator uses:

```css
.ease-tabs-nav {
  border-bottom: 2px solid var(--ease-color-neutral-200);
}
```

`--ease-color-neutral-200` is `#e2e8f0` — a light grey. It has no dark mode
override in `variables.css`. In dark mode, the browser uses the `#0b1121` dark
background from `--ease-color-bg`, but the nav border stays `#e2e8f0` — a
bright horizontal stripe clearly visible across a dark page.

## How to reproduce

Chrome DevTools → More Tools → Rendering →
set **Emulate CSS media feature prefers-color-scheme** to `dark` →
open any page with `.ease-tabs` markup.

The nav separator is immediately visible as a bright light-grey line.

## The fix

```css
@media (prefers-color-scheme: dark) {
  .ease-tabs-nav {
    border-bottom-color: var(--ease-color-neutral-700, #334155);
  }

  .ease-tabs-auto .ease-tab-input:nth-of-type(1):checked ~ .ease-tabs-nav .ease-tab-label:nth-of-type(1),
  .ease-tabs-auto .ease-tab-input:nth-of-type(2):checked ~ .ease-tabs-nav .ease-tab-label:nth-of-type(2),
  .ease-tabs-auto .ease-tab-input:nth-of-type(3):checked ~ .ease-tabs-nav .ease-tab-label:nth-of-type(3),
  .ease-tabs-auto .ease-tab-input:nth-of-type(4):checked ~ .ease-tabs-nav .ease-tab-label:nth-of-type(4),
  .ease-tabs-auto .ease-tab-input:nth-of-type(5):checked ~ .ease-tabs-nav .ease-tab-label:nth-of-type(5),
  .ease-tabs-auto .ease-tab-input:nth-of-type(6):checked ~ .ease-tabs-nav .ease-tab-label:nth-of-type(6) {
    border-bottom-color: var(--ease-color-primary-light, #a09af8);
  }
}
```

## What changes

| Element | Light mode | Dark mode (after fix) |
|---|---|---|
| `.ease-tabs-nav` border | `#e2e8f0` light grey | `#334155` dark grey |
| Active underline | `#6c63ff` primary | unchanged — already correct |
| Inactive label | `#94a3b8` muted | unchanged — already overridden in `variables.css` |

## Demo

Open in Chrome DevTools with `prefers-color-scheme: dark` emulated to see both
the broken and fixed tabs side by side. The bottom of the page also has a live
`ease-tabs` instance using the real framework classes with the fix applied.
