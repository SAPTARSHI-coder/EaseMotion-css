# Rotate-Click Tabs — Responsive Dashboard

A pure CSS tabs component with a rotate-click interaction, styled as a dashboard system-monitor switcher (CPU / Memory / Network). Each tab is a small gauge whose needle swings to point "active" when selected, like a speedometer snapping to a new reading. No JavaScript required.

## What it does

- Every tab has a tiny circular gauge with a needle resting at an angle. Selecting that tab snaps the needle upright with a slight overshoot, giving a tactile "click" feel rather than a smooth glide.
- The panel content rotates and scales in from a slight tilt to settle flat, echoing the same snap motion as the needle.
- Panel switching and animation are handled entirely with the `:has()` CSS selector reacting to native radio input state — zero JS.

## How it works

- Each tab is a hidden `<input type="radio">` paired with a `<label>` containing a gauge (`.tabs-gauge__dial` + `.tabs-gauge__needle`) and a text label. Radios sharing a `name` give native keyboard support for free (`Tab` focuses the group, arrow keys move between tabs).
- `.tabs-gauge:has(#tab-x:checked) #panel-x { display: block; animation: ...; }` shows the matching panel and triggers the click keyframe.
- The needle's rest/active rotation is controlled by `--tabs-needle-angle`, transitioning via `.tabs-gauge__input:checked + .tabs-gauge__tab .tabs-gauge__needle { transform: rotate(0deg); }`. The overshoot comes entirely from the easing curve, not extra keyframe steps.

## Customization

All animation and color values are exposed as CSS custom properties on the `.tabs-gauge` wrapper:

| Property | Default | Controls |
|---|---|---|
| `--tabs-duration` | `420ms` | Transition/animation length |
| `--tabs-easing` | `cubic-bezier(0.34, 1.4, 0.64, 1)` | Easing curve (the overshoot creates the "snap") |
| `--tabs-needle-angle` | `-35deg` | Needle's rest angle before it snaps upright |
| `--tabs-panel-rotate` | `6deg` | Panel's starting rotation before it settles flat |
| `--tabs-radius` | `12px` | Corner radius |
| `--tabs-accent` | `#f97316` | Accent color (active gauge, needle, tab border) |
| `--tabs-bg` / `--tabs-surface` | `#0d1117` / `#161b22` | Background surfaces |
| `--tabs-text` / `--tabs-text-dim` | light / muted | Text colors |

Example override:

```html
<div class="tabs-gauge" style="--tabs-needle-angle: -50deg; --tabs-accent: #38bdf8;">
  ...
</div>
```

## Accessibility

- Built on native radio inputs, so keyboard navigation (Tab in, arrow keys between tabs) works without any custom JS.
- `role="tablist"` / `role="tab"` and `aria-selected` are set on the markup.
- A visible focus ring is applied to the active tab via `:focus-visible` on the (visually hidden) input.
- Respects `prefers-reduced-motion` by disabling the needle rotation, tab-chip transition, and the panel click animation.
- Gauge/needle graphics are `aria-hidden`; the label text carries the meaning for screen readers.

## Why it fits EaseMotion

Adds a zero-JS, CSS-custom-property-driven rotate-click pattern in the dashboard aesthetic requested in issue #50077 — using a distinct gauge-needle mechanic (rather than a dial-knob), responsive down to mobile, keyboard accessible via native radio grouping, and fully retheme-able through custom properties.