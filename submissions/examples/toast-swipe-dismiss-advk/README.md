# Toast Swipe Dismiss

## What does this do?

A notification stack where each toast slides in from the edge, shows a countdown
bar for its remaining lifetime, and is staggered against its neighbours.

## How is it used?

```html
<div class="tsd-stack" role="region" aria-label="Notifications">
  <article class="tsd-toast tsd-toast--ok">
    <span class="tsd-ico" aria-hidden="true"></span>
    <div><h2 class="tsd-t">Saved</h2><p class="tsd-d">Your changes were written.</p></div>
    <span class="tsd-timer"></span>
  </article>
</div>
```

Severity comes from `--ok` / `--warn` / `--err`, each of which only re-points a
single `--accent` custom property.

## Why is it useful?

`components/toast.css` has no reduced-motion handling and no visible dwell timer.
The timer matters for more than decoration: WCAG 2.2.1 (Timing Adjustable) is
concerned with content that disappears on a deadline the user cannot perceive.
A toast that vanishes after six seconds with no indication gives a slow reader no
way to know their time is running out. A countdown bar makes the deadline
visible, which is the cheapest meaningful improvement to the pattern.

Driving every severity from one `--accent` property means the icon, left border
and timer stay in sync with a one-line modifier, rather than three parallel rules
per variant that drift apart as variants are added.

The countdown uses `transform: scaleX()` rather than `width`, so a stack of
toasts counting down simultaneously stays on the compositor instead of forcing a
layout pass per frame per toast.
