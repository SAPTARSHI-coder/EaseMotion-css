# ease-tooltip

A hover-triggered tooltip with a small CSS-triangle arrow pointing at its trigger element, fading and sliding in on hover. Positioned via a `data-tooltip` attribute — no extra wrapper markup for the text.

## What does this do?

- Reads the tooltip text from the `data-tooltip` attribute and renders it via `::before { content: attr(data-tooltip) }`, so the trigger element stays clean — no wrapper `<span>` for the label.
- Draws the arrow with `::after` as a pure CSS triangle (zero-width element with colored borders), colored to match the bubble exactly so the join looks seamless.
- Supports four placements — `--top`, `--bottom`, `--left`, `--right` — each sliding in from its own side.
- Shows on `:hover` **and** `:focus-visible`, so keyboard users get the tooltip too.

## How is it used?

1. Link the stylesheet.
2. Add the `tooltip` class, a `data-tooltip` attribute, and a placement modifier to any element.

```html
<link rel="stylesheet" href="style.css" />

<button class="tooltip tooltip--top" data-tooltip="Saves your changes">Save</button>

<!-- works on inline links and icon buttons too -->
<a class="tooltip tooltip--bottom" data-tooltip="Web Content Accessibility Guidelines" href="#">WCAG</a>
```

## Why is this useful?

- **Attribute-driven, zero wrapper markup** — the label lives in `data-tooltip`; no extra `<span>` cluttering the DOM.
- **Correct arrow** — the CSS-triangle arrow's color matches the bubble background, positioned precisely at the bubble's edge. This is the part that trips up most hand-rolled attempts.
- **Keyboard accessible** — appears on `:focus-visible`, not just hover, so tab-only users see it.
- **Four placements** — top/bottom/left/right via modifiers, each with a matching arrow direction and slide-in.
- **Pure CSS, no JS** — `content: attr(...)` + pseudo-elements; nothing to initialize.
- **Reusable** — configurable via CSS custom properties (`--tt-bg`, `--tt-text`, `--tt-radius`, `--tt-pad`, `--tt-arrow`, `--tt-gap`, `--tt-dur`, etc.).

## Files

- `demo.html` — self-contained showcase (open directly in a browser; no server, CDNs, or frameworks). Placements, icon-button toolbar, and inline-text triggers.
- `style.css` — `::before` bubble + `::after` CSS-triangle arrow, four placements, hover/focus reveal, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
