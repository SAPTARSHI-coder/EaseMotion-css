# Slide-Up Tabs — Creative Portfolio

Closes #50036

Pure CSS (no JavaScript) tabs component with a slide-up panel transition,
styled for a creative portfolio / editorial layout — an underline-style nav
with italic serif type instead of boxed tab buttons, and a project-tile
grid rather than dashboard stat cards.

## Files

- `demo.html` — three tabs (Selected Work / Editorial / About), each with a
  sample project-tile grid
- `style.css` — the component itself; radio-input driven tab state, no JS

## How it works

Tab switching is driven entirely by hidden radio inputs and the `:checked`
sibling combinator — no JavaScript. The active tab is marked by an
underline (`::after`, `scaleX` growing from 0 to 1) rather than a
background/box change. The active panel slides up into place
(`translateY(--su-slide-distance)` to `0`) combined with an opacity fade.

## Custom properties

All overridable per-instance on the `.su-tabs` wrapper:

| Property | Default | Purpose |
|---|---|---|
| `--su-duration` | `0.55s` | Transition duration |
| `--su-easing` | `cubic-bezier(0.16, 1, 0.3, 1)` | Transition easing |
| `--su-slide-distance` | `32px` | How far the panel travels on entrance |
| `--su-bg` / `--su-panel-bg` | warm off-white / white | Backgrounds |
| `--su-text` / `--su-text-muted` | near-black / warm gray | Text colors |
| `--su-accent` | `#d94f2b` | Underline color |
| `--su-border` | `#e6e5df` | Tab-list divider color |
| `--su-radius` | `4px` | Corner radius (kept small — editorial layouts read cleaner with sharp-ish corners) |
| `--su-font-display` | `Georgia, "Times New Roman", serif` | Heading/tab typeface |

## Accessibility

- Radio inputs stay in the natural tab order (visually hidden via clipping,
  not `display: none`), so native radio-group keyboard behavior — arrow
  keys to move between tabs, Enter/Space to activate — works out of the box.
- Visible `:focus-visible` outline on the active tab label.
- `@media (prefers-reduced-motion: reduce)` disables the slide/underline
  transitions entirely.

## Responsive

Tab list wraps and the project-tile grid collapses from three columns to
one under 640px.

## Note on ARIA

This uses native radio/label semantics rather than the ARIA tabs pattern
