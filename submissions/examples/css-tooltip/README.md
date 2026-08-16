# Tooltip

## Summary

A pure CSS tooltip component submitted for issue #88582. No spec was
given beyond "advanced component," so this covers a commonly
requested pattern: an accessible, dependency-free tooltip with zero JS.

## How it works

- The tooltip text lives in a `data-tooltip` attribute and is pulled
  in via `content: attr(data-tooltip)` on a `::after` pseudo-element,
  so no extra markup is needed per tooltip.
- A `::before` pseudo-element renders the small triangle pointer.
- Both are hidden by default (`opacity: 0`) and revealed on
  `:hover` and `:focus-visible`, so the tooltip is reachable via
  keyboard navigation, not just mouse hover.
- A subtle `scale()` + `opacity` transition gives the reveal a soft
  pop, disabled under `prefers-reduced-motion`.
- `.ease-tooltip-bottom` flips the tooltip to appear below the
  trigger instead of above.

## Classes

- `ease-tooltip` — base trigger element (top tooltip by default)
- `ease-tooltip-bottom` — modifier to position the tooltip below

## Files

- `demo.html` — live demo with a top and bottom tooltip
- `style.css` — original CSS, single component

Relates to issue #88582.
