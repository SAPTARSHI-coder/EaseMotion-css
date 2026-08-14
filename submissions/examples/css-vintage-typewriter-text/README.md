# CSS Vintage Typewriter Text

A pure CSS vintage typewriter effect component. Recreates classic mechanical typing by stepping text width expansion alongside a blinking border-right carriage cursor on a textured paper card. Built without JavaScript dependencies.

## How it works

Leverages `overflow: hidden`, `white-space: nowrap`, and CSS steps timing functions (`steps(var(--ease-tw-steps))`). The text element width expands incrementally character-by-character via `@keyframes ease-typing`, while a second `@keyframes ease-blink-cursor` keyframe alternates the `border-color` state to simulate a mechanical carriage cursor.

## Files

`demo.html`, `style.css`, `README.md`

## Custom properties

- `--ease-tw-bg`: Outer surface background color (`#0f172a`)
- `--ease-tw-card-bg`: Card frame background color (`#1e293b`)
- `--ease-tw-paper-bg`: Vintage paper background (`#f5f2eb`)
- `--ease-tw-border`: Border line color (`#334155`)
- `--ease-tw-text`: Ink text color (`#1c1917`)
- `--ease-tw-muted-text`: Subtitle description color (`#94a3b8`)
- `--ease-tw-accent`: Amber theme accent (`#d97706`)
- `--ease-tw-cursor-color`: Carriage cursor color (`#78350f`)
- `--ease-tw-steps`: Exact character length count (`49`)
- `--ease-tw-duration`: Animation duration (`4s`)

## Accessibility & Performance

- Fully accessible using semantic container tags (`role="region"`, `aria-label`) ensuring complete screen reader accessibility.
- Full support for `@media (prefers-reduced-motion: reduce)` which disables typing animations and immediately displays full text wrapped naturally.