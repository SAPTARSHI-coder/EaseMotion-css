# Tooltip Dark Mode Contrast Fix

## What does this do?

Fixes the tooltip dark mode colors so they use dark surface tokens
consistent with cards, modals, navbar, and forms — instead of a
near-white background with near-black text on a dark page.

## The problem

`tooltips.css` sets these dark mode token overrides:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --ease-tooltip-bg:   var(--ease-color-neutral-100, #f3f4f6);
    --ease-tooltip-text: var(--ease-color-neutral-900, #111827);
  }
}
```

Both tokens have **no dark mode override** in `variables.css`:

- `--ease-color-neutral-100` always resolves to `#f1f5f9` (near-white)
- `--ease-color-neutral-900` always resolves to `#0f172a` (near-black)

In dark mode the tooltip renders with a `#f1f5f9` near-white background
and `#0f172a` near-black text — a bright inverted box floating on a
`#0b1121` dark background. Every other dark-mode surface in the framework
(cards, modals, navbar, forms) uses dark backgrounds with light text. The
tooltip is the only exception and looks visually broken.

## The fix

Use the semantic surface tokens that the rest of the framework already
uses for dark mode surfaces:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --ease-tooltip-bg:   var(--ease-color-surface, #141e33);
    --ease-tooltip-text: var(--ease-color-text, #e2e8f0);
  }
}
```

Both tokens are correctly overridden by `variables.css` in dark mode:
- `--ease-color-surface` → `#141e33` (same dark surface as cards/modals)
- `--ease-color-text` → `#e2e8f0` (light text for dark backgrounds)

## What changes in dark mode

| Property | Before | After |
|---|---|---|
| Tooltip background | `#f1f5f9` (near-white) | `#141e33` (dark surface) |
| Tooltip text | `#0f172a` (near-black) | `#e2e8f0` (light text) |
| Consistency | Inverted vs all other components | Matches cards, modals, navbar |

## How to verify

Chrome DevTools → More Tools → Rendering →
set **Emulate CSS media feature prefers-color-scheme** to `dark` →
hover the tooltips in each demo section.
