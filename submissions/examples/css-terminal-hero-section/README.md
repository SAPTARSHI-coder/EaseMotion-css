# CSS Terminal Hero Section

A pure CSS developer-themed hero section component featuring an animated command-line terminal code typing sequence, call-to-action buttons, and responsive grid layout. Built without JavaScript dependencies.

## How it works

The hero section uses a 2-column CSS Grid layout (`.ease-hero-container`). The right column renders a styled dark terminal window (`.ease-terminal-window`). Command typing effects are achieved using CSS `steps()` timing functions and width animations (`@keyframes ease-type-cmd`), while terminal output responses fade in via staggered animation delays (`@keyframes ease-fade-in`).

## Files

`demo.html`, `style.css`, `README.md`

## Custom properties

- `--ease-hero-bg`: Main dark backdrop background (`#020617`)
- `--ease-hero-card-bg`: Secondary surface background (`#0f172a`)
- `--ease-hero-term-bg`: Terminal window background (`#090a0f`)
- `--ease-hero-border`: Border boundary line color (`#1e293b`)
- `--ease-hero-text`: Primary headline and code text (`#f8fafc`)
- `--ease-hero-muted`: Subtitle description text color (`#94a3b8`)
- `--ease-hero-accent`: Sky-blue brand accent color (`#38bdf8`)
- `--ease-hero-green`: Success checkmark status color (`#10b981`)
- `--ease-hero-purple`: Hyperlink highlight color (`#c084fc`)

## Accessibility & Performance

- Fully accessible using semantic HTML5 landmark tags (`main`, `section`, `a`), clean keyboard focus outlines, and explicit `aria-label` declarations.
- Full support for `@media (prefers-reduced-motion: reduce)` which bypasses typing and fade-in keyframes, immediately displaying full terminal command outputs.