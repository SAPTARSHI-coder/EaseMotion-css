# Rotate-Fade Popover

A pure CSS popover that rotates and fades in on open, designed for
gaming-hub style layouts — player cards, quick match stats, or
hover-info panels.

## 1. What does this do?

Shows a small floating panel anchored below a trigger button. On
open, the panel animates in with a combined rotate + fade + scale
entrance (a slight tilt straightening out as it appears and
overshoots slightly before settling), instead of a plain fade. On
close it fades back out smoothly. Everything is driven by a hidden
checkbox and CSS — no JavaScript.

## 2. How is it used?

Open `demo.html` directly in any browser — no build step or server
required. Each popover trigger/panel pair needs three parts sharing
the same unique `id`:

```html
<div class="rf-popover-wrap">
  <input type="checkbox" id="pop-1" class="rf-popover-toggle">
  <label for="pop-1" class="rf-popover-trigger">
    Trigger label
  </label>
  <div class="rf-popover" role="dialog" aria-label="Description of the popover">
    <div class="rf-popover-arrow"></div>
    <div class="rf-popover-header">
      <span class="rf-popover-title">Title</span>
      <span class="rf-popover-rank">Subtitle / meta line</span>
    </div>
    <div class="rf-popover-body">
      <div class="rf-stat"><span>Label</span><strong>Value</strong></div>
    </div>
  </div>
</div>
```

Clicking the trigger label toggles the checkbox, which drives the
`:checked ~ .rf-popover` selector that shows and animates the panel.
Clicking the trigger again (or any other trigger) closes it.

### CSS custom properties / key values to tune

The animation and positioning are controlled by plain property values
rather than custom properties, so they're easy to override per
instance by targeting `.rf-popover` with a more specific selector:

- `top: calc(100% + 14px)` — vertical offset from the trigger
- `transform-origin: top center` — pivot point for the rotate effect
- The `rf-rotate-fade-in` keyframe's rotation/scale values — adjust
  for a stronger or subtler entrance

## 3. Features

- **Pure CSS / HTML** — no JavaScript, driven entirely by a hidden
  checkbox and the `:checked` selector.
- **Rotate-fade entrance** — combines `rotate()`, `scale()`,
  `translateY()`, and `opacity` in one keyframe
  (`rf-rotate-fade-in`) using a slight overshoot easing
  (`cubic-bezier(0.34, 1.56, 0.64, 1)`) for a lively, game-UI feel.
- **Fully responsive** — panels are centered under their trigger on
  wider viewports and left-aligned (with an adjusted arrow position)
  under `640px`, where popovers stack vertically.
- **`prefers-reduced-motion` support** — disables the rotate/scale
  animation and overshoot, falling back to a short, plain opacity
  fade with no motion.
- **Accessible trigger** — the trigger is a real `<label>` bound to a
  checkbox (keyboard/focus-operable via native form control
  behavior, with a visible focus ring), and the panel carries
  `role="dialog"` with an `aria-label`.

Fixes #56417.
