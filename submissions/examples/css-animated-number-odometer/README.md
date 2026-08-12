# CSS Animated Number Odometer

A pure CSS mechanical odometer component that animates numerical counters with vertical rolling digit reels on load. Built entirely with CSS animations and transforms without JavaScript libraries.

## How it works

Each digit column (`.ease-digit-column`) acts as a masked viewport window (`overflow: hidden`). Inside, a vertical strip containing digits `0` through `9` (`.ease-digit-reel`) translates vertically along the Y-axis (`translateY`) using target keyframe utility classes (`.ease-roll-9`, `.ease-roll-4`, etc.) and staggered animation delays.

## Files

`demo.html`, `style.css`, `README.md`

## Custom properties

- `--ease-odo-bg`: Main surface background (`#0f172a`)
- `--ease-odo-card-bg`: Card panel background (`#1e293b`)
- `--ease-odo-reel-bg`: Inner odometer inset frame (`#090a0f`)
- `--ease-odo-border`: Boundary border line color (`#334155`)
- `--ease-odo-text`: Primary digit text color (`#f8fafc`)
- `--ease-odo-muted-text`: Subtitle description color (`#94a3b8`)
- `--ease-odo-accent`: Sky-blue accent color (`#38bdf8`)
- `--ease-odo-digit-height`: Fixed vertical line-height for individual digits (`2.8rem`)
- `--ease-odo-duration`: Rolling animation duration (`2.2s`)
- `--ease-odo-radius`: Corner radius (`12px`)

## Accessibility & Performance

- Fully accessible using semantic wrapper tags (`role="region"`) and descriptive `aria-label` declarations announcing the final numeric total directly to screen readers.
- Full support for `@media (prefers-reduced-motion: reduce)` which disables roll animations and immediately displays final target digits.