# Neumorphic Blur-Entrance Popover (`ease-neu-blur-pop`)

A pure CSS popover/tooltip component that resolves in from a soft blur —
styled specifically for neumorphic ("soft UI") surfaces, where the trigger
and bubble both use dual-direction soft shadows on a low-contrast surface
color rather than a hard-edged card. Zero JavaScript.

## What it does

- Reveals a small popover on **hover or keyboard focus**.
- Entrance combines a `filter: blur()` fade-in with a short rise, so the
  bubble resolves from soft to sharp.
- The trigger itself is neumorphic: an extruded soft-shadow circle at
  rest, which presses into an inset shadow on hover/focus — reinforcing
  the "soft UI" tactile feel rather than using a flat hover background.
- Fully keyboard accessible: the trigger is focusable (`tabindex="0"`),
  the popover opens on `:focus` / `:focus-within`, and there's a visible
  `:focus-visible` outline.
- Respects `prefers-reduced-motion`: blur and movement are removed in
  favor of a simple opacity fade.
- Configurable via CSS custom properties, including the neumorphic
  surface and shadow colors — so it can be retinted to match any soft-UI
  palette without touching the source rules.

## Usage

```html
<link rel="stylesheet" href="style.css" />

<span class="ease-neu-blur-pop" tabindex="0" aria-describedby="pop-1">
  ⓘ
  <span class="ease-neu-blur-pop__bubble" id="pop-1" role="tooltip">
    Your popover content goes here.
  </span>
</span>
```

### Placement variants

```html
<!-- default: opens above the trigger -->
<span class="ease-neu-blur-pop">...</span>

<!-- opens below the trigger -->
<span class="ease-neu-blur-pop ease-neu-blur-pop--top">...</span>

<!-- opens to the right of the trigger -->
<span class="ease-neu-blur-pop ease-neu-blur-pop--right">...</span>
```

### Custom timing / blur amount per instance

```html
<span
  class="ease-neu-blur-pop"
  style="--ease-neu-blur-duration: 0.5s; --ease-neu-blur-amount: 10px;"
>
  ...
</span>
```

| Property | Default | Description |
|---|---|---|
| `--ease-neu-blur-duration` | `0.32s` | Length of the open/close transition |
| `--ease-neu-blur-easing` | `ease-out` | Easing curve for the transition |
| `--ease-neu-blur-amount` | `6px` | Starting blur radius before it resolves to `0` |
| `--ease-neu-blur-rise` | `6px` | Starting offset before the bubble settles into place |
| `--ease-neu-blur-gap` | `12px` | Space between the trigger and the bubble |
| `--ease-neu-surface` | `#e6e9f0` | Shared surface color for the trigger and bubble |
| `--ease-neu-fg` | `#3a3f52` | Bubble text color |
| `--ease-neu-accent` | `#6c7bff` | Trigger icon / focus outline color |
| `--ease-neu-shadow-light` | `#ffffff` | Light-side neumorphic shadow color |
| `--ease-neu-shadow-dark` | `#b9bfd1` | Dark-side neumorphic shadow color |

To retint for a different soft-UI palette, override the surface and
shadow pair together so the extrusion effect stays convincing:

```css
.ease-neu-blur-pop {
  --ease-neu-surface: #2a2f3d;
  --ease-neu-shadow-light: #3a4055;
  --ease-neu-shadow-dark: #1a1e28;
  --ease-neu-fg: #e2e5ee;
}
```

## Why it fits EaseMotion CSS

It's a self-contained, dependency-free animated component consistent with
the framework's existing patterns: class-based API (`ease-neu-blur-pop`),
configuration via CSS custom properties, a documented reduced-motion
fallback, and no required JavaScript. It gives the popover family a
dedicated neumorphic treatment — the dual-shadow surface and press-in
hover state aren't just a color swap, they change how the trigger itself
behaves, which regular flat-UI popovers don't need.

## Accessibility notes

- The trigger uses `tabindex="0"` so it's reachable by keyboard.
- `aria-describedby` links the trigger to the bubble's `id`, and the
  bubble carries `role="tooltip"`.
- The popover opens on `:focus-within` as well as `:hover`/`:focus`.
- Motion and blur are suppressed under `prefers-reduced-motion: reduce`.
- Neumorphic UI is known for low contrast by design; the default palette
  keeps text at a contrast ratio suitable for body copy, but if you retint
  the surface, re-check contrast between `--ease-neu-fg` and
  `--ease-neu-surface`.

## Browser support

Uses standard CSS custom properties, `:focus-visible`, `filter: blur()`,
multi-value `box-shadow`, and `transform`/`transition` — no vendor
prefixes needed for current evergreen browsers (Chrome, Edge, Firefox,
Safari).
