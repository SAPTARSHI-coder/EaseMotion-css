# Marquee Hover Touch Guard Fix

## What does this do?

Wraps `.ease-marquee:hover .ease-marquee-track` in
`@media (hover: hover) and (pointer: fine)` to prevent the marquee from
freezing on touch devices when tapped.

## The problem

`components/ease-marquee.css` pauses the scrolling animation on hover:

```css
/* Current — fires on touch tap */
.ease-marquee:hover .ease-marquee-track {
  animation-play-state: var(--marquee-pause-on-hover);
}
```

On touch devices, browsers synthesise a `:hover` event when a user taps
an element. This synthetic state does not clear when the finger lifts — it
persists until focus moves elsewhere. Tapping a marquee on mobile pauses
the scrolling animation permanently until the user taps somewhere else.

For a logo strip, brand banner, or ticker that is meant to scroll
continuously, this is a functional breakage: the marquee stops working
on every tap.

## The fix

```css
@media (hover: hover) and (pointer: fine) {
  .ease-marquee:hover .ease-marquee-track {
    animation-play-state: var(--marquee-pause-on-hover);
  }
}
```

`hover: hover` — matches only devices that support real hovering.
`pointer: fine` — matches only precise pointing devices (mouse, trackpad).

On touch devices, neither condition is true, so the pause rule is skipped
entirely. On desktop, hover-pause works exactly as before.

## Behaviour after fix

| Interaction | Device | Before | After |
|---|---|---|---|
| Tap marquee | Touch | Scrolling freezes, stays paused | Scrolling continues |
| Hover marquee | Mouse | Scrolling pauses | Scrolling pauses (unchanged) |
| Remove hover | Mouse | Scrolling resumes | Scrolling resumes (unchanged) |

## Note on existing submission

`submissions/examples/marquee-hover-fix/` referenced issue #4242 and
proposed the same fix. It was not integrated into `ease-marquee.css`.
This submission re-proposes the fix with an updated demo showing the
broken and fixed behaviour side by side.

## Demo

Open in Chrome DevTools with Device Toolbar enabled. Tap the Broken
marquee — it freezes. Tap the Fixed marquee — it keeps scrolling.
