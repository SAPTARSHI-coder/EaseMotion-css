# Toggle Switch

## Summary

A pure CSS toggle switch submitted for issue #88579. No spec was
given beyond "advanced component," so this covers a commonly
requested pattern: an accessible sliding switch with zero JS.

## How it works

- A native `<input type="checkbox">` drives the state; it's visually
  hidden but remains keyboard/screen-reader accessible.
- `input:checked ~ .ease-switch-track` recolors the track, and
  `input:checked ~ .ease-switch-track::after` slides the thumb via
  `transform: translateX()`.
- The thumb transition uses a `cubic-bezier` overshoot curve for a
  spring-like feel.
- `:focus-visible` on the input draws an outline on the track so
  keyboard users can see focus state.
- `prefers-reduced-motion` disables the slide/transition entirely.

## Classes

- `ease-switch` — wrapping `<label>`, makes the whole row clickable
- `ease-switch-track` — the pill-shaped track + thumb (via `::after`)
- `ease-switch-label` — optional text label

## Files

- `demo.html` — live demo with an off and a pre-checked switch
- `style.css` — original CSS, single component

Relates to issue #88579.
