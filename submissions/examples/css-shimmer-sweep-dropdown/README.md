# CSS Shimmer-Sweep Dropdown

A pure CSS dropdown designed for gaming hub and esports dashboard layouts, featuring a metallic shimmer sweep effect across the menu container as it opens or gets hovered. No JavaScript required.

## How it works

Built on a pure CSS checkbox toggle pattern. A pseudo-element (`::after`) with a diagonal linear gradient is animated across the trigger and menu container using CSS keyframes (`ease-shimmer-sweep`). The animation triggers seamlessly when hovering the button or expanding the dropdown menu.

## Files

`demo.html`, `style.css`, `README.md`

## Custom properties

- `--ease-dropdown-duration`: Speed of the open/close state transitions (`0.35s`)
- `--ease-dropdown-radius`: Border radius for trigger and menu (`10px`)
- `--ease-dropdown-bg`: Dark surface background color (`#12131a`)
- `--ease-dropdown-border`: Subtle border color (`#232736`)
- `--ease-dropdown-text`: Main text color (`#f3f4f6`)
- `--ease-dropdown-muted-text`: Muted/secondary text color (`#8b92a5`)
- `--ease-dropdown-accent`: Accent color for category tags (`#8b5cf6`)
- `--ease-dropdown-shimmer`: Gradient value for the shimmer line pass

## Accessibility & Performance

- Uses GPU-accelerated CSS keyframe translation for smooth 60fps shimmer sweeps.
- Includes `@media (prefers-reduced-motion: reduce)` support to turn off shimmer animations and slide transforms for users sensitive to motion.