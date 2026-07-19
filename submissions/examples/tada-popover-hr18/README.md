# Tada-Click Popover (`tada-popover-hr18`)

A pure-CSS animated popover with a "Tada-Click" entrance, styled for SaaS
showcase / product-page layouts, built for issue
[#46557](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/46557).

## What it does

Clicking a trigger button reveals a popover panel that pops in with a
playful "tada" wobble — scales up past its resting size, rocks slightly
left and right, then settles. The **animation itself is 100% CSS**
(`@keyframes ease-tada-click-hr18`, driven entirely by custom properties);
a small amount of vanilla JavaScript only handles the click-to-toggle
state, `Escape`-to-close, click-outside-to-close, and keeping
`aria-expanded` in sync — there's no animation logic in JavaScript at all.

The demo shows it applied three times in a typical SaaS feature-showcase
layout (Analytics / Automation / Integrations cards), each with its own
independent popover.

## Installation

Nothing to install — `demo.html` is self-contained and opens directly in a
browser (double-click the file). It links a single local `style.css`; no
build step, package manager, or external CDN.

## Usage

Wrap a trigger button and a popover panel in the component markup:

```html
<div class="tdp-popover-wrap-hr18" data-open="false">
  <button type="button" class="tdp-trigger-hr18" aria-haspopup="dialog" aria-expanded="false">
    Learn more
  </button>
  <div class="ease-popover-hr18" role="dialog" aria-label="Feature details" hidden>
    <button type="button" class="tdp-popover-close-hr18" aria-label="Close">&times;</button>
    <p class="tdp-popover-title-hr18">Analytics</p>
    <p class="tdp-popover-hr18-body">Real-time dashboards for every metric that matters.</p>
    <a href="#" class="tdp-popover-link-hr18">View docs &rarr;</a>
  </div>
</div>
```

The included script finds every `.tdp-popover-wrap-hr18` on the page
automatically and wires it up — a new popover only needs the markup above,
no extra JavaScript per instance. Opening one popover closes any other
that's currently open.

### Tuning the animation

Every timing/scale value is a CSS custom property, overridable per instance
or globally:

| Property | Default | Controls |
|---|---|---|
| `--ease-tada-duration-hr18` | `550ms` | How long the pop-in + wobble takes |
| `--ease-tada-easing-hr18` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | The overshoot curve that gives the "tada" its bounce |
| `--ease-tada-scale-hr18` | `1.08` | Peak scale during the wobble — lower for a subtler pop |
| `--ease-tada-delay-hr18` | `0ms` | Delay before the animation starts |

```css
.tdp-popover-wrap-hr18.subtle {
  --ease-tada-scale-hr18: 1.02;
  --ease-tada-duration-hr18: 350ms;
}
```

## Accessibility notes

- The trigger is a native `<button>` with `aria-haspopup="dialog"` and
  `aria-expanded` kept in sync with the popover's open state.
- `Escape` closes the popover and returns focus to its trigger.
- Clicking outside the open popover closes it.
- The panel itself has `role="dialog"` and an `aria-label` describing its
  content, plus a visible, keyboard-reachable close button.
- Fully keyboard operable: `Tab` to the trigger, `Enter`/`Space` to open,
  `Tab` to reach the close button or link inside, `Escape` to dismiss.
- The wobble animation respects `@media (prefers-reduced-motion: reduce)`
  and settles instantly to its final state instead.

## Responsiveness

The three-card feature row collapses from three columns to one under a
`680px` viewport width; the popover panel itself uses a fixed comfortable
width that fits within that layout at every size.

## Why this fits EaseMotion CSS

It's a self-contained, reusable interaction pattern with a distinct named
animation (`ease-tada-click`) exposed entirely through custom properties —
matching the issue's ask for zero JavaScript animation overhead and
tunable timing/easing/scale — while still being genuinely keyboard
accessible from the start, not bolted on afterward.

All classes, custom properties, and the folder itself use a `-hr18` suffix
to avoid colliding with any other contributor's submission under
`submissions/examples/`.
