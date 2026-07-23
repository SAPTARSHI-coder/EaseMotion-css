# Zoom-Out Tooltip (`zoom-out-tooltip-hr18`)

A pure-CSS animated tooltip with a "Zoom-Out" entrance, styled for product
catalog layouts, built for issue
[#46243](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/46243).

## What it does

Hovering — or tabbing to, with a keyboard — a color swatch or info icon
reveals a tooltip that starts noticeably larger than its resting size and
shrinks down into place, rather than growing up from small — the inverse of
a typical zoom-in tooltip. Both the **show/hide behavior and the zoom-out
animation are pure CSS**, driven by `:hover`/`:focus-within` plus
`@keyframes ease-zoomout-hr18` — no JavaScript is required for the core
interaction. A few lines of optional script only add `Escape`-to-dismiss.

The demo applies it to a two-product catalog grid, each product with
color-swatch tooltips (naming the color) and a care-instructions info icon.

## Installation

Nothing to install — `demo.html` is self-contained and opens directly in a
browser (double-click the file). It links a single local `style.css`; no
build step, package manager, or external CDN.

## Usage

Wrap a trigger and a tooltip bubble in the component markup:

```html
<span class="zot-tooltip-wrap-hr18">
  <button type="button" class="zot-swatch-hr18" style="background: #7a5c3e" aria-describedby="myTip"></button>
  <span class="ease-tooltip-zoomout-hr18" id="myTip" role="tooltip">Walnut</span>
</span>
```

That's the entire component — no JavaScript wiring is needed per instance.

### Tuning the animation

Every timing/scale value is a CSS custom property, overridable per instance
or globally:

| Property | Default | Controls |
|---|---|---|
| `--ease-zoomout-duration-hr18` | `260ms` | How long the shrink-into-place takes |
| `--ease-zoomout-easing-hr18` | `cubic-bezier(0.22, 1, 0.36, 1)` | The easing curve for the entrance |
| `--ease-zoomout-start-scale-hr18` | `1.6` | How much larger than rest the tooltip starts — higher feels punchier |
| `--ease-zoomout-delay-hr18` | `0ms` | Delay before the animation starts |

```css
.zot-tooltip-wrap-hr18.subtle .ease-tooltip-zoomout-hr18 {
  --ease-zoomout-start-scale-hr18: 1.2;
  --ease-zoomout-duration-hr18: 180ms;
}
```

## Accessibility notes

- Both trigger types (color swatches and the info icon) are native
  `<button>` elements, reachable and triggerable by keyboard without any
  extra scripting.
- The tooltip shows on `:focus-within` as well as `:hover`, so keyboard-only
  users see the same content sighted mouse users do.
- Each trigger and its tooltip are connected with `aria-describedby`, and
  the tooltip carries `role="tooltip"`.
- The tooltip contains only short text — no interactive content — matching
  the WAI-ARIA tooltip pattern's expectations.
- Color swatches are named in their tooltip text ("Walnut", "Forest",
  "Onyx"), so color choice is never communicated by color alone.
- `Escape` blurs the trigger (via the small optional script) to dismiss the
  tooltip early without needing to tab away.
- The zoom-out animation respects `@media (prefers-reduced-motion: reduce)`
  and appears instantly at rest instead.

## Responsiveness

The two-product grid collapses from two columns to one under a `620px`
viewport width.

## Why this fits EaseMotion CSS

The entire interaction runs on plain CSS selectors and a single
`@keyframes` block, matching the issue's explicit ask for zero JavaScript
overhead, while exposing every timing/scale value as a tunable custom
property and remaining keyboard accessible via `:focus-within`.

All classes, custom properties, and the folder itself use a `-hr18` suffix
to avoid colliding with any other contributor's submission under
`submissions/examples/`.
