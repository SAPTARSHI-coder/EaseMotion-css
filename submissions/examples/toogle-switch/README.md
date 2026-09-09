# ease-toggle — Animated Toggle Switch

Fills a gap on the roadmap: **Form components (inputs, checkboxes, toggles) — Planned v1.1**.
A CSS-only, accessible toggle switch that follows EaseMotion CSS's "human-readable class name"
philosophy and reuses existing design tokens instead of introducing new ones.

## Why

EaseMotion CSS currently ships buttons and cards, but no form controls. A toggle switch is one
of the most requested UI primitives and is a natural first form component to submit toward the
v1.1 roadmap item.

## What it does

- Pure CSS, zero JavaScript — built on a hidden native `<input type="checkbox">` for full
  accessibility (keyboard, screen reader, form submission all work out of the box)
- Smooth thumb-slide animation using the same bounce easing as the rest of the framework
  (`--ease-ease-bounce`)
- Respects existing tokens: `--ease-color-primary`, `--ease-radius-full`, `--ease-shadow-md`,
  `--ease-speed-medium` — themeable the same way every other component already is
- `ease-toggle-sm` / `ease-toggle-lg` size modifiers, matching the `ease-btn-sm` / `ease-btn-lg`
  pattern already used for buttons
- Disabled and keyboard-focus states included

## Usage

```html
<label class="ease-toggle">
  <input type="checkbox" />
  <span class="ease-toggle-track">
    <span class="ease-toggle-thumb"></span>
  </span>
  <span class="ease-toggle-label">Enable notifications</span>
</label>
```

Pre-checked:

```html
<label class="ease-toggle">
  <input type="checkbox" checked />
  <span class="ease-toggle-track">
    <span class="ease-toggle-thumb"></span>
  </span>
  <span class="ease-toggle-label">Dark mode</span>
</label>
```

Sizes:

```html
<label class="ease-toggle ease-toggle-sm">...</label>
<label class="ease-toggle ease-toggle-lg">...</label>
```

## Files

- `demo.html` — live standalone demo (5 states: default, checked, small, large, disabled)
- `style.css` — the component styles, self-contained, no dependency beyond core `variables.css`
  tokens (falls back to sensible defaults if a token is missing)

## Accessibility notes

- Uses a real `<input type="checkbox">` under the hood, so it's operable with keyboard
  (Tab + Space) and announced correctly by screen readers as a checkbox/switch
- Includes a visible `:focus-visible` outline ring
- `disabled` state is styled and blocks pointer interaction

## Naming

Raw class names used here (`toggle`, `toggle-track`, `toggle-thumb`) are intentionally simple per
the contribution guide — happy for the maintainer to remap these to `ease-*` naming as part of
standardization.