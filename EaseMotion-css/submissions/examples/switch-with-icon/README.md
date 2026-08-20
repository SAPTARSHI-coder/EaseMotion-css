# Switch with Icon

**Category:** Toggle
**Issue:** #86810

A status switch whose icon swaps from a bell-off to a bell-ring as it
turns on. The knob slides across the track and the "on" icon plays a
small ring/wiggle animation the moment it becomes active.

## What it does
- Built on a real `<input type="checkbox">` for native keyboard support
  (Space/Enter, Tab) and screen-reader semantics — no JS required.
- Icon cross-fades and rotates between bell-off and bell-ring states.
- Track and knob color shift together with the checked state.
- Respects `prefers-reduced-motion` and `prefers-color-scheme`.

## How to use

```html
<label class="ease-switch-icon">
  <input type="checkbox" class="ease-switch-icon-input" />
  <span class="ease-switch-icon-track">
    <span class="ease-switch-icon-knob">
      <svg class="ease-switch-icon-bell-off">...</svg>
      <svg class="ease-switch-icon-bell-on">...</svg>
    </span>
  </span>
</label>
<span class="ease-switch-icon-label">Notifications</span>
```

Add `checked` or `disabled` on the `<input>` for those states.

## Why it fits EaseMotion CSS
- Zero dependencies, pure CSS state-driven animation (`:checked` sibling selectors)
- Themeable via CSS custom properties (`--ease-switch-on-bg`, `--ease-switch-icon-color-on`, etc.)
- Consistent with the framework's animation-first philosophy — spring-like
  easing on the knob, a short "ring" keyframe when switching on

## Browser support
Chrome, Firefox, Edge, Safari.
