# Rotate-Click Popover (`rotate-click-popover-hr18`)

A pure-CSS animated popover with a "Rotate-Click" entrance, styled for
creative portfolio layouts, built for issue
[#46434](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/46434).

## What it does

Clicking a "Details" trigger reveals a popover panel that pops in from a
tilted, shrunk, transparent start and springs to a flat, full-size, opaque
rest state — a quick, playful entrance suited to a portfolio grid. The
**animation itself is 100% CSS** (`@keyframes ease-rotate-click-hr18`,
driven entirely by custom properties); a small amount of vanilla
JavaScript only handles click-to-toggle, `Escape`-to-close,
click-outside-to-close, and keeping `aria-expanded` in sync — there's no
animation logic in JavaScript at all.

The demo shows it applied across a three-project portfolio grid (Aperture,
Loose Leaf, Northbound), each card opening its own independent popover
with project details.

## Installation

Nothing to install — `demo.html` is self-contained and opens directly in a
browser (double-click the file). It links a single local `style.css`; no
build step, package manager, or external CDN.

## Usage

Wrap a trigger button and a popover panel in the component markup:

```html
<div class="rcp-popover-wrap-hr18" data-open="false">
  <button type="button" class="rcp-trigger-hr18" aria-haspopup="dialog" aria-expanded="false">
    Details
  </button>
  <div class="ease-popover-rotate-hr18" role="dialog" aria-label="Project details">
    <button type="button" class="rcp-popover-close-hr18" aria-label="Close">&times;</button>
    <p class="rcp-popover-title-hr18">Aperture</p>
    <p class="rcp-popover-body-hr18">A booking flow and gallery for a portrait photographer.</p>
    <a href="#" class="rcp-popover-link-hr18">View case study</a>
  </div>
</div>
```

The included script finds every `.rcp-popover-wrap-hr18` on the page
automatically and wires it up — a new popover only needs the markup above,
no extra JavaScript per instance. Opening one popover closes any other
that's currently open.

### Tuning the animation

Every timing/angle value is a CSS custom property, overridable per instance
or globally:

| Property | Default | Controls |
|---|---|---|
| `--ease-rotate-duration-hr18` | `420ms` | How long the pop-in + settle takes |
| `--ease-rotate-easing-hr18` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | The overshoot curve that gives it a springy settle |
| `--ease-rotate-angle-hr18` | `-14deg` | Starting tilt angle — try a positive value to tilt the other way |
| `--ease-rotate-delay-hr18` | `0ms` | Delay before the animation starts |

```css
.rcp-popover-wrap-hr18.subtle .ease-popover-rotate-hr18 {
  --ease-rotate-angle-hr18: -6deg;
  --ease-rotate-duration-hr18: 280ms;
}
```

## Accessibility notes

- The trigger is a native `<button>` with `aria-haspopup="dialog"` and
  `aria-expanded` kept in sync with the popover's open state.
- `Escape` closes the popover and returns focus to its trigger.
- Clicking outside the open popover closes it.
- The panel has `role="dialog"` and a descriptive `aria-label`, plus a
  visible, keyboard-reachable close button.
- Fully keyboard operable: `Tab` to the trigger, `Enter`/`Space` to open,
  `Tab` to the close button or link inside, `Escape` to dismiss.
- The rotate/scale entrance respects
  `@media (prefers-reduced-motion: reduce)` and appears instantly at its
  final position instead.
- Uses `--ease-rotate-angle-hr18` rather than a hardcoded `.ease-rotate`
  class name, since EaseMotion already ships a core `ease-rotate` utility
  — this avoids any naming collision with it.

## Responsiveness

The three-card portfolio grid collapses from three columns to one under a
`700px` viewport width; the popover panel's width adapts to stay within
the viewport on narrow screens (`max-width: 420px`).

## Why this fits EaseMotion CSS

It's a self-contained, reusable interaction pattern with a distinct named
animation (`ease-rotate-click`) exposed entirely through custom
properties — matching the issue's ask for zero JavaScript animation
overhead and tunable timing/easing/angle — while staying genuinely
keyboard accessible.

All classes, custom properties, and the folder itself use a `-hr18` suffix
to avoid colliding with any other contributor's submission under
`submissions/examples/`.
