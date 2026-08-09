# CSS Blur-Entrance Dropdown for Gaming Hubs

A pure CSS dropdown menu styled for gaming hub and esports matchmaking layouts. The dropdown panel transitions from a heavily blurred and scaled-up state into full clarity as it opens, creating a focal entrance effect over HUD interfaces. No JavaScript required.

## How it works

Utilizes the pure CSS checkbox toggle pattern (`#ease-blur-dropdown-toggle`). When unopened, the menu container holds `filter: blur(10px)`, `opacity: 0`, and `transform: scale(1.05)`. Toggling the checkbox smoothly animates `filter`, `transform`, and `opacity` down to rest values (`blur(0)` and `scale(1)`), producing a sharpening entrance effect.

## Files

`demo.html`, `style.css`, `README.md`

## Custom properties

- `--ease-dropdown-duration`: Speed of the blur-to-focus animation (`0.4s`)
- `--ease-dropdown-radius`: Corner radius for trigger and menu (`10px`)
- `--ease-dropdown-bg`: Dark HUD background color (`#12131a`)
- `--ease-dropdown-border`: Subtle panel outline color (`#232736`)
- `--ease-dropdown-text`: Primary text color (`#f3f4f6`)
- `--ease-dropdown-muted-text`: Muted description text color (`#8b92a5`)
- `--ease-dropdown-accent`: Cyan gaming accent color (`#06b6d4`)
- `--ease-dropdown-blur`: Starting blur magnitude (`10px`)

## Accessibility & Performance

- Blur intensity is kept at a performant 10px threshold to prevent GPU rendering lag.
- Complete support for `@media (prefers-reduced-motion: reduce)` which disables `filter` and `transform` animations, defaulting to a direct opacity fade.