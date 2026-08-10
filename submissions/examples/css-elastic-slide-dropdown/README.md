# CSS Elastic-Slide Dropdown

A pure CSS dropdown menu styled as an account selector for a fintech dashboard, with a springy elastic slide-down when opened. No JavaScript, no dependencies.

## How it works

The dropdown uses the checkbox hack: a hidden checkbox paired with a label trigger. When checked, the menu — absolutely positioned below the trigger — becomes visible and plays a dedicated `@keyframes` animation on open. Rather than a plain linear slide, the keyframe overshoots slightly past its resting position before settling, giving an elastic drop rather than a flat glide.

The menu uses `visibility` with a delayed transition on close, so it doesn't intercept clicks while invisible or mid-fade-out — the same pattern used in the framework's modal submission.

## Files
- `demo.html` – an account-selector dropdown with 3 account options
- `style.css` – all styling, custom properties, and the elastic-slide keyframe
- `README.md` – this file

## Custom properties
- `--ease-dropdown-duration`, `--ease-dropdown-easing` – open animation timing/curve
- `--ease-dropdown-radius` – corner radius
- `--ease-dropdown-bg`, `--ease-dropdown-border` – surface colors
- `--ease-dropdown-text`, `--ease-dropdown-muted-text` – text colors
- `--ease-dropdown-accent` – eyebrow and highlight color

## Notes
- Fully responsive
- Respects `prefers-reduced-motion` — the elastic keyframe is disabled, the menu simply fades in