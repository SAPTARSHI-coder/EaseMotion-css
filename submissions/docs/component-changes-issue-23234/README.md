# Toggle Switch

A pure-CSS toggle switch (checkbox + label) with a sliding knob and animated track color.

## Usage

See `demo.html` for three variants: default, small, large.

```html
<label class="toggle">
  <input type="checkbox" />
  <span class="toggle-track">
    <span class="toggle-knob"></span>
  </span>
</label>
```

## Features

- No JS required, built on a native checkbox for accessibility
- Knob slides via `transform: translateX()`
- Track color transitions on check/uncheck
- `:focus-visible` outline for keyboard users
- Respects `prefers-reduced-motion` (disables transition, snaps state instead)

## Suggested class name

`ease-toggle` (per issue referenced in PR description)
