# CSS Ripple-Wave Dropdown

A pure CSS dropdown styled as a statement period filter, with a ripple that radiates outward from the center when the menu opens. No JavaScript.

## How it works

Standard checkbox-hack dropdown. A small circular `::` element (`.ease-dropdown-ripple`) sits centered in the menu, hidden by default. When the checkbox is checked, it plays a `@keyframes` animation that scales it up to cover the whole menu while fading out — a ripple wave effect layered underneath the menu items.

## Files
`demo.html`, `style.css`, `README.md`

## Custom properties
`--ease-dropdown-duration`, `--ease-dropdown-radius`, `--ease-dropdown-bg`, `--ease-dropdown-border`, `--ease-dropdown-text`, `--ease-dropdown-muted-text`, `--ease-dropdown-accent`

## Notes
Respects `prefers-reduced-motion` — the ripple is hidden entirely and the menu just fades in.