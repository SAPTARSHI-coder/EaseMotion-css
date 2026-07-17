# Sidebar Border Dark Mode Fix — Issue #10680

**Fixes:** #10680

## What does this do?

Adds a `@media (prefers-color-scheme: dark)` block to sidebar.css so the
`border-right` uses a dark-appropriate color instead of the near-white
`--ease-color-neutral-200` against the dark sidebar background.

## The problem

`components/sidebar.css` line 19:

```css
.ease-sidebar {
  background: var(--ease-color-neutral-900, #111);        /* dark */
  border-right: 1px solid var(--ease-color-neutral-200, #e5e7eb); /* near-white */
}
```

The sidebar background is `#111` (near-black) but the border-right is
`#e5e7eb` (near-white). Contrast ratio is approximately 14:1 — a maximum
contrast white line as a 1px separator. The border is louder than the
sidebar content itself.

This problem exists in **both light and dark mode** because the sidebar
background is intentionally dark regardless of color scheme. The entire
`sidebar.css` file has no `@media (prefers-color-scheme: dark)` block.

## The fix

```css
@media (prefers-color-scheme: dark) {
  .ease-sidebar {
    border-right-color: var(--ease-color-neutral-700, #334155);
  }
}
```

`--ease-color-neutral-700` (`#334155`) gives approximately 4:1 contrast
against the dark sidebar — subtle and appropriate. This is the same value
used for dark-mode borders across forms, modals, and tabs.

The `@media` approach is preferred over an unconditional fix because some
users may override `.ease-sidebar` background to a light color — the
media query only applies in dark mode contexts.

## Demo

The broken border is visible without DevTools since the sidebar background
is always dark. Also enable dark mode in Chrome DevTools → Rendering →
prefers-color-scheme: dark to confirm the fix applies.
