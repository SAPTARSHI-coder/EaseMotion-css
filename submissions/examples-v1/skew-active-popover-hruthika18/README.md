# Skew-Active Popover (`ease-skew-pop`)

A pure CSS popover/tooltip component with a snappy skew entrance — built
for e-commerce checkout layouts where you need a quick, energetic info
trigger next to a form field or price line, with zero JavaScript.

## What it does

- Reveals a small popover on **hover or keyboard focus**.
- Entrance skews the bubble in from an angle and squashes it slightly on
  the vertical axis, then snaps to upright using a `cubic-bezier` with a
  small overshoot — giving it a quick, energetic feel rather than a soft
  fade or blur.
- Fully keyboard accessible: the trigger is focusable (`tabindex="0"`),
  the popover opens on `:focus` / `:focus-within`, and there's a visible
  `:focus-visible` outline.
- Respects `prefers-reduced-motion`: the skew/scale is replaced with a
  simple fade for users who've asked for reduced motion.
- Configurable via CSS custom properties — no need to touch the source
  rules to retheme or retime it.

## Usage

```html
<link rel="stylesheet" href="style.css" />

<span class="ease-skew-pop" tabindex="0" aria-describedby="pop-1">
  ⓘ
  <span class="ease-skew-pop__bubble" id="pop-1" role="tooltip">
    Your popover content goes here.
  </span>
</span>
```

### Placement variant

```html
<!-- default: opens above the trigger -->
<span class="ease-skew-pop">...</span>

<!-- opens below the trigger -->
<span class="ease-skew-pop ease-skew-pop--top">...</span>
```

### Color variant

```html
<span class="ease-skew-pop ease-skew-pop--accent">...</span>
```

### Custom timing / angle per instance

```html
<span
  class="ease-skew-pop"
  style="--ease-skew-duration: 0.4s; --ease-skew-angle: -20deg;"
>
  ...
</span>
```

| Property | Default | Description |
|---|---|---|
| `--ease-skew-duration` | `0.28s` | Length of the open/close transition |
| `--ease-skew-easing` | `cubic-bezier(0.2, 0.9, 0.3, 1.3)` | Easing curve (default has a slight overshoot for the snap feel) |
| `--ease-skew-angle` | `-12deg` | Starting skew angle before it straightens to `0deg` |
| `--ease-skew-gap` | `10px` | Space between the trigger and the bubble |
| `--ease-skew-bg` | `#1e2433` | Bubble background color |
| `--ease-skew-fg` | `#f4f6fb` | Bubble text color |
| `--ease-skew-accent` | `#ff7a59` | Trigger icon / focus outline color |

## Why it fits EaseMotion CSS

It's a self-contained, dependency-free animated component consistent with
the framework's existing patterns: class-based API (`ease-skew-pop`),
configuration via CSS custom properties rather than modifying source
rules, a documented reduced-motion fallback, and no required JavaScript.
The skew entrance gives the popover family a distinct, energetic identity
suited to draw-attention moments in checkout flows, alongside the
existing pulse/blur/swing variants.

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
