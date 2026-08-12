# Swing-Hover Popover (`swing-hover-popover-hr18`)

A pure-CSS animated popover with a "Swing-Hover" pendulum motion, styled for
responsive dashboard layouts, built for issue
[#46548](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/46548).

## What it does

Hovering — or tabbing to, with a keyboard — a small info-icon trigger
reveals an explanatory popover that swings in like it's rocking on the
hinge of its own pointer arrow, then settles to rest. Both the
**show/hide behavior and the swing animation are pure CSS**, driven by
`:hover` and `:focus-within` plus `@keyframes ease-swing-hover-hr18` — no
JavaScript is required for the core interaction at all. A few lines of
optional script only add `Escape`-to-dismiss as a convenience.

The demo applies it to three dashboard stat cards (Monthly Revenue, Active
Users, Churn Rate), each with its own info popover explaining that metric.

## Installation

Nothing to install — `demo.html` is self-contained and opens directly in a
browser (double-click the file). It links a single local `style.css`; no
build step, package manager, or external CDN.

## Usage

Wrap an info-icon trigger and a popover bubble in the component markup:

```html
<span class="swh-popover-wrap-hr18">
  <button type="button" class="swh-info-trigger-hr18" aria-describedby="myTip">i</button>
  <span class="ease-popover-swing-hr18" id="myTip" role="tooltip">
    Total recognized revenue this billing cycle, before refunds and chargebacks.
  </span>
</span>
```

That's the entire component — no JavaScript wiring is needed per instance.
Add as many as you like anywhere on a page.

### Tuning the animation

Every timing/amplitude value is a CSS custom property, overridable per
instance or globally:

| Property | Default | Controls |
|---|---|---|
| `--ease-swing-duration-hr18` | `700ms` | How long the pendulum motion takes to settle |
| `--ease-swing-easing-hr18` | `ease-out` | The easing curve applied to the whole swing sequence |
| `--ease-swing-amplitude-hr18` | `14deg` | How far the first, biggest swing rotates — later rocks scale off this |
| `--ease-swing-delay-hr18` | `0ms` | Delay before the swing starts after hover/focus |

```css
.swh-popover-wrap-hr18.gentle {
  --ease-swing-amplitude-hr18: 6deg;
  --ease-swing-duration-hr18: 500ms;
}
```

## Accessibility notes

- The trigger is a native `<button>`, reachable and triggerable by keyboard
  without any extra scripting.
- The popover shows on `:focus-within` as well as `:hover`, so keyboard-only
  users see exactly the same content sighted mouse users do — not just a
  hover-only tooltip they can never reach.
- The trigger and its popover are connected with `aria-describedby`, and the
  popover carries `role="tooltip"`, so it's announced together with the
  control it describes.
- The popover contains only descriptive text — no interactive content —
  matching the WAI-ARIA tooltip pattern's expectations, so nothing inside it
  is ever unreachable.
- `Escape` blurs the trigger (via the small optional script) to dismiss the
  popover early without needing to tab away.
- The swing animation respects `@media (prefers-reduced-motion: reduce)`
  and settles to its final position instantly instead.

## Responsiveness

The three-card stat row collapses from three columns to one under a
`680px` viewport width; the popover bubble uses a fixed comfortable width
that fits within that layout at every size.

## Why this fits EaseMotion CSS

The entire interaction — visibility and animation both — runs on plain CSS
selectors and a single `@keyframes` block, matching the issue's explicit
ask for "zero JavaScript overhead," while still exposing every timing value
as a tunable custom property and remaining genuinely keyboard accessible
via `:focus-within`.

All classes, custom properties, and the folder itself use a `-hr18` suffix
to avoid colliding with any other contributor's submission under
`submissions/examples/`.
