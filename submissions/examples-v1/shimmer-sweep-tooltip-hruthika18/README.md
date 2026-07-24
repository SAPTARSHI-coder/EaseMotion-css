# Shimmer Sweep Tooltip (`ease-shimmer-tip`)

A pure CSS tooltip with a light band that sweeps across its surface while
visible — built for minimalist tech UIs (config panels, dev tool
dashboards) with zero JavaScript.

## What it does

- Reveals a small monospace tooltip on **hover or keyboard focus**, with
  a quick fade/slide entrance.
- While visible, a diagonal gradient band continuously sweeps left to
  right across the bubble (`ease-shimmer-tip-sweep` keyframe animation),
  clipped to the bubble's rounded corners via `overflow: hidden`.
- Fully keyboard accessible: the trigger is focusable (`tabindex="0"`),
  the tooltip opens on `:focus` / `:focus-within`, and there's a visible
  `:focus-visible` outline.
- Respects `prefers-reduced-motion`: the shimmer sweep is removed
  entirely; the tooltip still appears via a plain fade.
- Configurable via CSS custom properties, including the sweep speed and
  color.

## Usage

```html
<link rel="stylesheet" href="style.css" />

<span class="ease-shimmer-tip" tabindex="0" aria-describedby="tip-1">
  ⓘ
  <span class="ease-shimmer-tip__bubble" id="tip-1" role="tooltip">
    Your tooltip content goes here.
  </span>
</span>
```

### Placement variant

```html
<!-- default: opens above the trigger -->
<span class="ease-shimmer-tip">...</span>

<!-- opens below the trigger -->
<span class="ease-shimmer-tip ease-shimmer-tip--top">...</span>
```

### Color variant

```html
<span class="ease-shimmer-tip ease-shimmer-tip--accent">...</span>
```

### Custom sweep speed per instance

```html
<span
  class="ease-shimmer-tip"
  style="--ease-shimmer-tip-duration: 1.6s;"
>
  ...
</span>
```

| Property | Default | Description |
|---|---|---|
| `--ease-shimmer-tip-fade-duration` | `0.18s` | Length of the show/hide fade |
| `--ease-shimmer-tip-duration` | `1.1s` | Length of one shimmer sweep cycle (loops while visible) |
| `--ease-shimmer-tip-gap` | `8px` | Space between the trigger and the bubble |
| `--ease-shimmer-tip-bg` | `#12151d` | Bubble background color |
| `--ease-shimmer-tip-fg` | `#d7dbe6` | Bubble text color |
| `--ease-shimmer-tip-border` | `#2a2f3d` | Bubble border color |
| `--ease-shimmer-tip-accent` | `#5eead4` | Trigger icon / focus outline color |
| `--ease-shimmer-tip-sweep` | `rgba(255, 255, 255, 0.16)` | Color/opacity of the sweeping band |

## Why it fits EaseMotion CSS

Self-contained, dependency-free animated component consistent with the
framework's existing patterns: class-based API (`ease-shimmer-tip`),
configuration via CSS custom properties, a documented reduced-motion
fallback, and no required JavaScript. The shimmer sweep gives tech/config
UI tooltips a subtle "live data" feel distinct from the framework's
scale/skew/blur popover variants — appropriate for values that suggest
freshness or activity (build hashes, rate limits, feature flags) rather
than static help text.

## Accessibility notes

- The trigger uses `tabindex="0"` so it's reachable by keyboard.
- `aria-describedby` links the trigger to the bubble's `id`, and the
  bubble carries `role="tooltip"`.
- The tooltip opens on `:focus-within` as well as `:hover`/`:focus`.
- The shimmer sweep is purely decorative (a `::before` pseudo-element with
  no content) and is fully suppressed under `prefers-reduced-motion: reduce`.

## Browser support

Uses standard CSS custom properties, `:focus-visible`, `@keyframes`, and
`linear-gradient`/`transform` — no vendor prefixes needed for current
evergreen browsers (Chrome, Edge, Firefox, Safari).
