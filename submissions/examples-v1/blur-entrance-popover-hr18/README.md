# Blur-Entrance Popover (`blur-entrance-popover-hr18`)

A pure-CSS animated popover with a "Blur-Entrance" transition, styled for
responsive dashboard layouts, built for issue
[#46475](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/46475).

## What it does

Clicking a toolbar icon reveals a popover panel that sharpens into view —
starting slightly blurred, scaled down, and transparent, then settling to
fully sharp, full size, and opaque. The **animation itself is 100% CSS**
(`@keyframes ease-blur-entrance-hr18`, driven entirely by custom
properties); a small amount of vanilla JavaScript only handles click-to-
toggle, `Escape`-to-close, click-outside-to-close, and keeping
`aria-expanded` in sync — no animation logic lives in JavaScript.

The demo shows it applied to a small dashboard toolbar with two icon
triggers — Notifications and Quick settings — each opening its own
independent popover with a short list inside.

## Installation

Nothing to install — `demo.html` is self-contained and opens directly in a
browser (double-click the file). It links a single local `style.css`; no
build step, package manager, or external CDN.

## Usage

Wrap an icon trigger and a popover panel in the component markup:

```html
<div class="bep-popover-wrap-hr18" data-open="false">
  <button type="button" class="bep-icon-trigger-hr18" aria-haspopup="dialog" aria-expanded="false" aria-label="Notifications">
    <!-- icon SVG -->
  </button>
  <div class="ease-popover-blur-hr18" role="dialog" aria-label="Notifications">
    <div class="bep-popover-head-hr18">
      <strong>Notifications</strong>
      <button type="button" class="bep-popover-close-hr18" aria-label="Close">&times;</button>
    </div>
    <!-- popover content -->
  </div>
</div>
```

The included script finds every `.bep-popover-wrap-hr18` on the page
automatically and wires it up — a new popover only needs the markup above.
Opening one popover closes any other that's currently open.

### Tuning the animation

Every timing/blur/scale value is a CSS custom property, overridable per
instance or globally:

| Property | Default | Controls |
|---|---|---|
| `--ease-blur-duration-hr18` | `380ms` | How long the sharpen-in takes |
| `--ease-blur-easing-hr18` | `cubic-bezier(0.22, 1, 0.36, 1)` | The easing curve for the entrance |
| `--ease-blur-amount-hr18` | `10px` | Starting blur radius — higher looks softer/further away |
| `--ease-blur-scale-hr18` | `0.96` | Starting scale, so the panel also grows slightly into place |
| `--ease-blur-delay-hr18` | `0ms` | Delay before the entrance starts |

```css
.bep-popover-wrap-hr18.dramatic .ease-popover-blur-hr18 {
  --ease-blur-amount-hr18: 20px;
  --ease-blur-duration-hr18: 550ms;
}
```

## Accessibility notes

- The trigger is a native `<button>` with `aria-haspopup="dialog"` and
  `aria-expanded` kept in sync with the popover's open state, plus a real
  `aria-label` since it's icon-only.
- `Escape` closes the popover and returns focus to its trigger.
- Clicking outside the open popover closes it.
- The panel has `role="dialog"` and an `aria-label`, plus a visible,
  keyboard-reachable close button.
- Fully keyboard operable: `Tab` to the trigger, `Enter`/`Space` to open,
  `Tab` through the close button and list items, `Escape` to dismiss.
- The blur/scale entrance respects
  `@media (prefers-reduced-motion: reduce)` and appears instantly at full
  clarity instead.

## Responsiveness

The popover panel's width adapts to stay within the viewport on narrow
screens (`max-width: 420px`), and its item list scrolls internally rather
than growing the panel indefinitely.

## Why this fits EaseMotion CSS

It's a self-contained, reusable interaction pattern with a distinct named
animation (`ease-blur-entrance`) exposed entirely through custom
properties — matching the issue's ask for zero JavaScript animation
overhead and tunable timing/easing/scale — while remaining genuinely
keyboard accessible.

All classes, custom properties, and the folder itself use a `-hr18` suffix
to avoid colliding with any other contributor's submission under
`submissions/examples/`.
