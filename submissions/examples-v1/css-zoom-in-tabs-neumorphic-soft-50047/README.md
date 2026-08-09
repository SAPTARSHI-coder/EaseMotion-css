# Zoom-In Tabs — Neumorphic Soft

Closes #50047

Pure CSS (no JavaScript) tabs component with a zoom-in panel transition,
styled in a neumorphic ("soft UI") aesthetic — elements read as carved into
or raised off a single-color background via paired light/dark shadows,
rather than bordered cards.

## Files

- `demo.html` — three tabs (Overview / Revenue / Traffic), each with sample
  dashboard stat tiles styled as inset neumorphic "wells"
- `style.css` — the component itself; radio-input driven tab state, no JS

## How it works

Tab switching is driven entirely by hidden radio inputs and the `:checked`
sibling combinator — no JavaScript. Inactive tabs sit flush with the
background using a raised dual-shadow (light top-left, dark bottom-right);
the active tab flips to an inset shadow, reading as physically pressed in.
The active panel enters with a zoom-in scale from `--zt-zoom-from` to `1`,
combined with an opacity fade.

## Custom properties

All overridable per-instance on the `.zt-tabs` wrapper:

| Property | Default | Purpose |
|---|---|---|
| `--zt-duration` | `0.45s` | Transition duration |
| `--zt-easing` | `cubic-bezier(0.22, 1, 0.36, 1)` | Transition easing |
| `--zt-zoom-from` | `0.85` | Starting scale of an entering panel |
| `--zt-bg` | `#e6e9ef` | Shared background the neumorphic shadows are built on |
| `--zt-text` / `--zt-text-muted` | dark slate tones | Text colors |
| `--zt-accent` | `#5b6ee8` | Active-tab text color |
| `--zt-shadow-light` / `--zt-shadow-dark` | white / soft gray | The two shadow colors that create the raised/inset effect |
| `--zt-radius` | `20px` | Corner radius |

## Accessibility

- Radio inputs stay in the natural tab order (visually hidden via clipping,
  not `display: none`), so native radio-group keyboard behavior — arrow
  keys to move between tabs, Enter/Space to activate — works out of the box.
- Visible `:focus-visible` outline on the active tab label.
- Tabs use a `min-width`/`min-height` of `44px` to meet WCAG's minimum
  touch-target size, since neumorphic shadows alone don't always give a
  strong visual affordance for interactive edges.
- `@media (prefers-reduced-motion: reduce)` disables the zoom/scale
  transitions entirely.

## Responsive

Tabs wrap onto multiple lines and the stat grid collapses from three
columns to one under 640px.

