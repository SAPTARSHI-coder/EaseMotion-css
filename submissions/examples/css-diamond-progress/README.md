# CSS Diamond Progress

A pure CSS diamond/rhombus shaped progress indicator component. Automatically animates its fluid fill state on page load using CSS keyframe transforms and variable clipping bounds without relying on JavaScript.

## How it works

The outer container (`.ease-diamond-track`) uses `transform: rotate(45deg)` and `overflow: hidden` to form a geometric rhombus. An inner fill layer (`.ease-diamond-fill`) calculates a bottom-up percentage height using `--ease-diamond-progress` and counter-rotates (`transform: rotate(-45deg)`) to keep the liquid fill horizontal during the entrance keyframe sequence.

## Files

`demo.html`, `style.css`, `README.md`

## Custom properties

- `--ease-diamond-size`: Width and height dimensions of the diamond (`110px`)
- `--ease-diamond-border-width`: Track border stroke thickness (`3px`)
- `--ease-diamond-bg`: Card container background color (`#0f172a`)
- `--ease-diamond-track-bg`: Unfilled diamond interior background (`#1e293b`)
- `--ease-diamond-border`: Diamond track outline color (`#334155`)
- `--ease-diamond-fill-color`: Gradient value for progress level (`linear-gradient(...)`)
- `--ease-diamond-text`: Primary headline color (`#f8fafc`)
- `--ease-diamond-muted-text`: Subtitle and label text color (`#94a3b8`)
- `--ease-diamond-accent`: Brand accent highlight color (`#06b6d4`)
- `--ease-diamond-progress`: Completion percentage fill target (`75%`)
- `--ease-diamond-duration`: Load fill animation time (`1.8s`)

## Accessibility & Performance

- Includes standard accessibility attributes (`role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, `aria-label`).
- Full support for `@media (prefers-reduced-motion: reduce)` which disables the initial fill keyframe sequence and instantly renders the target percentage state.