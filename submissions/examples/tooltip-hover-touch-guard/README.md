# Tooltip Hover Touch Guard Fix

## What does this do?

Wraps all `.ease-tooltip:hover` show/hide rules in
`@media (hover: hover) and (pointer: fine)` to prevent tooltips from
opening on tap and staying stuck on touch devices.

The `:focus-within` trigger is intentionally preserved unchanged —
it provides keyboard and assistive-technology access on all devices.

## The problem

`components/tooltips.css` shows the tooltip on `:hover`:

```css
/* Current — fires on touch tap */
.ease-tooltip:hover::after,
.ease-tooltip:focus-within::after {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
```

On touch devices, tapping a `.ease-tooltip` element synthesises a
`:hover` event that does not clear when the finger lifts. The tooltip
opens and stays visible until the user taps elsewhere. Every touch
interaction with a tooltip trigger leaves a floating tooltip box
blocking nearby content.

## Why only the hover trigger needs the guard

The activation rule combines `:hover` and `:focus-within` in one
selector. They need to be separated:

- `:hover` → only pointer devices (mouse/trackpad) — needs the guard
- `:focus-within` → keyboard navigation and assistive tech on all
  devices — must NOT be guarded, stays as-is

## The fix

```css
/* Hover: pointer devices only */
@media (hover: hover) and (pointer: fine) {
  .ease-tooltip:hover::after {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  .ease-tooltip:hover::before {
    opacity: 1;
    visibility: visible;
  }
  /* ... position-specific hover transforms ... */
}

/* focus-within: unchanged — works on all devices */
/* (already in tooltips.css, no change needed) */
```

## Behaviour after fix

| Interaction | Device | Before | After |
|---|---|---|---|
| Tap tooltip trigger | Touch | Tooltip opens, stays stuck | No tooltip shown |
| Hover tooltip trigger | Mouse | Tooltip shows | Tooltip shows (unchanged) |
| Tab-focus tooltip trigger | Keyboard | Tooltip shows via :focus-within | Tooltip shows via :focus-within (unchanged) |

## Demo

Open in Chrome DevTools with Device Toolbar enabled. Tap the buttons
in the Broken section — tooltips open and stick. Tap the buttons in
the Fixed section — no tooltip appears. Tab into the Fixed buttons with
keyboard — tooltip appears correctly via focus.
