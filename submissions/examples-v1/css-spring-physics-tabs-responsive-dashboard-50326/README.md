# Spring Physics Tabs — Responsive Dashboard

Closes #50326

Pure CSS (no JavaScript) tabs component where the active-tab indicator and
panel entrance both settle using a damped-spring easing curve, styled for a
responsive dashboard UI.

## Files

- `demo.html` — three tabs (Overview / Revenue / Traffic), each with sample
  dashboard stat cards that reflow to a single column on small screens
- `style.css` — the component itself; radio-input driven tab state, no JS

## How it works

Tab switching is driven entirely by hidden radio inputs and the `:checked`
sibling combinator — no JavaScript. A single pill-shaped indicator slides
behind the active tab label (`translateX`), and the active panel enters with
a slight scale + translateY settle. Both use a `linear()` easing function
that approximates a damped mass-spring curve — a small overshoot past the
resting position before settling, rather than a standard ease-out.

## Custom properties

All overridable per-instance on the `.sp-tabs` wrapper:

| Property | Default | Purpose |
|---|---|---|
| `--sp-tab-count` | `3` | Number of tabs, used to size the indicator |
| `--sp-duration` | `0.7s` | Transition duration |
| `--sp-spring-easing` | damped-spring `linear()` curve | Transition easing |
| `--sp-scale-from` | `0.9` | Starting scale of an entering panel |
| `--sp-translate-y` | `10px` | Starting vertical offset of an entering panel |
| `--sp-accent` | `#4f6df5` | Indicator / active-tab color |
| `--sp-bg` / `--sp-panel-bg` | light neutral tones | Component/panel background |
| `--sp-border` | `#e4e7ef` | Border color |
| `--sp-radius` | `14px` | Corner radius |

## Accessibility

- Radio inputs stay in the natural tab order (visually hidden via clipping,
  not `display: none`), so native radio-group keyboard behavior — arrow
  keys to move between tabs, Enter/Space to activate — works out of the box.
- Visible `:focus-visible` outline on the active tab label.
- `@media (prefers-reduced-motion: reduce)` disables the spring transitions
  entirely, snapping straight to the resting state.

## Responsive

Tabs list wraps and the stat grid inside each panel collapses from three
columns to one under 640px. The indicator's width and position are both
percentage-based, so it tracks the active tab correctly at any container
width without recalculation.

## Note on ARIA
