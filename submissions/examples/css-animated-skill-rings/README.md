# CSS Animated Skill Rings

A pure CSS multi-ring skill proficiency indicator component. Renders nested concentric progress arcs via inline SVG and animates stroke offsets smoothly on page load without external JavaScript libraries.

## How it works

The component combines SVG `<circle>` elements with CSS `stroke-dasharray` and `stroke-dashoffset` variables. Each concentric ring calculates its perimeter based on radius ($2 \times \pi \times r$) and animates its stroke offset down to the target fill percentage using staggered CSS keyframe sequences (`@keyframes ease-outer-fill`, etc.).

## Files

`demo.html`, `style.css`, `README.md`

## Custom properties

- `--ease-ring-card-bg`: Card container background color (`#0f172a`)
- `--ease-ring-card-border`: Card boundary border color (`#1e293b`)
- `--ease-ring-track-bg`: Unfilled track stroke color (`#1e293b`)
- `--ease-ring-text`: Primary headline color (`#f8fafc`)
- `--ease-ring-muted-text`: Subtitle description color (`#94a3b8`)
- `--ease-ring-accent`: Cyan theme highlight (`#06b6d4`)
- `--ease-ring-outer-color`: Outer ring fill color (`#06b6d4`)
- `--ease-ring-middle-color`: Middle ring fill color (`#3b82f6`)
- `--ease-ring-inner-color`: Inner ring fill color (`#a855f7`)
- `--ease-ring-duration`: Load fill animation time (`1.6s`)

## Accessibility & Performance

- Includes proper container scoping (`role="region"`, `aria-label`) while keeping structural SVG elements decorative (`aria-hidden="true"`).
- Full support for `@media (prefers-reduced-motion: reduce)` which disables stroke fill animations and immediately renders final percentage states.