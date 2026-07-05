# ease-badge-dot-pulse-xk

Status indicator dot with concentric pulse rings for **online**, **away**,
and **offline** states.

Resolves: #35124

## Overview

A small, self-contained status badge component. A solid core dot represents
the current state, with two staggered expanding-and-fading rings layered
behind it to create a "radar ping" pulse effect for active states. Fully
customizable via CSS variables and includes multiple interactive trigger
patterns.

## Markup

```html
<span class="ease-badge-dot-pulse-xk is-online" role="status" aria-label="Online">
  <span class="ease-badge-dot-pulse-xk__ring"></span>
  <span class="ease-badge-dot-pulse-xk__ring ease-badge-dot-pulse-xk__ring--delay"></span>
  <span class="ease-badge-dot-pulse-xk__dot"></span>
</span>
```

Swap `is-online` for `is-away` or `is-offline` to change state. For the
offline state, the two `__ring` elements can be omitted entirely since there's
no pulse — see `demo.html` for the exact markup used per state.

## CSS Variables

| Variable        | Default   | Description                              |
|------------------|-----------|-------------------------------------------|
| `--ebdp-size`    | `12px`    | Diameter of the core dot                  |
| `--ebdp-color`   | `#22c55e`| Base color (auto-set per state class, or override inline) |
| `--ebdp-speed`   | `1.8s`    | Duration of one pulse ring animation cycle |

Example override:

```html
<span class="ease-badge-dot-pulse-xk is-online"
      style="--ebdp-size: 22px; --ebdp-color: #ff5cad; --ebdp-speed: 0.9s;">
  ...
</span>
```

## States

- **Online** (`is-online`) — green, active pulsing rings.
- **Away** (`is-away`) — amber, pulsing rings at a slower/gentler cadence.
- **Offline** (`is-offline`) — grey, static dot, no rings/animation.

## Interactive Triggers (Acceptance Criteria)

Three interaction patterns are demonstrated in `demo.html`:

1. **Static showcase** — all three states side by side.
2. **Click trigger** — a button cycles the badge through
   Online → Away → Offline on each click, updating the label and
   `aria-label` accordingly.
3. **Hover / focus trigger** — a variant (`--hover-trigger` modifier) where
   the pulse rings stay paused and invisible until the badge is hovered or
   keyboard-focused, then animate in.

## Accessibility

- Each badge has `role="status"` and a descriptive `aria-label` reflecting
  the current state.
- The click-cycling demo uses `aria-live="polite"` so state changes are
  announced.
- The hover-trigger variant is keyboard-reachable (`tabindex="0"`) with a
  visible `:focus-visible` outline.
- Respects `prefers-reduced-motion: reduce` by disabling the ring animation
  entirely for users who've opted out of motion.

## Files

- `demo.html` — all four showcase sections (static states, click trigger,
  hover trigger, CSS variable customization).
- `style.css` — component styles, keyframes, interactive states, and
  reduced-motion handling.
- `README.md` — this file.