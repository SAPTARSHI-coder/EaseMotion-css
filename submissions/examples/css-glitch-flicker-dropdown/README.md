# CSS Glitch-Flicker Dropdown

A pure CSS dropdown styled as a session security menu, appearing with a rapid glitch-flicker rather than a smooth fade. No JavaScript.

## How it works

Instead of a `transition`, the menu's entrance is entirely `@keyframes`-driven with `steps(1, end)` timing — this makes each keyframe step snap instantly rather than interpolate, so the opacity and slight horizontal position jump abruptly between values, reading as a flicker rather than a glide.

## Files
`demo.html`, `style.css`, `README.md`

## Custom properties
`--ease-dropdown-radius`, `--ease-dropdown-bg`, `--ease-dropdown-border`, `--ease-dropdown-text`, `--ease-dropdown-muted-text`, `--ease-dropdown-accent`

## Notes
Respects `prefers-reduced-motion` — the menu appears instantly at full opacity, no glitch steps.