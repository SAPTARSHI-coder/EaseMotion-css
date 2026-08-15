# CSS Ticking Digital Clock

A seven-segment digital clock built with pure CSS — no JavaScript, no SVG,
no images. Each digit is a `<div>` with seven `<span>` "segments" shaped
with `clip-path`, and every segment has its own `@keyframes` animation
that turns it on/off to spell out the digits `0` through `9` in a loop,
so the whole display looks like it's genuinely ticking.

## Files

- `demo.html` — the six-digit `HH:MM:SS` clock with blinking colons
- `style.css` — segment shapes, glow styling, and all keyframe animations
- `README.md` — this file

## How it works

Each digit box contains 7 absolutely-positioned `.segment` elements
(`a` through `g`, matching the classic seven-segment naming convention).
Every segment has its own `@keyframes seg-X-cycle` animation that toggles
`opacity` between `0` and `1` at ten evenly-spaced keyframe stops — one
stop per digit `0`-`9` — using tight percentage pairs (e.g. `10%, 19.6%`)
so the transition reads as an instant digital "tick" rather than a fade.

A faint `::before` ghost of the full display sits behind each digit
(low-opacity red), the way real LED/LCD seven-segment displays show the
unlit segments — a nice detail that also reinforces what's animating.

## Usage

```html
<div class="ticking-clock" role="img" aria-label="Animated digital clock display">
  <div class="clock-group">
    <div class="digit speed-slow">
      <span class="segment a"></span>
      <span class="segment b"></span>
      <span class="segment c"></span>
      <span class="segment d"></span>
      <span class="segment e"></span>
      <span class="segment f"></span>
      <span class="segment g"></span>
    </div>
  </div>
</div>
```

Each `.digit` takes a speed modifier class — `speed-fast`, `speed-mid`,
or `speed-slow` — which just changes `animation-duration` /
`animation-delay` so the six digits don't all cycle in lockstep.

### Why doesn't it show the real time?

The issue asks for a "ticking digital clock display with live time," but
pure CSS has no way to read the system clock — there's no CSS feature
that can fetch the current time or drive a counter from real elapsed
wall-clock time. That's fundamentally a JavaScript capability.

To stay true to the "no JavaScript" constraint, I built this as a
decorative, always-animating seven-segment clock: each digit loops
through `0`-`9` continuously via CSS keyframes, so it looks and behaves
like a ticking digital clock without ever claiming to show the actual
current time. `aria-label` and `role="img"` make that explicit for
assistive tech.

If the maintainer would prefer an actually-live clock, that's a
one-function addition on top of this same CSS — happy to add a small,
clearly-separated JS enhancement layer if preferred over the pure-CSS
illusion.

### Accessibility

- `role="img"` + `aria-label` describe the whole clock as a single
  decorative unit and explicitly note it doesn't show real time, so
  screen readers don't announce it as a live time widget.
- No interactive elements, so no keyboard traps.
- `prefers-reduced-motion: reduce` freezes all segments into a static
  glyph instead of continuously animating.

### Responsive behavior

A `max-width: 420px` breakpoint shrinks digit and segment dimensions and
tightens spacing so the clock stays legible on small screens.

## Why it fits EaseMotion CSS

Pure CSS/HTML, no JavaScript, no external assets, readable per-segment
`@keyframes`, and accessible/responsive markup — matching the repo's
animation-first, accessible-by-default philosophy.

## Notes

- No existing files were modified — strictly additive, living entirely
  in `submissions/examples/css-ticking-digital-clock/`.
