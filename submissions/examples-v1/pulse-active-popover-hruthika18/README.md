# Pulse-Active Popover (`ease-pulse-pop`)

A pure CSS popover/tooltip component with a radiating "pulse" ring while
active — built for e-commerce checkout layouts where you need to draw a
little extra attention to an info trigger next to a form field or price
line, with zero JavaScript.

## What it does

- Reveals a small popover on **hover or keyboard focus**.
- While hovered/focused, a ring around the trigger continuously radiates
  outward and fades (`ease-pulse-ring` keyframe animation) — a subtle "pay
  attention to me" cue appropriate for checkout flows (payment fields,
  price breakdowns).
- Fully keyboard accessible: the trigger is focusable (`tabindex="0"`),
  the popover opens on `:focus` / `:focus-within`, and there's a visible
  `:focus-visible` outline.
- Respects `prefers-reduced-motion`: the pulse ring animation is removed
  entirely for users who've asked for reduced motion; the bubble still
  appears via a plain fade.
- Configurable via CSS custom properties — no need to touch the source
  rules to retheme or retime it.

## Usage

```html
<link rel="stylesheet" href="style.css" />

<span class="ease-pulse-pop" tabindex="0" aria-describedby="pop-1">
  ⓘ
  <span class="ease-pulse-pop__bubble" id="pop-1" role="tooltip">
    Your popover content goes here.
  </span>
</span>
```

### Placement variant

```html
<!-- default: opens above the trigger -->
<span class="ease-pulse-pop">...</span>

<!-- opens below the trigger -->
<span class="ease-pulse-pop ease-pulse-pop--top">...</span>
```

### Color variant

```html
<span class="ease-pulse-pop ease-pulse-pop--accent">...</span>
```

### Custom timing per instance

```html
<span
  class="ease-pulse-pop"
  style="--ease-pulse-ring-duration: 1.6s; --ease-pulse-duration: 0.45s;"
>
  ...
</span>
```

| Property | Default | Description |
|---|---|---|
| `--ease-pulse-duration` | `0.3s` | Length of the bubble open/close transition |
| `--ease-pulse-easing` | `ease-out` | Easing curve for the bubble transition |
| `--ease-pulse-ring-duration` | `1.1s` | Length of one pulse-ring cycle (loops while active) |
| `--ease-pulse-gap` | `10px` | Space between the trigger and the bubble |
| `--ease-pulse-bg` | `#1e2433` | Bubble background color |
| `--ease-pulse-fg` | `#f4f6fb` | Bubble text color |
| `--ease-pulse-accent` | `#22c55e` | Trigger icon, ring, and focus outline color |

## Why it fits EaseMotion CSS

It's a self-contained, dependency-free animated component consistent with
the framework's existing patterns: class-based API (`ease-pulse-pop`),
configuration via CSS custom properties rather than modifying source
rules, a documented reduced-motion fallback, and no required JavaScript.
The pulsing ring gives it a distinct visual identity from the framework's
other popover variants (swing-hover, blur-entrance), suited specifically
to drawing attention in transactional UI like checkout forms.

## Accessibility notes

- The trigger uses `tabindex="0"` so it's reachable by keyboard.
- `aria-describedby` links the trigger to the bubble's `id`, and the
  bubble carries `role="tooltip"`.
- The popover opens on `:focus-within` as well as `:hover`/`:focus`, so it
  also works if you nest a real interactive element inside the trigger
  instead of relying on the icon span alone.
- The pulse-ring animation is purely decorative (`::before`, no content)
  and is fully suppressed under `prefers-reduced-motion: reduce`.

## Browser support

Uses standard CSS custom properties, `:focus-visible`, `@keyframes`, and
`transform`/`transition` — no vendor prefixes needed for current
evergreen browsers (Chrome, Edge, Firefox, Safari).
