# Skew-Active Popover — Glassmorphism (`ease-skew-glass-pop`)

A pure CSS popover/tooltip component with a snappy skew entrance and a
genuine frosted-glass surface (`backdrop-filter: blur()`, translucent
tint, light border highlight) — built for glassmorphism UIs where content
sits over colorful or photographic backgrounds. Zero JavaScript.

This is a distinct variant from the checkout and dashboard Skew-Active
Popovers already in the library: same skew interaction, but the surface
treatment is what actually defines glassmorphism, not just a color swap —
so this one blurs what's behind it rather than using an opaque
background.

## What it does

- Reveals a small popover on **hover or keyboard focus**.
- Entrance skews the bubble in from an angle and squashes it slightly on
  the vertical axis, then snaps to upright.
- The bubble surface uses `backdrop-filter: blur()` over a low-opacity
  white tint with a translucent border — the defining visual trait of
  glassmorphism, not achievable with solid colors alone.
- Includes an `@supports` fallback: browsers without `backdrop-filter`
  support get a solid dark translucent background instead of a
  transparent, unreadable one.
- Fully keyboard accessible: the trigger is focusable (`tabindex="0"`),
  the popover opens on `:focus` / `:focus-within`, and there's a visible
  `:focus-visible` outline.
- Respects `prefers-reduced-motion`.
- Configurable via CSS custom properties, including the glass tint color
  and blur radius.

## Usage

```html
<link rel="stylesheet" href="style.css" />

<span class="ease-skew-glass-pop" tabindex="0" aria-describedby="pop-1">
  ⓘ
  <span class="ease-skew-glass-pop__bubble" id="pop-1" role="tooltip">
    Your popover content goes here.
  </span>
</span>
```

Works best over a colorful, gradient, or photographic background — the
frosted effect needs something behind it to blur.

### Placement variant

```html
<!-- default: opens above the trigger -->
<span class="ease-skew-glass-pop">...</span>

<!-- opens below the trigger -->
<span class="ease-skew-glass-pop ease-skew-glass-pop--top">...</span>
```

### Custom tint / blur per instance

```html
<span
  class="ease-skew-glass-pop"
  style="--ease-skew-glass-tint: 20, 20, 30; --ease-skew-glass-blur: 20px;"
>
  ...
</span>
```

| Property | Default | Description |
|---|---|---|
| `--ease-skew-glass-duration` | `0.28s` | Length of the open/close transition |
| `--ease-skew-glass-easing` | `cubic-bezier(0.2, 0.9, 0.3, 1.3)` | Easing curve (slight overshoot) |
| `--ease-skew-glass-angle` | `-11deg` | Starting skew angle before it straightens |
| `--ease-skew-glass-gap` | `10px` | Space between the trigger and the bubble |
| `--ease-skew-glass-tint` | `255, 255, 255` | RGB triplet used for the glass tint and border (no `rgb()` wrapper — it's composed into `rgba()` internally) |
| `--ease-skew-glass-blur` | `14px` | Backdrop blur radius |
| `--ease-skew-glass-fg` | `#ffffff` | Bubble text color |
| `--ease-skew-glass-accent` | `#ffffff` | Trigger icon / focus outline color |

For a dark-glass look over a light background, set a dark tint triplet
(e.g. `--ease-skew-glass-tint: 20, 22, 30;`) and darken `--ease-skew-glass-fg`.

## Why it fits EaseMotion CSS

Self-contained, dependency-free, class-based API consistent with the
framework's conventions, CSS-custom-property configuration, a documented
reduced-motion fallback, a `backdrop-filter` support fallback, and no
required JavaScript. Gives the skew-active interaction a true
glassmorphic treatment rather than reusing an opaque bubble with a tinted
background, which wouldn't actually demonstrate the aesthetic the issue
asked for.

## Accessibility notes

- The trigger uses `tabindex="0"` so it's reachable by keyboard.
- `aria-describedby` links the trigger to the bubble's `id`, and the
  bubble carries `role="tooltip"`.
- The popover opens on `:focus-within` as well as `:hover`/`:focus`.
- Motion is suppressed under `prefers-reduced-motion: reduce`.
- Glassmorphism inherently risks low text contrast depending on what's
  behind it; test your specific background and adjust `--ease-skew-glass-fg`
  and the tint opacity if needed.

## Browser support

Uses standard CSS custom properties, `:focus-visible`, `backdrop-filter`
(with `-webkit-` prefix and an `@supports` fallback for browsers that
lack it), and `transform`/`transition` — evergreen Chrome, Edge, Firefox,
and Safari all support `backdrop-filter` natively as of recent versions.
