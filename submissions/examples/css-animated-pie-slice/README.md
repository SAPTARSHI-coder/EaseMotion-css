# CSS Animated Pie Slice

A pure CSS single pie slice indicator component. Animates its rotational slice arc from `0deg` up to a target angle on page load using modern `@property` CSS variables and `conic-gradient` rendering. Built without JavaScript dependencies.

## How it works

The component leverages `@property --ease-pie-angle` with `<angle>` syntax specification, allowing smooth CSS keyframe interpolation of `conic-gradient` backgrounds (`conic-gradient(var(--ease-pie-slice-color) var(--ease-pie-angle), var(--ease-pie-chart-bg) 0deg)`). `@keyframes ease-pie-fill` animates `--ease-pie-angle` from `0deg` to the specified `--ease-pie-target-angle` value.

## Files

`demo.html`, `style.css`, `README.md`

## Custom properties

- `--ease-pie-size`: Diameter dimensions of the pie chart (`160px`)
- `--ease-pie-card-bg`: Card surface background color (`#0f172a`)
- `--ease-pie-chart-bg`: Unfilled pie sector color (`#1e293b`)
- `--ease-pie-border`: Border boundary line color (`#334155`)
- `--ease-pie-text`: Value text color (`#f8fafc`)
- `--ease-pie-muted`: Subtitle description text color (`#94a3b8`)
- `--ease-pie-accent`: Primary sky-blue brand color (`#38bdf8`)
- `--ease-pie-target-angle`: Rotational fill target (`234deg` / 65%)
- `--ease-pie-duration`: Animation load duration (`1.8s`)

## Accessibility & Performance

- Fully accessible using standard progress attributes (`role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, `aria-label`).
- Full support for `@media (prefers-reduced-motion: reduce)` which disables keyframe sweep animations and directly renders the final target conic gradient.