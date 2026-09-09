# Brutalism Segmented Switch Control - Responsive Breakpoints Layout

## Overview

The **Brutalism Segmented Switch Control** (`.ease-switch-brutal`) is a tactile segmented toggle built from a
`role="radiogroup"` container and `role="radio"` segment buttons (`.ease-switch-btn`). This guide documents
`.ease-switch-brutal-responsive`, a layout modifier that adapts the switch's width and segment sizing across
three breakpoint bands so it stays usable from a wide desktop viewport down to a narrow phone screen, instead of
overflowing or clipping segment labels.

This complements the existing quickstart and theming guides for the same component:
- `submissions/docs/ease-brutalist-switch-ss/` — base markup, variants, and keyboard interaction
- `submissions/docs/ease-brutal-switch-theming-ss/` — CSS custom property theming

## HTML Structure

The markup is unchanged from the base component. `.ease-switch-brutal-responsive` is added alongside
`.ease-switch-brutal` on the same container:

```html
<div class="ease-switch-brutal ease-switch-brutal-responsive" role="radiogroup" aria-label="Billing Cycle">
  <button type="button" class="ease-switch-btn is-active" role="radio" aria-checked="true" tabindex="0">Monthly</button>
  <button type="button" class="ease-switch-btn" role="radio" aria-checked="false" tabindex="-1">Quarterly</button>
  <button type="button" class="ease-switch-btn" role="radio" aria-checked="false" tabindex="-1">Annual</button>
</div>
```

No extra wrapper elements or data attributes are required. The roving-tabindex/arrow-key script from the base
quickstart guide works unmodified with this modifier.

## Class Reference

| CSS Selector | Description |
| :--- | :--- |
| `.ease-switch-brutal` | Base container: border, hard drop shadow, inline-flex layout. |
| `.ease-switch-btn` | Individual segment button. |
| `.ease-switch-brutal-responsive` | Adds the breakpoint-driven width/sizing behavior documented here. |
| `.ease-switch-vertical` | Existing, unrelated modifier that *manually* forces a fixed vertical stack at every viewport width. It does not respond to breakpoints and is shown in `demo.html` only as a point of comparison. |

## Responsive Breakpoint Behavior

`.ease-switch-brutal-responsive` uses three width bands, defined in `style.css`:

| Viewport | Behavior |
| :--- | :--- |
| `min-width: 768px` (tablet and desktop) | Switch sits at its natural inline width (`width: auto`); segment buttons size to their content, matching the default `.ease-switch-brutal` behavior. |
| `480px` &ndash; `767px` (mobile) | Switch stretches to `width: 100%` of its container; each segment button grows equally (`flex: 1`) so all segments share the available width and remain easy to tap. |
| `max-width: 479px` (narrow mobile) | Segments wrap onto a second row (`flex-wrap: wrap`), two per row (`flex: 1 1 calc(50% - 4px)`), instead of shrinking button text to fit one row. |

The two thresholds (`768px`, `480px`) are plain CSS media queries, mobile-first (base rules apply below 768px,
overridden with `min-width` above it). No JavaScript is involved in the layout changes — resizing the browser or
using a device toolbar is enough to see each band take effect.

## Usage Example

```html
<link rel="stylesheet" href="style.css">

<div class="ease-switch-brutal ease-switch-brutal-responsive" role="radiogroup" aria-label="View Mode">
  <button type="button" class="ease-switch-btn is-active" role="radio" aria-checked="true" tabindex="0">Editor</button>
  <button type="button" class="ease-switch-btn" role="radio" aria-checked="false" tabindex="-1">Split</button>
  <button type="button" class="ease-switch-btn" role="radio" aria-checked="false" tabindex="-1">Preview</button>
</div>
```

## Testing the Responsive Behavior

1. Open `demo.html` directly in a browser (no server or build step needed).
2. Resize the browser window slowly from wide to narrow, or open the browser's device toolbar and pick preset
   widths.
3. Watch the switch under "`.ease-switch-brutal-responsive`" at the top of the page:
   - At 1024px+ and 768px&ndash;1023px it stays at its natural width.
   - Between 480px and 767px it stretches full-width with equal segment widths.
   - Below 480px the segments wrap into a 2-per-row grid.
4. The label at the top of the card (`Mobile` / `Tablet` / `Desktop`) reflects which band is currently active, so
   you can confirm the breakpoint without opening dev tools.
5. Compare against the `.ease-switch-vertical` example lower on the page, which stays stacked regardless of
   width, to see the difference between a fixed layout and a responsive one.

## Accessibility Considerations

- Layout changes are pure CSS (flex sizing / wrapping); the DOM order and the `role="radiogroup"` /
  `role="radio"` structure never change across breakpoints, so screen reader announcement order stays
  consistent.
- Because only sizing and wrapping change, the roving-`tabindex` and Arrow Key navigation described in the
  quickstart guide keep working identically at every width.
- Wrapped segments (below 480px) remain individually tappable buttons at a comfortable size — none of the
  breakpoints shrink font size or padding to force content into a single row.

## Browser / Testing Notes

- Uses standard CSS `flex`, `flex-wrap`, and `min-width`/`max-width` media queries; no vendor prefixes or
  experimental features are required.
- Verified visually at 1280px, 900px, 600px, and 375px widths using the browser's responsive device toolbar.
- `demo.html` has no external dependencies, CDNs, or build step — it opens directly in any modern browser.

## Files

- `demo.html` — standalone example with the responsive switch, a fixed-vertical comparison switch, and a
  viewport-band indicator.
- `style.css` — base switch styles plus the `.ease-switch-brutal-responsive` breakpoint rules.
- `README.md` — this guide.
