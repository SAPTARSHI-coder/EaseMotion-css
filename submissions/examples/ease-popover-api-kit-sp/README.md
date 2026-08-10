# Popover API + EaseMotion Entrance Combo

An example kit demonstrating the **native Popover API** paired with EaseMotion entrance transitions — `ease-fade-in` for tooltips and `ease-zoom-in` for menus.

> Submission track: `submissions/examples/ease-popover-api-kit-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue #44489

---

## What does this do?

EaseMotion CSS provides rich entrance animations, but beginners often do not know how to combine them with the native Popover API. This kit shows multiple popover patterns (tooltips, info cards, action menus) with EaseMotion enter transitions in one place.

---

## Patterns included

| # | Pattern | Entrance | Popover type |
|---|---------|----------|--------------|
| 1 | Help tooltip | `ease-kf-fade-in` | `popover="auto"` |
| 2 | Info card | `ease-kf-fade-in` | Dialog with close button |
| 3 | Action menu | `ease-kf-zoom-in` | Dropdown menu |
| 4 | Account menu | `ease-kf-zoom-in` | Avatar-triggered menu |

---

## How is it used?

1. Open `demo.html` in a browser (requires internet for CDN assets).
2. Click triggers to open tooltips and menus — watch entrance animations.
3. Dismiss via light dismiss (click outside), `Escape`, or close buttons.
4. Check the event log for `toggle` events.
5. Copy HTML snippets from each pattern card.

---

## Features

- Native Popover API tooltip demo with `ease-fade-in` entrance
- Native Popover API menu demo with `ease-zoom-in` entrance
- `popovertarget` / `popover` attribute usage examples
- Entrance animation on popover show (`:popover-open` + `@starting-style`)
- Light dismiss and Escape key close behavior
- Copy-ready HTML snippets for each popover pattern
- Educational notes on Popover API + EaseMotion integration
- Responsive, accessible demo page

---

## Tech stack

| Asset | Source |
|-------|--------|
| EaseMotion CSS | jsDelivr CDN (`easemotion.min.css`) |
| Popover entrance CSS | `style.css` (`:popover-open` + EaseMotion keyframes) |
| Toggle event log | Inline JS in `demo.html` |

---

## Integration pattern

```css
/* Fade entrance — tooltips & info panels */
.po-enter-fade:popover-open {
  animation: ease-kf-fade-in var(--ease-speed-medium) var(--ease-ease) both;
}

/* Zoom entrance — menus & pickers */
.po-enter-zoom:popover-open {
  animation: ease-kf-zoom-in var(--ease-speed-medium) var(--ease-ease-bounce) both;
}
```

Keyframes (`ease-kf-fade-in`, `ease-kf-zoom-in`) ship with `easemotion.min.css`.

---

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Four popover patterns, compare section, event log |
| `style.css` | Popover styling, entrance animations, layout |
| `README.md` | This document |

---

## Compliance notes

- Only **new files** inside `submissions/examples/ease-popover-api-kit-sp/`.
- No modifications to `core/`, `components/`, workflows, or existing files.
- All three required submission files included (`demo.html`, `style.css`, `README.md`).
- Total contribution exceeds the 250-line minimum policy threshold.
- Folder name carries the unique contributor suffix `-sp`.
