# Scale-Hover Popover (`ease-scale-pop`)

A pure CSS popover/tooltip component with a crisp scale-up entrance —
built for minimalist tech UIs (config panels, dev tool dashboards, docs
with inline monospace values), with zero JavaScript.

## What it does

- Reveals a small popover on **hover or keyboard focus**.
- Entrance is a fast, subtle scale from a slightly-shrunk state to full
  size using a snappy fast-out easing curve — deliberately quick and
  understated rather than bouncy, matching a minimal/technical aesthetic.
- The bubble itself is styled like a small code/tooltip panel: monospace
  font, thin border, dark background — distinct from the rounded pill
  bubbles used by the framework's other popover variants.
- Fully keyboard accessible: the trigger is focusable (`tabindex="0"`),
  the popover opens on `:focus` / `:focus-within`, and there's a visible
  `:focus-visible` outline.
- Respects `prefers-reduced-motion`: the scale is replaced with a simple
  fade for users who've asked for reduced motion.
- Configurable via CSS custom properties — no need to touch the source
  rules to retheme or retime it.

## Usage

```html
<link rel="stylesheet" href="style.css" />

<span class="ease-scale-pop" tabindex="0" aria-describedby="pop-1">
  ⓘ
  <span class="ease-scale-pop__bubble" id="pop-1" role="tooltip">
    Your popover content goes here.
  </span>
</span>
```

### Placement variant

```html
<!-- default: opens above the trigger -->
<span class="ease-scale-pop">...</span>

<!-- opens below the trigger -->
<span class="ease-scale-pop ease-scale-pop--top">...</span>
```

### Color variant

```html
<span class="ease-scale-pop ease-scale-pop--accent">...</span>
```

### Custom timing / start scale per instance

```html
<span
  class="ease-scale-pop"
  style="--ease-scale-duration: 0.45s; --ease-scale-start: 0.4;"
>
  ...
</span>
```

| Property | Default | Description |
|---|---|---|
| `--ease-scale-duration` | `0.2s` | Length of the open/close transition |
| `--ease-scale-easing` | `cubic-bezier(0.16, 1, 0.3, 1)` | Easing curve (fast-out, no overshoot) |
| `--ease-scale-start` | `0.55` | Starting scale before it reaches `1` |
| `--ease-scale-gap` | `8px` | Space between the trigger and the bubble |
| `--ease-scale-bg` | `#101319` | Bubble background color |
| `--ease-scale-fg` | `#d7dbe6` | Bubble text color |
| `--ease-scale-border` | `#2a2f3d` | Bubble border color |
| `--ease-scale-accent` | `#4dd0e1` | Trigger icon / focus outline color |

## Why it fits EaseMotion CSS

It's a self-contained, dependency-free animated component consistent with
the framework's existing patterns: class-based API (`ease-scale-pop`),
configuration via CSS custom properties rather than modifying source
rules, a documented reduced-motion fallback, and no required JavaScript.
The fast, understated scale entrance and monospace-panel bubble styling
give the popover family a variant purpose-built for technical/dev-tool
contexts, distinct from the softer swing/blur/pulse/skew variants.

## Accessibility notes

- The trigger uses `tabindex="0"` so it's reachable by keyboard.
- `aria-describedby` links the trigger to the bubble's `id`, and the
  bubble carries `role="tooltip"`.
- The popover opens on `:focus-within` as well as `:hover`/`:focus`, so it
  also works if you nest a real interactive element inside the trigger
  instead of relying on the icon span alone.
- Motion is suppressed under `prefers-reduced-motion: reduce`.

## Browser support

Uses standard CSS custom properties, `:focus-visible`, and
`transform`/`transition` — no vendor prefixes needed for current
evergreen browsers (Chrome, Edge, Firefox, Safari).
