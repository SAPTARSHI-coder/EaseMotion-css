# Skew-Active Popover — Dashboard Analytics (`ease-skew-dash-pop`)

A pure CSS popover/tooltip component with a snappy skew entrance —
styled for analytics dashboard metric cards (bounce rate, session length,
goal completions, and similar KPI tiles). Zero JavaScript.

This is a distinct variant from the checkout-styled Skew-Active Popover
(`ease-skew-pop`): same interaction family, different visual context —
dark panel-style bubbles with a border and hard shadow, sized for compact
metric-card headers rather than light checkout form rows.

## What it does

- Reveals a small popover on **hover or keyboard focus**.
- Entrance skews the bubble in from an angle and squashes it slightly on
  the vertical axis, then snaps to upright using a `cubic-bezier` with a
  small overshoot.
- Fully keyboard accessible: the trigger is focusable (`tabindex="0"`),
  the popover opens on `:focus` / `:focus-within`, and there's a visible
  `:focus-visible` outline.
- Respects `prefers-reduced-motion`: the skew/scale is replaced with a
  simple fade.
- Configurable via CSS custom properties.

## Usage

```html
<link rel="stylesheet" href="style.css" />

<span class="ease-skew-dash-pop" tabindex="0" aria-describedby="pop-1">
  ⓘ
  <span class="ease-skew-dash-pop__bubble" id="pop-1" role="tooltip">
    Your popover content goes here.
  </span>
</span>
```

### Placement variant

```html
<!-- default: opens above the trigger -->
<span class="ease-skew-dash-pop">...</span>

<!-- opens below the trigger -->
<span class="ease-skew-dash-pop ease-skew-dash-pop--top">...</span>
```

### Color variant

```html
<span class="ease-skew-dash-pop ease-skew-dash-pop--accent">...</span>
```

| Property | Default | Description |
|---|---|---|
| `--ease-skew-dash-duration` | `0.26s` | Length of the open/close transition |
| `--ease-skew-dash-easing` | `cubic-bezier(0.2, 0.9, 0.3, 1.25)` | Easing curve (slight overshoot) |
| `--ease-skew-dash-angle` | `10deg` | Starting skew angle before it straightens to `0deg` |
| `--ease-skew-dash-gap` | `8px` | Space between the trigger and the bubble |
| `--ease-skew-dash-bg` | `#10131c` | Bubble background color |
| `--ease-skew-dash-fg` | `#e4e7f2` | Bubble text color |
| `--ease-skew-dash-border` | `#262c3d` | Bubble border color |
| `--ease-skew-dash-accent` | `#38bdf8` | Trigger icon / focus outline color |

## Why it fits EaseMotion CSS

Self-contained, dependency-free, class-based API consistent with the
framework's conventions, CSS-custom-property configuration, documented
reduced-motion fallback, and no required JavaScript. It gives the
skew-active interaction a dedicated dashboard/analytics treatment —
compact sizing and a dark bordered panel suited to dense metric-card
grids — distinct from the lighter checkout-context skew popover already
in the library.

## Accessibility notes

- The trigger uses `tabindex="0"` so it's reachable by keyboard.
- `aria-describedby` links the trigger to the bubble's `id`, and the
  bubble carries `role="tooltip"`.
- The popover opens on `:focus-within` as well as `:hover`/`:focus`.
- Motion is suppressed under `prefers-reduced-motion: reduce`.

## Browser support

Uses standard CSS custom properties, `:focus-visible`, and
`transform`/`transition` — no vendor prefixes needed for current
evergreen browsers (Chrome, Edge, Firefox, Safari).
