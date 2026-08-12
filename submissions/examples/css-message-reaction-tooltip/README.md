=# CSS Message Reaction Tooltip

A pure CSS message reaction tooltip component designed for messaging applications, chat windows, and collaboration platforms. Hovering or focusing on any reaction pill elevates a styled tooltip panel detailing the users who reacted with that emoji. Built without JavaScript dependencies.

## How it works

Reaction pills are styled as interactive button elements (`.ease-reaction-pill`). The tooltip overlay (`.ease-tooltip`) resides within the reaction container using `position: absolute; bottom: calc(100% + 8px)`. On `:hover` or `:focus-visible`, the tooltip opacity transitions from `0` to `1` accompanied by a smooth `translateY()` transform scaling to resting size via `cubic-bezier(0.16, 1, 0.3, 1)`.

## Files

`demo.html`, `style.css`, `README.md`

## Custom properties

- `--ease-rxn-bg`: Outer surface background color (`#0f172a`)
- `--ease-rxn-card-bg`: Chat card background color (`#1e293b`)
- `--ease-rxn-pill-bg`: Unfocused pill surface (`#090a0f`)
- `--ease-rxn-border`: Border line color (`#334155`)
- `--ease-rxn-text`: Primary text color (`#f8fafc`)
- `--ease-rxn-muted`: Subtitle description text color (`#94a3b8`)
- `--ease-rxn-accent`: Primary sky-blue accent color (`#38bdf8`)
- `--ease-rxn-tooltip-bg`: Dark popover backdrop color (`#020617`)
- `--ease-rxn-duration`: Transition speed (`0.25s`)

## Accessibility & Performance

- Fully accessible using semantic markup, keyboard focus management (`tabindex="0"`, `:focus-visible`), and explicit `aria-label` declarations announcing emoji reaction counts and participant names to screen readers.
- Includes complete `@media (prefers-reduced-motion: reduce)` support that disables transform shifts and scale transitions in favor of direct opacity fades.