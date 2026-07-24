# Swing-Hover Popover (`ease-swing-pop`)

A pure CSS popover/tooltip component with a springy "swing" entrance —
built for dashboard-style UIs where you need compact info bubbles on
metric cards, labels, or icons, with zero JavaScript.

## What it does

- Reveals a small popover on **hover or keyboard focus**.
- Entrance is a short scale + rotate "swing" that settles into place,
  using a spring-like `cubic-bezier` easing.
- Fully keyboard accessible: the trigger is focusable (`tabindex="0"`),
  the popover opens on `:focus` / `:focus-within`, and there's a visible
  `:focus-visible` outline.
- Respects `prefers-reduced-motion`: the swing/scale is replaced with a
  simple fade for users who've asked for reduced motion.
- Configurable via CSS custom properties — no need to touch the source
  rules to retheme or retime it.

## Usage

```html
<link rel="stylesheet" href="style.css" />

<span class="ease-swing-pop" tabindex="0" aria-describedby="pop-1">
  ⓘ
  <span class="ease-swing-pop__bubble" id="pop-1" role="tooltip">
    Your popover content goes here.
  </span>
</span>
```

### Placement variants

```html
<!-- default: opens above the trigger -->
<span class="ease-swing-pop">...</span>

<!-- opens below the trigger -->
<span class="ease-swing-pop ease-swing-pop--top">...</span>

<!-- opens to the right of the trigger -->
<span class="ease-swing-pop ease-swing-pop--right">...</span>
```

### Color variant

```html
<span class="ease-swing-pop ease-swing-pop--accent">...</span>
```

### Custom timing / scale per instance

All behavior is driven by CSS custom properties, so you can override them
inline or on a scoped selector:

```html
<span
  class="ease-swing-pop"
  style="--ease-swing-duration: 0.5s; --ease-swing-scale: 0.7;"
>
  ...
</span>
```

| Property | Default | Description |
|---|---|---|
| `--ease-swing-duration` | `0.35s` | Length of the open/close transition |
| `--ease-swing-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Easing curve (default has a slight overshoot for the "swing" feel) |
| `--ease-swing-scale` | `0.85` | Starting scale before it springs to `1` |
| `--ease-swing-angle` | `-8deg` | Starting rotation before it settles to `0deg` |
| `--ease-swing-gap` | `10px` | Space between the trigger and the bubble |
| `--ease-swing-bg` | `#1e2433` | Bubble background color |
| `--ease-swing-fg` | `#f4f6fb` | Bubble text color |
| `--ease-swing-accent` | `#7c9bff` | Trigger icon / focus outline color |

## Why it fits EaseMotion CSS

It's a self-contained, dependency-free animated component consistent with
the framework's existing patterns: class-based API (`ease-swing-pop`),
configuration via CSS custom properties rather than modifying source
rules, a documented reduced-motion fallback, and no required JavaScript.
It fills a real gap — the framework has tooltips and toasts, but no
lightweight hover/focus popover suited to dense dashboard layouts.

## Accessibility notes

- The trigger uses `tabindex="0"` so it's reachable by keyboard.
- `aria-describedby` links the trigger to the bubble's `id`, and the
  bubble carries `role="tooltip"`.
- The popover opens on `:focus-within` as well as `:hover`/`:focus`, so it
  also works if you nest a real interactive element (e.g. a link) inside
  the trigger instead of relying on the icon span alone.
- Motion is suppressed under `prefers-reduced-motion: reduce`.

## Browser support

Uses standard CSS custom properties, `:focus-visible`, and
`transform`/`transition` — no vendor prefixes needed for current
evergreen browsers (Chrome, Edge, Firefox, Safari).
