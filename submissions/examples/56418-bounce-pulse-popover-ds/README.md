# Bounce-Pulse Popover

A pure CSS popover that bounces in and then gently pulses to draw
attention, designed for gaming-hub style layouts — achievement
unlocks, loot drops, level-up alerts, or other notification-style
callouts.

## 1. What does this do?

Shows a small floating panel anchored below a trigger button. On
open, the panel bounces in with a springy overshoot (scaling past
100% and settling back down), then pulses its outer glow twice to
draw the eye — appropriate for "something just happened" style
notifications rather than a static info panel. Everything is driven
by a hidden checkbox and CSS — no JavaScript.

## 2. How is it used?

Open `demo.html` directly in any browser — no build step or server
required. Each popover trigger/panel pair needs three parts sharing
the same unique `id`:

```html
<div class="bp-popover-wrap">
  <input type="checkbox" id="bpop-1" class="bp-popover-toggle">
  <label for="bpop-1" class="bp-popover-trigger">
    Trigger label
  </label>
  <div class="bp-popover" role="dialog" aria-label="Description of the popover">
    <div class="bp-popover-arrow"></div>
    <div class="bp-popover-icon">🏆</div>
    <div class="bp-popover-header">
      <span class="bp-popover-title">Title</span>
      <span class="bp-popover-sub">Subtitle</span>
    </div>
    <p class="bp-popover-desc">Description text.</p>
  </div>
</div>
```

Clicking the trigger label toggles the checkbox, which drives the
`:checked ~ .bp-popover` selector that shows and animates the panel.
Clicking the trigger again closes it.

### Key values to tune

- `top: calc(100% + 14px)` — vertical offset from the trigger
- `bp-bounce-in` keyframe's scale/translateY values — adjust for a
  stronger or subtler bounce
- `bp-pulse` keyframe's `box-shadow` spread and `rgba` alpha — adjust
  glow intensity and color
- `animation: bp-bounce-in 0.55s ..., bp-pulse 1.8s ... 2` — the `2`
  at the end of the pulse animation controls how many times it
  repeats after the bounce settles

## 3. Features

- **Pure CSS / HTML** — no JavaScript, driven entirely by a hidden
  checkbox and the `:checked` selector.
- **Bounce-pulse entrance** — a springy `bp-bounce-in` keyframe
  (overshoot scale + vertical settle) followed by two cycles of a
  `bp-pulse` glow animation, layered together via a two-part
  `animation` shorthand with a delay so the pulse starts only once
  the bounce has settled.
- **Fully responsive** — panels are centered under their trigger on
  wider viewports and left-aligned (with an adjusted arrow position)
  under `640px`, where popovers stack vertically.
- **`prefers-reduced-motion` support** — disables both the bounce
  and pulse animations, falling back to a short, plain opacity fade
  with no motion or glow.
- **Accessible trigger** — the trigger is a real `<label>` bound to a
  checkbox (keyboard/focus-operable via native form control
  behavior, with a visible focus ring), and the panel carries
  `role="dialog"` with an `aria-label`.

Fixes #56418.
