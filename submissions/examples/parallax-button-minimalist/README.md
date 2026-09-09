# Parallax Button with Minimalist Styling

A pure CSS parallax button component with minimalist aesthetic design. Features differential Z-plane displacement across background, frame border, and foreground content layers on hover and keyboard focus states without external JavaScript libraries.

## How it works

The button separates structural elements into three independent spatial layers positioned inside a relative viewport container (`.ease-btn-parallax`):
1. **Background Layer (`.ease-btn-bg`)**: Moves downward (`translateY(2px) scale(0.98)`) on hover to simulate resting surface weight.
2. **Border Frame Layer (`.ease-btn-border`)**: Moves upward at medium speed (`translateY(-4px)`).
3. **Foreground Content Layer (`.ease-btn-content`)**: Elevates at maximum velocity (`translateY(-6px)`), creating spatial multi-plane depth separation.

## Files

`demo.html`, `style.css`, `README.md`

## Custom properties

- `--ease-plx-bg`: Main dark background (`#0f172a`)
- `--ease-plx-card-bg`: Card panel surface (`#1e293b`)
- `--ease-plx-border`: Border line color (`#334155`)
- `--ease-plx-text`: Primary text color (`#f8fafc`)
- `--ease-plx-muted`: Description text color (`#94a3b8`)
- `--ease-plx-accent`: Sky-blue accent highlight (`#38bdf8`)
- `--ease-plx-btn-bg`: Inner button background (`#090a0f`)
- `--ease-plx-duration`: Layer movement transition duration (`0.35s`)

## Accessibility & Performance

- Fully accessible using semantic `<button>` elements, clean focus rings (`:focus-visible`), and explicit `aria-label` declarations.
- Full support for `@media (prefers-reduced-motion: reduce)` which disables multi-layer transform displacement keyframes.