# Segmented Tabs

## Summary

A pure CSS segmented tab switcher submitted for issue #88583. No spec
was given beyond "advanced component," so this covers a commonly
requested pattern: an accessible, animated tab switcher with zero JS.

## How it works

- Three `<input type="radio">` (one `name`, so mutually exclusive)
  live at the top of `.ease-tabs`, before the nav and panels in the
  DOM, so they can be targeted by later siblings via `~`.
- Each radio's `id` matches a `label[for]` in the nav and a
  `data-tab` value on its panel, so `#tab-N:checked ~ ... label[for="tab-N"]`
  highlights the active tab, and `#tab-N:checked ~ ... [data-tab="N"]`
  reveals the matching panel — all pure CSS, no JS.
- Panels fade in on switch via `ease-tabs-fade`, disabled under
  `prefers-reduced-motion`.

## Classes

- `ease-tabs` — wrapper, holds the hidden radios
- `ease-tabs-nav` — pill-style tab bar
- `ease-tabs-panels`, `ease-tabs-panel` — content panels

## Files

- `demo.html` — live 3-tab demo
- `style.css` — original CSS, single component

Relates to issue #88583.
