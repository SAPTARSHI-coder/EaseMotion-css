# CSS Blur-Entrance Dropdown

A pure CSS dropdown styled as an export-format menu, sharpening from blurred to fully in-focus as it opens. No JavaScript.

## How it works

Standard checkbox-hack dropdown. The menu starts at `filter: blur(10px)`, slightly scaled up, and hidden. On open, `filter`, `transform`, and `opacity` all transition together to their resting values, so the menu appears to come into focus rather than simply fading or sliding in.

## Files
`demo.html`, `style.css`, `README.md`

## Custom properties
`--ease-dropdown-duration`, `--ease-dropdown-radius`, `--ease-dropdown-bg`, `--ease-dropdown-border`, `--ease-dropdown-text`, `--ease-dropdown-muted-text`, `--ease-dropdown-accent`, `--ease-dropdown-blur` — how blurred the menu starts (10px)

## Notes
`filter: blur()` can be more GPU-intensive than opacity/transform alone; kept moderate for performance. Respects `prefers-reduced-motion` — the menu fades in without blur or scale.