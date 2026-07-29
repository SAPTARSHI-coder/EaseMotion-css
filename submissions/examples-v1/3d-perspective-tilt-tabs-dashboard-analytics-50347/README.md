# 3D Perspective Tilt Tabs — Dashboard Analytics

Closes #50347

Pure CSS (no JavaScript) tabs component with a 3D perspective tilt interaction,
styled for a dark dashboard-analytics UI.

## Files

- `demo.html` — three tabs (Overview / Revenue / Traffic), each with sample
  dashboard content (stat cards with up/down deltas, a mini CSS bar chart)
- `style.css` — the component itself; radio-input driven tab state, no JS

## How it works

Tab switching is driven entirely by hidden radio inputs and the `:checked`
sibling combinator — no JavaScript is used. The inactive panel sits tilted
in 3D space (`rotateY` + `scale`, via `perspective`) and animates flat when
its tab is selected. The tab buttons themselves also tilt slightly in 3D on
hover/focus/active for a consistent visual language.

## Custom properties

All overridable per-instance on the `.tt-tabs` wrapper:

| Property | Default | Purpose |
|---|---|---|
| `--tt-duration` | `0.6s` | Transition duration |
| `--tt-easing` | `cubic-bezier(0.16, 1, 0.3, 1)` | Transition easing |
| `--tt-tilt-angle` | `18deg` | How far the inactive panel is tilted |
| `--tt-tilt-scale` | `0.92` | How much the inactive panel is scaled down |
| `--tt-perspective` | `1200px` | 3D perspective depth |
| `--tt-accent` | `#7c9cff` | Active-tab accent color |
| `--tt-bg` / `--tt-panel-bg` | dark navy tones | Component/panel background |
| `--tt-radius` | `14px` | Corner radius |

## Accessibility

- Radio inputs stay in the natural tab order (visually hidden via clipping,
  not `display: none`), so native radio-group keyboard behavior — arrow
  keys to move between tabs, Enter/Space to activate — works out of the box.
- Visible `:focus-visible` outline on the active tab label.
- `@media (prefers-reduced-motion: reduce)` disables the tilt/scale
  transitions entirely.

## Responsive

Under 600px, tabs grow to fill the row equally and the tilt angle is reduced
(`8deg`) so the 3D effect stays comfortable on small/touch screens.

## Note on ARIA

This uses native radio/label semantics rather than the ARIA tabs pattern
(`role="tablist"` + `aria-selected` toggled via JS), since the goal is zero
JavaScript. Screen readers will announce it as a radio group rather than a
tab list — a deliberate tradeoff for a pure-CSS implementation.
