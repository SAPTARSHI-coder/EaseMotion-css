# CSS GitHub Stats Card

A pure CSS GitHub-style contribution stats card complete with a heat-map activity grid, streak badge counter, metrics header, and intensity legend. Built with responsive layout techniques and load-in pop keyframe animations. No JavaScript required.

## How it works

The contribution grid is rendered using CSS flexbox column arrays (`.ease-grid-matrix` and `.ease-grid-col`). Each activity square (`.ease-cell`) assigns dark mode color variables (`--ease-gh-level-0` through `--ease-gh-level-4`) based on activity volume, with CSS `@keyframes ease-cell-pop` driving the load-in sequence.

## Files

`demo.html`, `style.css`, `README.md`

## Custom properties

- `--ease-gh-bg`: Inset grid matrix background color (`#0d1117`)
- `--ease-gh-card-bg`: Card surface background color (`#161b22`)
- `--ease-gh-border`: Boundary line color (`#30363d`)
- `--ease-gh-text`: Primary headline color (`#f0f6fc`)
- `--ease-gh-muted-text`: Subtitle and handle text color (`#8b949e`)
- `--ease-gh-accent`: Primary blue accent color (`#2f81f7`)
- `--ease-gh-level-0` to `--ease-gh-level-4`: GitHub dark-theme contribution heat scale colors

## Accessibility & Performance

- Complete accessibility structure using `role="region"`, explicit `aria-label` declarations, and cell `title` attributes for screen readers.
- Full support for `@media (prefers-reduced-motion: reduce)` which bypasses grid entrance keyframes and hover scaling effects.