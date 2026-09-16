# Parallax Progress Bar with Neon Styling

A pure CSS cyberpunk-themed progress bar component featuring multi-layered parallax spatial depth shifts, animated striped diagonal sheen paths, leading-edge glow tips, and neon status readouts. Built without JavaScript dependencies.

## How it works

The progress bar separates internal visuals into distinct spatial Z-layers:
1. **Glow Backdrop (`.ease-plx-glow`)**: Expands outward (`scale(1.15)`) on hover state.
2. **Foreground Progress Fill (`.ease-progress-fill`)**: Dynamically sets width using CSS custom property `--ease-progress-val` (e.g. `78%`) with `box-shadow` cyan neon diffusion.
3. **Striped Sheen Pattern (`.ease-plx-stripes`)**: Renders a diagonal background pattern translating infinitely via `@keyframes ease-stripe-move` while shifting horizontally (`translateX(-4px)`) on hover.

## Files

`demo.html`, `style.css`, `README.md`

## Custom properties

- `--ease-plx-bg`: Outer dark surface background (`#030712`)
- `--ease-plx-card-bg`: Card frame background (`#0b0f19`)
- `--ease-plx-border`: Boundary border color (`#1f293d`)
- `--ease-neon-cyan`: Primary neon cyan accent color (`#06b6d4`)
- `--ease-neon-cyan-glow`: Translucent cyan ambient glow (`rgba(6, 182, 212, 0.45)`)
- `--ease-progress-val`: Percentage width value for progress bar fill (e.g., `78%`)

## Accessibility & Performance

- Fully accessible using native progress semantics (`role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, `aria-label`).
- Keyboard focusable (`tabindex="0"`) with a dedicated focus ring outline (`:focus-visible`).
- Full support for `@media (prefers-reduced-motion: reduce)` which disables stripe animations and hover transform shifts.