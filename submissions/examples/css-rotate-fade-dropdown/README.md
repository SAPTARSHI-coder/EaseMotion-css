# CSS Rotate-Fade Dropdown

A pure CSS dropdown styled as a currency selector for money transfers, rotating open around its top-left corner while fading in, like a page turning. No JavaScript.

## How it works

Standard checkbox-hack dropdown. The menu starts at `rotate(-8deg)` with `transform-origin: top left` and `opacity: 0`. On open, both `transform` and `opacity` transition to their resting values together, giving the impression of the menu swinging open from its anchored corner rather than a plain fade or straight slide.

## Files
`demo.html`, `style.css`, `README.md`

## Custom properties
`--ease-dropdown-duration`, `--ease-dropdown-radius`, `--ease-dropdown-bg`, `--ease-dropdown-border`, `--ease-dropdown-text`, `--ease-dropdown-muted-text`, `--ease-dropdown-accent`

## Notes
Respects `prefers-reduced-motion` — the menu fades in without the rotation.